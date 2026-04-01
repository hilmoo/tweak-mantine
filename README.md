# Tweak Mantine

An opinionated Mantine theme configuration based on [Geist Colors](https://vercel.com/geist/colors).

> [!IMPORTANT]
> This package is still under heavy development. Please open an issue if you find a bug.

## Install

Choose your package manager:

```bash
pnpm add @hilmoo/tweak-mantine @mantine/core @mantine/code-highlight
# or
npm install @hilmoo/tweak-mantine @mantine/core @mantine/code-highlight
# or
yarn add @hilmoo/tweak-mantine @mantine/core @mantine/code-highlight
```

> **Note:** Install optional extension packages if you plan to use their tweak themes (for example: charts, dates, dropzone, spotlight, or rich text editor).

---

## Setup

### 1) Import styles once

Add these imports to your main entry file:

```tsx
import "@hilmoo/tweak-mantine/styles/index.css";
// Import Mantine extension styles you use, for example:
import "@mantine/code-highlight/styles.css";
```

### 2) Create a merged theme

Combine your custom configuration with the Tweak presets:

```tsx
import { createTheme, mergeThemeOverrides } from "@mantine/core";
import {
  TWEAK_GEIST_COLORS,
  TWEAK_CORE_THEME,
} from "@hilmoo/tweak-mantine";

const myTheme = createTheme({
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
  // Add extension tweaks you use, e.g. TWEAK_CODE_HIGHLIGHT_THEME
  myTheme,
);
```

### 3) Configure MantineProvider

Pass the `theme` and `cssVariablesResolver` to the provider:

```tsx
import { MantineProvider } from "@mantine/core";
import { cssVariablesResolver } from "@hilmoo/tweak-mantine";
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