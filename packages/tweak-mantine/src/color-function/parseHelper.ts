import { parseThemeColor, MantineTheme } from "@mantine/core";

type ParseColorOptions = {
  color?: string;
  theme: MantineTheme;
  shade: number;
  fallback: string;
};

export function parseColor({ color, theme, shade, fallback }: ParseColorOptions): string {
  if (!color) {
    return fallback;
  }

  const parsed = parseThemeColor({ color, theme });

  if (parsed.isThemeColor) {
    return `var(--mantine-color-${parsed.color}-${parsed.shade ?? shade})`;
  }

  return parsed.color;
}
