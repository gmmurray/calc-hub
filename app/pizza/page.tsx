import CalcPage from '../../lib/components/layout/calcPage';
import { Grid } from '@mantine/core';
import PizzaCalculator from '../../lib/calculators/pizza/pizzaCalculator';

export default function PizzaPage() {
  return (
    <CalcPage
      title="Pizza Count Calculator"
      description="Party coming up? Use this calculator to figure out how many large pizzas you should order."
    >
      <PizzaCalculator />
    </CalcPage>
  );
}
