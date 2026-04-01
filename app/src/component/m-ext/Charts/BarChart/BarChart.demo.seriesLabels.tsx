import { BarChart } from "@mantine/charts";
import { MantineDemo } from "@mantinex/demo";
import { data, dataCode } from "./_data";

const code = `
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Smartphones', label: 'Smartphones sales', color: 'purple-dev-dev.6' },
        { name: 'Laptops', label: 'Laptops sales', color: 'blue-dev-dev.6' },
        { name: 'Tablets', label: 'Tablets sales', color: 'teal-dev-dev.6' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      withLegend
      legendProps={{ verticalAlign: "bottom" }}
      series={[
        { name: "Smartphones", label: "Phone sales", color: "purple-dev-dev.6" },
        { name: "Laptops", label: "Laptop sales", color: "blue-dev-dev.6" },
        { name: "Tablets", label: "Tablet sales", color: "teal-dev-dev.6" },
      ]}
    />
  );
}

export const seriesLabels: MantineDemo = {
  type: "code",
  component: Demo,
  code: [
    { code, language: "tsx", fileName: "Demo.tsx" },
    { code: dataCode, language: "tsx", fileName: "data.ts" },
  ],
};
