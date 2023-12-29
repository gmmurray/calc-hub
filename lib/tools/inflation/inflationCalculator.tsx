'use client';

import {
  ActionIcon,
  Button,
  Grid,
  Group,
  NumberInput,
  Paper,
  Text,
  Tooltip,
} from '@mantine/core';
import { DateInput, DatePickerInput } from '@mantine/dates';
import React, { useCallback, useState } from 'react';

import { IconReplace } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

function InflationCalculator() {
  const [amountInput, setAmountInput] = useState('');
  const [startDateInput, setStartDateInput] = useState<Date | null>(new Date());
  const [endDateInput, setEndDateInput] = useState<Date | null>(null);
  const [inflationResult, setInflationResult] = useState<string | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(false);

  const handleSubmitClick = useCallback(async () => {
    if (!startDateInput || !endDateInput || amountInput === '') {
      notifications.show({
        title: 'Oops!',
        color: 'red',
        message: 'Please enter valid values',
      });
      return;
    }
    setLoading(true);
    const result = await calculateInflationValue(
      amountInput,
      startDateInput,
      endDateInput,
    );
    setInflationResult(result);
    setLoading(false);
  }, [amountInput, endDateInput, startDateInput]);

  const handleResetClick = useCallback(() => {
    setAmountInput('');
    setStartDateInput(null);
    setEndDateInput(null);
    setLoading(false);
    setInflationResult(undefined);
  }, []);

  const handleSwap = useCallback(() => {
    const newStart = endDateInput;
    const newEnd = startDateInput;
    setStartDateInput(newStart);
    setEndDateInput(newEnd);
  }, [endDateInput, startDateInput]);

  return (
    <Grid>
      <Grid.Col
        span={{
          base: 12,
          lg: 4,
        }}
      >
        <NumberInput
          prefix="$"
          label="Value"
          placeholder="Value in USD"
          value={amountInput}
          onChange={value => setAmountInput(value.toString())}
        />
      </Grid.Col>
      <Grid.Col
        span={{
          base: 12,
          lg: 4,
        }}
      >
        <DateInput
          label="Start"
          value={startDateInput}
          onChange={value => setStartDateInput(value)}
        />
      </Grid.Col>
      <Grid.Col
        span={{
          base: 12,
          lg: 4,
        }}
      >
        <DateInput
          label="End"
          value={endDateInput}
          onChange={value => setEndDateInput(value)}
          rightSection={
            <Tooltip label="Swap dates">
              <ActionIcon onClick={handleSwap}>
                <IconReplace />
              </ActionIcon>
            </Tooltip>
          }
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Group>
          <Button
            variant="gradient"
            disabled={loading}
            onClick={handleSubmitClick}
          >
            Submit
          </Button>
          <Button variant="outline" onClick={handleResetClick}>
            Reset
          </Button>
        </Group>
      </Grid.Col>
      {inflationResult && (
        <Grid.Col span={12}>
          <Paper p="xl" mt="xs" radius="xs" withBorder>
            <Text>{`${inflationResult}`}</Text>
          </Paper>
        </Grid.Col>
      )}
    </Grid>
  );
}

export default InflationCalculator;

const calculateInflationValue = async (
  amount: string,
  start: Date,
  end: Date,
): Promise<string | undefined> => {
  try {
    const req = {
      country: 'united-states',
      start: start.toDateString(),
      end: end.toDateString(),
      amount,
      jsoncallback: '?',
    };
    const res = await fetch(INFLATION_API_URL + new URLSearchParams(req));
    return await res.json();
  } catch (error) {
    console.log('Error reaching inflation endpoint:');
    console.log(error);
    return undefined;
  }
};

const INFLATION_API_URL =
  'https://www.statbureau.org/calculate-inflation-price-json?';
