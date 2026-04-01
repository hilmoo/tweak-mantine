import { RingProgress, Stack, Text } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";

const code = `
import { RingProgress, Stack, Text } from '@mantine/core';

function Demo() {
  const sections = [
    { value: 40, color: 'blue-dev-dev' },
    { value: 25, color: 'amber-dev-dev' },
    { value: 15, color: 'green-dev-dev' },
  ];

  return (
    <Stack align="center">
      <div>
        <Text size="sm" ta="center" mb="xs">
          No gap (default)
        </Text>
        <RingProgress sections={sections} />
      </div>

      <div>
        <Text size="sm" ta="center" mb="xs">
          5° gap
        </Text>
        <RingProgress sections={sections} sectionGap={5} />
      </div>

      <div>
        <Text size="sm" ta="center" mb="xs">
          10° gap
        </Text>
        <RingProgress sections={sections} sectionGap={10} />
      </div>
    </Stack>
  );
}
`;

function Demo() {
  const sections = [
    { value: 40, color: "blue-dev-dev" },
    { value: 25, color: "amber-dev-dev" },
    { value: 15, color: "green-dev-dev" },
  ];

  return (
    <Stack align="center">
      <div>
        <Text size="sm" ta="center" mb="xs">
          No gap (default)
        </Text>
        <RingProgress sections={sections} />
      </div>

      <div>
        <Text size="sm" ta="center" mb="xs">
          5° gap
        </Text>
        <RingProgress sections={sections} sectionGap={5} />
      </div>

      <div>
        <Text size="sm" ta="center" mb="xs">
          10° gap
        </Text>
        <RingProgress sections={sections} sectionGap={10} />
      </div>
    </Stack>
  );
}

export const sectionGap: MantineDemo = {
  type: "code",
  component: Demo,
  code,
};
