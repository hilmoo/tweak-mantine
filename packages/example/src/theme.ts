import { createTheme, mergeThemeOverrides } from "@mantine/core";
import { TWEAK_CORE_THEME, TWEAK_GEIST_COLORS } from "@hilmo/tweak-mantine";

const component = createTheme({
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

export const Theme = mergeThemeOverrides(TWEAK_GEIST_COLORS, TWEAK_CORE_THEME, component);
