import { Grid } from '@mantine/core';
import PizzaCalculator from '../../lib/calculators/pizza/pizzaCalculator';
import ToolPage from '../../lib/components/layout/toolPage';

export default function PizzaPage() {
  return (
    <ToolPage
      title="Pizza Count Calculator"
      description="Party coming up? Use this calculator to figure out how many pizzas you should order."
    >
      <PizzaCalculator />
    </ToolPage>
  );
}
