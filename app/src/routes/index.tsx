import { createFileRoute } from "@tanstack/react-router";
import { Container, Stack, Text, Title } from "@mantine/core";
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
          code={`pnpm add @hilmoo/tweak-mantine @mantine/core @mantine/code-highlight
# or
npm install @hilmoo/tweak-mantine @mantine/core @mantine/code-highlight
# or
yarn add @hilmoo/tweak-mantine @mantine/core @mantine/code-highlight`}
        />

        <Text>
          Optional extension packages should also be installed if you use their tweak themes (for
          example: charts, dates, dropzone, spotlight, rich text editor).
        </Text>

        <Title order={2}>Setup</Title>

        <Title order={3}>1) Import styles once</Title>
        <CodeHighlight
          language="tsx"
          code={`import "@hilmoo/tweak-mantine/styles/index.css";
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
} from "@hilmoo/tweak-mantine";

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
import { cssVariablesResolver } from "@hilmoo/tweak-mantine";
import { theme } from "./theme";

export function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} deduplicateCssVariables={false}>
      {/* app */}
    </MantineProvider>
  );
}`}
        />
      </Stack>
    </Container>
  );
}
