import { MantineTheme, MantineColor, alpha } from "@mantine/core";

interface GetColorVariablesInput {
  theme: MantineTheme;
  color: MantineColor;
  colorScheme: "light" | "dark";
  name?: string;
  withColorValues?: boolean;
}

export function getCSSColorVariables({
  theme,
  color,
  colorScheme,
  name = color,
  withColorValues = true,
}: GetColorVariablesInput) {
  if (!theme.colors[color]) {
    return {};
  }

  if (colorScheme === "light") {
    const dynamicVariables = {
      [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-9)`,
      [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-6)`,
      [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-7)`,
      [`--mantine-color-${name}-light`]: `var(--mantine-color-${name}-0)`,
      [`--mantine-color-${name}-light-hover`]: `var(--mantine-color-${name}-1)`,
      [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-8)`,
      [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-6)`,
      [`--mantine-color-${name}-outline-hover`]: alpha(theme.colors[color][6], 0.2),
    };

    if (!withColorValues) {
      return dynamicVariables;
    }

    return {
      [`--mantine-color-${name}-0`]: theme.colors[color][0],
      [`--mantine-color-${name}-1`]: theme.colors[color][1],
      [`--mantine-color-${name}-2`]: theme.colors[color][2],
      [`--mantine-color-${name}-3`]: theme.colors[color][3],
      [`--mantine-color-${name}-4`]: theme.colors[color][4],
      [`--mantine-color-${name}-5`]: theme.colors[color][5],
      [`--mantine-color-${name}-6`]: theme.colors[color][6],
      [`--mantine-color-${name}-7`]: theme.colors[color][7],
      [`--mantine-color-${name}-8`]: theme.colors[color][8],
      [`--mantine-color-${name}-9`]: theme.colors[color][9],
      ...dynamicVariables,
    };
  }

  const dynamicVariables = {
    [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-9)`,
    [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-6)`,
    [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-7)`,
    [`--mantine-color-${name}-light`]: `var(--mantine-color-${name}-0)`,
    [`--mantine-color-${name}-light-hover`]: `var(--mantine-color-${name}-1)`,
    [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-8)`,
    [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-6)`,
    [`--mantine-color-${name}-outline-hover`]: alpha(theme.colors[color][6], 0.2),
  };

  if (!withColorValues) {
    return dynamicVariables;
  }

  return {
    [`--mantine-color-${name}-0`]: theme.colors[color][0],
    [`--mantine-color-${name}-1`]: theme.colors[color][1],
    [`--mantine-color-${name}-2`]: theme.colors[color][2],
    [`--mantine-color-${name}-3`]: theme.colors[color][3],
    [`--mantine-color-${name}-4`]: theme.colors[color][4],
    [`--mantine-color-${name}-5`]: theme.colors[color][5],
    [`--mantine-color-${name}-6`]: theme.colors[color][6],
    [`--mantine-color-${name}-7`]: theme.colors[color][7],
    [`--mantine-color-${name}-8`]: theme.colors[color][8],
    [`--mantine-color-${name}-9`]: theme.colors[color][9],
    ...dynamicVariables,
  };
}
