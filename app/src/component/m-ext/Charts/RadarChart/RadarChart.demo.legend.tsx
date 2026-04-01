import { RadarChart } from "@mantine/charts";
import { MantineDemo } from "@mantinex/demo";
import { multiData, multiDataCode } from "./_data";

const code = `
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      withLegend
      series={[
        { name: 'Sales January', color: 'blue-dev-dev.6', opacity: 0.2 },
        { name: 'Sales February', color: 'amber-dev-dev.6', opacity: 0.2 },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <RadarChart
      h={300}
      data={multiData}
      dataKey="product"
      withPolarRadiusAxis
      withLegend
      series={[
        { name: "Sales January", color: "blue-dev-dev.6", opacity: 0.2 },
        { name: "Sales February", color: "amber-dev-dev.6", opacity: 0.2 },
      ]}
    />
  );
}

export const legend: MantineDemo = {
  type: "code",
  component: Demo,
  code: [
    { code, language: "tsx", fileName: "Demo.tsx" },
    { code: multiDataCode, language: "tsx", fileName: "data.ts" },
  ],
};
