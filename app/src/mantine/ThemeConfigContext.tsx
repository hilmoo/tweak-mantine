import { useMemo, ReactNode, useContext, createContext, useState } from "react";
import {
  MantineColorsTuple,
  MantineProvider,
  mergeThemeOverrides,
  virtualColor,
} from "@mantine/core";
import { Theme } from "~/mantine/theme";
import { cssVariablesResolver } from "~/mantine/tweak-mantine";
import { generateRadixColors } from "~/utils/generateRadixColors";

type ColorMode = "Geist" | "Radix";

interface ColorConfig {
  backgroundPrimaryDark: string;
  backgroundSecondaryDark: string;
  backgroundPrimaryLight: string;
  backgroundSecondaryLight: string;
  colorMode: ColorMode;
  neutralColor: string;
  primaryColor: string;
  radixParams: { accent: string; gray: string };
}

export const DEFAULT_COLOR_CONFIG: ColorConfig = {
  backgroundPrimaryDark: "#000000",
  backgroundSecondaryDark: "#0A0A0A",
  backgroundPrimaryLight: "#F9FAFB",
  backgroundSecondaryLight: "#FFFFFF",
  colorMode: "Geist",
  neutralColor: import.meta.env.DEV ? "gray-dev-dev" : "gray",
  primaryColor: import.meta.env.DEV ? "blue-dev-dev" : "blue",
  radixParams: { accent: "#3D63DD", gray: "#8e99ab" },
};

interface ThemeConfigContextType {
  config: ColorConfig;
  updateConfig: (updates: Partial<ColorConfig>) => void;
  themeCode: string; // <-- Add this to expose the generated code
}

const ThemeConfigContext = createContext<ThemeConfigContextType | null>(null);

export function useThemeConfig() {
  const context = useContext(ThemeConfigContext);
  if (!context) {
    throw new Error("useThemeConfig must be used within a ThemeConfigProvider");
  }
  return context;
}

export function ThemeConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ColorConfig>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("themeConfig");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return { ...DEFAULT_COLOR_CONFIG, ...parsed };
        } catch (e) {
          return DEFAULT_COLOR_CONFIG;
        }
      }
    }
    return DEFAULT_COLOR_CONFIG;
  });

  const updateConfig = (updates: Partial<ColorConfig>) => {
    setConfig((prev) => {
      const newConfig = { ...prev, ...updates };
      localStorage.setItem("themeConfig", JSON.stringify(newConfig));
      return newConfig;
    });
  };

  const { dynamicTheme, themeCode } = useMemo(() => {
    const colors: Record<string, MantineColorsTuple> = {};
    let activePrimaryColor = config.primaryColor;
    let activeNeutralColor = config.neutralColor;

    const isRadixMode = config.colorMode === "Radix";

    if (isRadixMode) {
      const radixLight = generateRadixColors({
        appearance: "light",
        accent: config.radixParams.accent,
        gray: config.radixParams.gray,
        background: config.backgroundPrimaryLight,
      });

      colors["radix-primary-light"] = radixLight.accentScale.slice(
        2,
      ) as unknown as MantineColorsTuple;
      colors["radix-neutral-light"] = radixLight.grayScale.slice(
        2,
      ) as unknown as MantineColorsTuple;

      const radixDark = generateRadixColors({
        appearance: "dark",
        accent: config.radixParams.accent,
        gray: config.radixParams.gray,
        background: config.backgroundPrimaryDark,
      });
      colors["radix-primary-dark"] = radixDark.accentScale.slice(
        2,
      ) as unknown as MantineColorsTuple;
      colors["radix-neutral-dark"] = radixDark.grayScale.slice(2) as unknown as MantineColorsTuple;

      colors["radix-primary"] = virtualColor({
        name: "radix-primary",
        light: "radix-primary-light",
        dark: "radix-primary-dark",
      });
      activePrimaryColor = "radix-primary";

      colors["radix-neutral"] = virtualColor({
        name: "radix-neutral",
        light: "radix-neutral-light",
        dark: "radix-neutral-dark",
      });
      activeNeutralColor = "radix-neutral";
    }

    const themeOverridePayload = {
      colors,
      primaryColor: activePrimaryColor,
      other: {
        colorBackgroundLight: config.backgroundPrimaryLight,
        colorBackgroundDark: config.backgroundPrimaryDark,
        colorSecondaryBackgroundLight: config.backgroundSecondaryLight,
        colorSecondaryBackgroundDark: config.backgroundSecondaryDark,
        neutralColor: activeNeutralColor,
      },
    };

    const generatedCode = `import { createTheme } from '@mantine/core';

export const mytheme = createTheme(${JSON.stringify(themeOverridePayload, null, 2)});`;

    return {
      dynamicTheme: mergeThemeOverrides(Theme, themeOverridePayload),
      themeCode: generatedCode,
    };
  }, [config]);

  return (
    <ThemeConfigContext.Provider value={{ config, updateConfig, themeCode }}>
      <MantineProvider
        theme={dynamicTheme}
        cssVariablesResolver={cssVariablesResolver}
        deduplicateCssVariables={false}
      >
        {children}
      </MantineProvider>
    </ThemeConfigContext.Provider>
  );
}
