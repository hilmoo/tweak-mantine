import { BubbleChart } from "@mantine/charts";
import { MantineDemo } from "@mantinex/demo";
import { data, dataCode } from "./_data";
import classes from "./BubbleChart.demo.gridColor.module.css";

const cssCode = `
.root {
  @mixin light {
    --chart-grid-color: alpha(var(--mantine-color-black), 0.15);
    --chart-text-color: var(--mantine-color-gray-dev-dev-7);
  }

  @mixin dark {
    --chart-grid-color: alpha(var(--mantine-color-white), 0.15);
    --chart-text-color: var(--mantine-color-gray-dev-dev-0);
  }
}`;

const code = `
import { BubbleChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="green-dev-dev.6"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}
`;

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="green-dev-dev.6"
      className={classes.root}
      dataKey={{ x: "hour", y: "index", z: "value" }}
    />
  );
}

export const gridColor: MantineDemo = {
  type: "code",
  component: Demo,
  code: [
    { code, language: "tsx", fileName: "Demo.tsx" },
    { code: cssCode, language: "scss", fileName: "Demo.module.css" },
    { code: dataCode, language: "tsx", fileName: "data.ts" },
  ],
};
