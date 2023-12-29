import InflationCalculator from '../../lib/tools/inflation/inflationCalculator';
import React from 'react';
import ToolPage from '../../lib/components/layout/toolPage';

function InflationPage() {
  return (
    <ToolPage
      title="Inflation Calculator"
      description="Calculate how much a certain amount of money would be worth at a different point in history"
    >
      <InflationCalculator />
    </ToolPage>
  );
}

export default InflationPage;
