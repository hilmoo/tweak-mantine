import { AreaChart } from "@mantine/charts";
import { MantineDemo } from "@mantinex/demo";
import { data, dataCode } from "./_data";

const code = `
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'purple-dev-dev.6', curveType: 'linear' },
        { name: 'Oranges', color: 'blue-dev-dev.6', curveType: 'bump' },
        { name: 'Tomatoes', color: 'teal-dev-dev.6', curveType: 'stepAfter' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: "Apples", color: "purple-dev-dev.6", curveType: "linear" },
        { name: "Oranges", color: "blue-dev-dev.6", curveType: "bump" },
        { name: "Tomatoes", color: "teal-dev-dev.6", curveType: "stepAfter" },
      ]}
    />
  );
}

export const curveType: MantineDemo = {
  type: "code",
  component: Demo,
  code: [
    { code, language: "tsx", fileName: "Demo.tsx" },
    { code: dataCode, language: "tsx", fileName: "data.ts" },
  ],
};
