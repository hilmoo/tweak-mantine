import { RingProgress } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";

const code = `
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'amber-dev-dev' }]} rootColor="red" />;
}
`;

function Demo() {
  return <RingProgress sections={[{ value: 40, color: "amber-dev-dev" }]} rootColor="red" />;
}

export const rootColor: MantineDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
