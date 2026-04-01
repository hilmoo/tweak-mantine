import { ReferenceArea } from "recharts";
import { LineChart } from "@mantine/charts";
import { MantineDemo } from "@mantinex/demo";
import { data, dataCode } from "./_data";

const code = `
import { ReferenceArea } from 'recharts';
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'purple-dev-dev.6' },
        { name: 'Oranges', color: 'blue-dev-dev.6' },
        { name: 'Tomatoes', color: 'teal-dev-dev.6' },
      ]}
    >
      <ReferenceArea
        x1="Mar 23"
        x2="Mar 25"
        y1={1200}
        y2={3200}
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-dev-dev-4)"
        stroke="var(--mantine-color-gray-dev-dev-6)"
        strokeWidth={1}
        label={{
          value: 'Weekend sales target',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </LineChart>
  );
}
`;

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: "Apples", color: "purple-dev-dev.6" },
        { name: "Oranges", color: "blue-dev-dev.6" },
        { name: "Tomatoes", color: "teal-dev-dev.6" },
      ]}
    >
      <ReferenceArea
        x1="Mar 23"
        x2="Mar 25"
        y1={1200}
        y2={3200}
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-dev-dev-4)"
        stroke="var(--mantine-color-gray-dev-dev-6)"
        strokeWidth={1}
        label={{
          value: "Weekend sales target",
          position: "insideTopRight",
          fontSize: 12,
          fill: "var(--mantine-color-bright)",
        }}
      />
    </LineChart>
  );
}

export const referenceArea: MantineDemo = {
  type: "code",
  component: Demo,
  code: [
    { code, language: "tsx", fileName: "Demo.tsx" },
    { code: dataCode, language: "tsx", fileName: "data.ts" },
  ],
};
