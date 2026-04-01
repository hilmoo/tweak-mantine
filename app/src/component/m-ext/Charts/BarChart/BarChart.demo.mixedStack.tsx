import { BarChart } from "@mantine/charts";
import { MantineDemo } from "@mantinex/demo";
import { mixedStackData, mixedStackDataCode } from "./_data";

const code = `
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'purple-dev-dev.6', stackId: 'a' },
        { name: 'Laptops', color: 'blue-dev-dev.6', stackId: 'b' },
        { name: 'Tablets', color: 'teal-dev-dev.6', stackId: 'b' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <BarChart
      h={300}
      data={mixedStackData}
      dataKey="month"
      series={[
        { name: "Smartphones", color: "purple-dev-dev.6", stackId: "a" },
        { name: "Laptops", color: "blue-dev-dev.6", stackId: "b" },
        { name: "Tablets", color: "teal-dev-dev.6", stackId: "b" },
      ]}
    />
  );
}

export const mixedStack: MantineDemo = {
  type: "code",
  component: Demo,
  code: [
    { code, language: "tsx", fileName: "Demo.tsx" },
    { code: mixedStackDataCode, language: "tsx", fileName: "data.ts" },
  ],
};
