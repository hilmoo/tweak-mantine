import { createTheme, mergeThemeOverrides } from "@mantine/core";
import {
  TWEAK_CORE_THEME,
  TWEAK_CODE_HIGHLIGHT_THEME,
  TWEAK_DROPZONE_THEME,
  TWEAK_SPOTLIGHT_THEME,
  TWEAK_RICH_TEXT_EDITOR_THEME,
  TWEAK_CHARTS_THEME,
  TWEAK_DATES_THEME,
} from "./tweak-mantine";

import { TWEAK_GEIST_COLORS as PROD_COLORS } from "./tweak-mantine/color";
import { TWEAK_GEIST_COLORS as DEV_COLORS } from "./tweak-mantine/color-dev";

export const TWEAK_GEIST_COLORS = import.meta.env.DEV ? DEV_COLORS : PROD_COLORS;

const component = createTheme({
  fontFamily: "Geist",
  primaryColor: "blue-dev-dev",
  white: "hsla(0,0%,93%,1)",
  black: "hsla(0,0%,9%,1)",

  other: {
    colorBackgroundLight: "hsla(0,0%,98%,1)",
    colorBackgroundDark: "hsla(0,0%,0%,1)",
    colorSecondaryBackgroundLight: "hsla(0,0%,100%,1)",
    colorSecondaryBackgroundDark: "hsla(0,0%,4%,1)",
    neutralColor: "gray-dev-dev",
  },
});

export const Theme = mergeThemeOverrides(
  TWEAK_GEIST_COLORS,
  TWEAK_CORE_THEME,
  TWEAK_CODE_HIGHLIGHT_THEME,
  TWEAK_DROPZONE_THEME,
  TWEAK_SPOTLIGHT_THEME,
  TWEAK_RICH_TEXT_EDITOR_THEME,
  TWEAK_CHARTS_THEME,
  TWEAK_DATES_THEME,
  component,
);
