import { Highlight } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      highlight={[
        { text: 'error', color: 'red-dev-dev' },
        { text: 'warning', color: 'amber-dev-dev' },
        { text: 'success', color: 'green-dev-dev' },
      ]}
    >
      Error: Invalid input. Warning: Check this field. Success: All tests passed.
    </Highlight>
  );
}
`;

function Demo() {
  return (
    <Highlight
      highlight={[
        { text: "error", color: "red-dev-dev" },
        { text: "warning", color: "amber-dev-dev" },
        { text: "success", color: "green-dev-dev" },
      ]}
    >
      Error: Invalid input. Warning: Check this field. Success: All tests passed.
    </Highlight>
  );
}

export const colors: MantineDemo = {
  type: "code",
  code,
  component: Demo,
};
