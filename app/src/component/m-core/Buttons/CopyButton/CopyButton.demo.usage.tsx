import { Button, CopyButton } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";

const code = `
import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal-dev-dev' : 'blue-dev-dev'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`;

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? "teal-dev-dev" : "blue-dev-dev"} onClick={copy}>
          {copied ? "Copied url" : "Copy url"}
        </Button>
      )}
    </CopyButton>
  );
}

export const usage: MantineDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
