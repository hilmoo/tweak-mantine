# Tweak Mantine

An opinionated Mantine theme configuration based on [Geist Colors](https://vercel.com/geist/colors).

> [!IMPORTANT]
> This package is still under heavy development. Please open an issue if you find a bug.

## Install

Choose your package manager:

```bash
pnpm add @hilmo/tweak-mantine @mantine/core @mantine/code-highlight
# or
npm install @hilmo/tweak-mantine @mantine/core @mantine/code-highlight
# or
yarn add @hilmo/tweak-mantine @mantine/core @mantine/code-highlight
```

Optional extension packages should also be installed if you use their tweak themes (for example: charts, dates, dropzone, spotlight, rich text editor).

---

## Setup

### 1) Import styles once

```tsx
import "@hilmo/tweak-mantine/styles/index.css";
// import Mantine extension styles you use, for example:
import "@mantine/code-highlight/styles.css";
```

### 2) Create merged theme

```tsx
import { createTheme, mergeThemeOverrides } from "@mantine/core";
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
);
```

### 3) Configure MantineProvider

```tsx
import { MantineProvider } from "@mantine/core";
import { cssVariablesResolver } from "@hilmo/tweak-mantine";
import { theme } from "./theme";

export function App() {
  return (
    <MantineProvider 
      theme={theme} 
      cssVariablesResolver={cssVariablesResolver} 
      deduplicateCssVariables={false}
    >
      {/* app */}
    </MantineProvider>
  );
}
```

---

## Notes

* All colors used in the demo come from `TWEAK_GEIST_COLORS`. If you want to use these colors, you should merge them into your theme.
* You should remove the `-dev-dev` suffix from the colors when copying from the demo, it is only for development purposes.
* For an example app, you can check [here](https://github.com/hilmoo/tweak-mantine/tree/main/packages/example).
