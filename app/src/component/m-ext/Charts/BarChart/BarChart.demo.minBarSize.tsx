import { BarChart } from "@mantine/charts";
import { MantineDemo } from "@mantinex/demo";
import { zeroData, zeroDataCode } from "./_data";

const code = `
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      minBarSize={10}
      series={[
        { name: 'Smartphones', color: 'purple-dev-dev.6' },
        { name: 'Laptops', color: 'blue-dev-dev.6' },
        { name: 'Tablets', color: 'teal-dev-dev.6' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <BarChart
      h={300}
      data={zeroData}
      dataKey="month"
      minBarSize={10}
      series={[
        { name: "Smartphones", color: "purple-dev-dev.6" },
        { name: "Laptops", color: "blue-dev-dev.6" },
        { name: "Tablets", color: "teal-dev-dev.6" },
      ]}
    />
  );
}

export const minBarSize: MantineDemo = {
  type: "code",
  component: Demo,
  code: [
    { code, language: "tsx", fileName: "Demo.tsx" },
    { code: zeroDataCode, language: "tsx", fileName: "data.ts" },
  ],
};
