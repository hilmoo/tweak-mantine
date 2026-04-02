import {
  MantineTheme,
  ConvertCSSVariablesInput,
  keys,
  rem,
  getPrimaryContrastColor,
  isVirtualColor,
} from "@mantine/core";
import { getCSSColorVariables } from "./gest-css-color-variables";

export type CSSVariablesResolver = (theme: MantineTheme) => ConvertCSSVariablesInput;

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<string, string>,
  name: string,
) {
  keys(sizes).forEach((size) =>
    Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] }),
  );
}

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const neutralColor = theme.other["neutralColor"] || theme.primaryColor;

  const defaultRadius =
    theme.defaultRadius in theme.radius
      ? theme.radius[theme.defaultRadius as "xs"]
      : rem(theme.defaultRadius);

  const result: ConvertCSSVariablesInput = {
    variables: {
      "--mantine-z-index-app": "100",
      "--mantine-z-index-modal": "200",
      "--mantine-z-index-popover": "300",
      "--mantine-z-index-overlay": "400",
      "--mantine-z-index-max": "9999",
      "--mantine-scale": theme.scale.toString(),
      "--mantine-cursor-type": theme.cursorType,
      "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": theme.white,
      "--mantine-color-black": theme.black,
      "--mantine-line-height": theme.lineHeights.md,
      "--mantine-font-family": theme.fontFamily,
      "--mantine-font-family-monospace": theme.fontFamilyMonospace,
      "--mantine-font-family-headings": theme.headings.fontFamily,
      "--mantine-heading-font-weight": theme.headings.fontWeight,
      "--mantine-heading-text-wrap": theme.headings.textWrap,
      "--mantine-radius-default": defaultRadius,

      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${theme.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${theme.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${theme.primaryColor}-light-color)`,

      // Other
      "--mantine-color-placeholder": `var(--mantine-color-${neutralColor}-8)`,
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-8) !important`,
      "--mantine-color-dimmed": `var(--mantine-color-${neutralColor}-6)`,
      "--mantine-color-default": `var(--mantine-color-${neutralColor}-0)`,
      "--mantine-color-default-hover": `var(--mantine-color-${neutralColor}-1)`,
      "--mantine-color-default-color": `var(--mantine-color-${neutralColor}-9)`,
      "--mantine-color-default-border": `var(--mantine-color-${neutralColor}-3)`,
      "--mantine-color-disabled": `var(--mantine-color-${neutralColor}-0)`,
      "--mantine-color-disabled-color": `var(--mantine-color-${neutralColor}-6)`,
      "--mantine-color-disabled-border": `var(--mantine-color-${neutralColor}-4)`,
      "--mantine-color-error": `var(--mantine-color-red-6)`,
    },
    light: {
      "--mantine-color-scheme": "light",
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "light"),
      "--mantine-color-bright": theme.black,
      "--mantine-color-text": theme.black,
      "--mantine-color-body": theme.other["colorBackgroundLight"],
      "--mantine-color-body-secondary": theme.other["colorSecondaryBackgroundLight"],
    },
    dark: {
      "--mantine-color-scheme": "dark",
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "dark"),
      "--mantine-color-bright": theme.white,
      "--mantine-color-text": theme.white,
      "--mantine-color-body": theme.other["colorBackgroundDark"],
      "--mantine-color-body-secondary": theme.other["colorSecondaryBackgroundDark"],
    },
  };

  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");

  theme.colors[theme.primaryColor].forEach((_, index) => {
    result.variables[`--mantine-primary-color-${index}`] =
      `var(--mantine-color-${theme.primaryColor}-${index})`;
  });

  if (theme.other["neutralColor"]) {
    theme.colors[neutralColor].forEach((_, index) => {
      result.variables[`--mantine-neutral-color-${index}`] =
        `var(--mantine-color-${neutralColor}-${index})`;
    });
  }

  keys(theme.colors).forEach((color) => {
    const value = theme.colors[color];

    if (isVirtualColor(value)) {
      Object.assign(
        result.light,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.light,
          colorScheme: "light",
          withColorValues: true,
        }),
      );

      Object.assign(
        result.dark,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.dark,
          colorScheme: "dark",
          withColorValues: true,
        }),
      );

      return;
    }

    value.forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
    });

    Object.assign(
      result.light,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: "light",
        withColorValues: false,
      }),
    );

    Object.assign(
      result.dark,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: "dark",
        withColorValues: false,
      }),
    );
  });

  const headings = theme.headings.sizes;

  keys(headings).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] =
      headings[heading].fontWeight || theme.headings.fontWeight;
  });

  return result;
};
