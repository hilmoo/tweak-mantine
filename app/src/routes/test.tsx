import { createFileRoute } from "@tanstack/react-router";
import { CodeHighlightTabs } from "@mantine/code-highlight";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <CodeHighlightTabs
      radius="md"
      code={[
        { fileName: "Demo.tsx", code: tsxCode, language: "tsx" },
        { fileName: "Demo.module.css", code: cssCode, language: "scss" },
      ]}
    />
  );
}
export const tsxCode = `
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`;

export const cssCode = `
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`;
