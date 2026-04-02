import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Code, Container, List, Stack, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1}>Tweak Mantine</Title>

        <Title order={2}>Install</Title>
        <Text>Choose your package manager:</Text>
        <CodeHighlight
          language="bash"
          code={`pnpm add @hilmo/tweak-mantine @mantine/core @mantine/code-highlight
# or
npm install @hilmo/tweak-mantine @mantine/core @mantine/code-highlight
# or
yarn add @hilmo/tweak-mantine @mantine/core @mantine/code-highlight`}
        />

        <Text>
          Optional extension packages should also be installed if you use their tweak themes (for
          example: charts, dates, dropzone, spotlight, rich text editor).
        </Text>

        <Title order={2}>Setup</Title>

        <Title order={3}>1) Import styles once</Title>
        <CodeHighlight
          language="tsx"
          code={`import "@hilmo/tweak-mantine/styles/index.css";
// import Mantine extension styles you use, for example:
import "@mantine/code-highlight/styles.css";`}
        />

        <Title order={3}>2) Create merged theme</Title>
        <CodeHighlight
          language="tsx"
          code={`import { createTheme, mergeThemeOverrides } from "@mantine/core";
import {
  TWEAK_GEIST_COLORS,
  TWEAK_CORE_THEME,
} from "@hilmo/tweak-mantine";

const mytheme = createTheme({
  primaryColor: "blue",
  white: "hsla(0,0%,93%,1)",
  black: "hsla(0,0%,9%,1)",
  other: {
    colorBackgroundLight: "hsla(0,0%,98%,1)",
    colorBackgroundDark: "hsla(0,0%,0%,1)",
    colorSecondaryBackgroundLight: "hsla(0,0%,100%,1)",
    colorSecondaryBackgroundDark: "hsla(0,0%,4%,1)",
    neutralColor: "gray",
  },
});

export const theme = mergeThemeOverrides(
  TWEAK_GEIST_COLORS,
  TWEAK_CORE_THEME,
  // add extension tweaks you use, e.g. TWEAK_CODE_HIGHLIGHT_THEME
  mytheme,
);`}
        />

        <Title order={3}>3) Configure MantineProvider</Title>
        <CodeHighlight
          language="tsx"
          code={`import { MantineProvider } from "@mantine/core";
import { cssVariablesResolver } from "@hilmo/tweak-mantine";
import { theme } from "./theme";

export function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
      {/* app */}
    </MantineProvider>
  );
}`}
        />
        <Title order={2}>Notes</Title>
        <List>
          <List.Item>
            All colors used in the demo come from <Code>TWEAK_GEIST_COLORS</Code>. If you want to
            use these colors, you should merge them into your theme.
          </List.Item>
          <List.Item>
            You should remove the <Code>-dev-dev</Code> suffix from the colors when copying from the
            demo, it is only for development purposes.
          </List.Item>
          <List.Item>
            For an example app, you can check{" "}
            <Anchor
              href="https://github.com/hilmoo/tweak-mantine/tree/main/packages/example"
              target="_blank"
            >
              here
            </Anchor>
          </List.Item>
        </List>
      </Stack>
    </Container>
  );
}
