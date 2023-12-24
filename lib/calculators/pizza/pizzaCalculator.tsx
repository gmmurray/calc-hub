'use client';

import { Grid, NumberInput } from '@mantine/core';
import React, { useState } from 'react';

import { useInputState } from '@mantine/hooks';

function PizzaCalculator() {
  const [peopleInput, setPeopleInput] = useInputState(1);
  const [slicePerPersonInput, setSlicePerPersonInput] = useInputState(3);
  const [slicePerPizzaInput, setSlicePerPizzaInput] = useInputState(8);
  return (
    <Grid>
      <Grid.Col span={12}>
        <NumberInput
          label="People"
          placeholder="People"
          description="How many people do you need to feed?"
          min={1}
          allowDecimal={false}
          value={peopleInput}
          onChange={value => setPeopleInput(value as number)}
        />
      </Grid.Col>
      <Grid.Col span={6}>
        {Math.max(
          Math.round((peopleInput * slicePerPersonInput) / slicePerPizzaInput),
          1,
        )}
      </Grid.Col>
    </Grid>
  );
}

export default PizzaCalculator;

// num pizzas = num people * slice per person / slice per pizza
