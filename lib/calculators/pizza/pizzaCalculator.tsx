'use client';

import { Grid, NumberInput, Paper, Select, Text } from '@mantine/core';
import React, { useMemo } from 'react';

import { PizzaEngine } from './pizzaEngine';
import { useInputState } from '@mantine/hooks';

function PizzaCalculator() {
  const [peopleInput, setPeopleInput] = useInputState(1);
  const [appetiteInput, setAppetiteInput] =
    useInputState<PizzaEngine['appetite']>('medium');
  const [pizzaSizeInput, setPizzaSizeInput] =
    useInputState<PizzaEngine['pizzaSize']>('large');

  const pizzaEngine = useMemo(
    () => new PizzaEngine(peopleInput, appetiteInput, pizzaSizeInput),
    [appetiteInput, peopleInput, pizzaSizeInput],
  );

  return (
    <Grid>
      <Grid.Col
        span={{
          base: 12,
          lg: 4,
        }}
      >
        <NumberInput
          label="People"
          description="How many people do you need to feed?"
          min={1}
          allowDecimal={false}
          value={peopleInput}
          onChange={value => setPeopleInput(value as number)}
        />
      </Grid.Col>
      <Grid.Col
        span={{
          base: 12,
          lg: 4,
        }}
      >
        <Select
          label="Appetite"
          description="How hungry is everyone?"
          data={PizzaEngine.appetiteOptions()}
          value={appetiteInput}
          onChange={value => setAppetiteInput(value as typeof appetiteInput)}
        />
      </Grid.Col>
      <Grid.Col
        span={{
          base: 12,
          lg: 4,
        }}
      >
        <Select
          label="Pizza Size"
          description="What size pizzas do you want?"
          data={PizzaEngine.pizzaSizeOptions()}
          value={pizzaSizeInput}
          onChange={value => setPizzaSizeInput(value as typeof pizzaSizeInput)}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Paper p="xl" mt="xs" radius="xs" withBorder>
          <Text>{`${Math.max(
            Math.round(pizzaEngine.getNumPizzas()),
            1,
          )} pizza(s)`}</Text>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}

export default PizzaCalculator;

// num pizzas = num people * slice per person / slice per pizza
