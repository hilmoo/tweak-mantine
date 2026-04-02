import { createTheme, mergeThemeOverrides } from "@mantine/core";
import { TWEAK_CORE_THEME, variantColorsResolver } from "./tweak-mantine";

import { TWEAK_GEIST_COLORS } from "./tweak-mantine/color-dev";
import { TWEAK_CODE_HIGHLIGHT_THEME } from "./tweak-mantine/ext/code-highlight/theme";
import { TWEAK_DROPZONE_THEME } from "./tweak-mantine/ext/dropzone/theme";
import { TWEAK_SPOTLIGHT_THEME } from "./tweak-mantine/ext/spotlight/theme";
import { TWEAK_RICH_TEXT_EDITOR_THEME } from "./tweak-mantine/ext/tiptap/theme";
import { TWEAK_CHARTS_THEME } from "./tweak-mantine/ext/charts/theme";
import { TWEAK_DATES_THEME } from "./tweak-mantine/ext/dates/theme";
import { TWEAK_SCHEDULE_THEME } from "./tweak-mantine/ext/schedule/theme";

const component = createTheme({
  variantColorResolver: variantColorsResolver,
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
  TWEAK_SCHEDULE_THEME,
  component,
);
