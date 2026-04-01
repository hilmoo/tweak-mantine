import { RingProgress, Text } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";

const code = `
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'blue-dev-dev' },
        { value: 15, color: 'amber-dev-dev' },
        { value: 15, color: 'green-dev-dev' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: "blue-dev-dev" },
        { value: 15, color: "amber-dev-dev" },
        { value: 15, color: "green-dev-dev" },
      ]}
    />
  );
}

export const usage: MantineDemo = {
  type: "code",
  code,
  centered: true,
  component: Demo,
};
