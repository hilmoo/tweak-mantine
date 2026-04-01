import { Button, ColorInput, Divider, Select, Stack, Title, CopyButton, Text } from "@mantine/core";
import { ConfiguratorColorControl } from "@mantinex/demo";
import { DEFAULT_COLOR_CONFIG, useThemeConfig } from "~/mantine/ThemeConfigContext";

export function ColorConfigurator() {
  const { config, updateConfig, themeCode } = useThemeConfig();

  const colorModeOptions =
    config.backgroundMode === "Radix"
      ? [{ value: "Radix", label: "Radix Generator" }]
      : [
          { value: "Geist", label: "Geist Colors" },
          { value: "Radix", label: "Radix Generator" },
        ];

  return (
    <Stack p="md" gap="sm">
      <Title order={5}>Background Mode</Title>
      <Select
        data={[
          { value: "Geist", label: "Geist Backgrounds" },
          { value: "Radix", label: "Radix Backgrounds" },
          { value: "Custom", label: "Custom Backgrounds" },
        ]}
        value={config.backgroundMode}
        onChange={(val) => {
          const newBgMode = val as "Geist" | "Radix" | "Custom";

          if (newBgMode === "Radix") {
            updateConfig({ backgroundMode: newBgMode, colorMode: "Radix" });
          } else {
            updateConfig({ backgroundMode: newBgMode });
          }
        }}
        allowDeselect={false}
      />

      {config.backgroundMode === "Geist" && (
        <Text size="sm" c="dimmed">
          Using standard default Geist backgrounds.
        </Text>
      )}

      {config.backgroundMode === "Radix" && (
        <Stack gap="sm">
          <Text size="sm" c="dimmed">
            Calculates background palette from a base color using Radix
          </Text>
          <ColorInput
            label="Base Background (Light)"
            value={config.radixBgParams.light}
            onChange={(val) =>
              updateConfig({
                radixBgParams: { ...config.radixBgParams, light: val },
              })
            }
            format="hex"
          />
          <ColorInput
            label="Base Background (Dark)"
            value={config.radixBgParams.dark}
            onChange={(val) =>
              updateConfig({
                radixBgParams: { ...config.radixBgParams, dark: val },
              })
            }
            format="hex"
          />
        </Stack>
      )}

      {config.backgroundMode === "Custom" && (
        <Stack gap="sm">
          <Title order={6} mt="xs">
            Primary Background
          </Title>
          <ColorInput
            label="Dark"
            value={config.backgroundPrimaryDark}
            onChange={(val) => updateConfig({ backgroundPrimaryDark: val })}
            format="hex"
          />
          <ColorInput
            label="Light"
            value={config.backgroundPrimaryLight}
            onChange={(val) => updateConfig({ backgroundPrimaryLight: val })}
            format="hex"
          />

          <Title order={6} mt="xs">
            Secondary Background
          </Title>
          <ColorInput
            label="Dark"
            value={config.backgroundSecondaryDark}
            onChange={(val) => updateConfig({ backgroundSecondaryDark: val })}
            format="hex"
          />
          <ColorInput
            label="Light"
            value={config.backgroundSecondaryLight}
            onChange={(val) => updateConfig({ backgroundSecondaryLight: val })}
            format="hex"
          />
        </Stack>
      )}

      <Divider />

      <Title order={5}>Neutral & Primary</Title>
      <Select
        data={colorModeOptions}
        value={config.colorMode}
        onChange={(val) => updateConfig({ colorMode: val as "Geist" | "Radix" })}
        allowDeselect={false}
        disabled={config.backgroundMode === "Radix"}
      />

      {config.colorMode === "Geist" && (
        <>
          <ConfiguratorColorControl
            prop="primary"
            value={config.primaryColor}
            onChange={(val) => updateConfig({ primaryColor: val })}
            withPicker={false}
          />
          <ConfiguratorColorControl
            prop="neutral"
            value={config.neutralColor}
            onChange={(val) => updateConfig({ neutralColor: val })}
            withPicker={false}
          />
        </>
      )}

      {config.colorMode === "Radix" && (
        <Stack gap="sm">
          <ColorInput
            label="Neutral Base"
            value={config.radixParams.gray}
            onChange={(val) =>
              updateConfig({
                radixParams: { ...config.radixParams, gray: val },
              })
            }
            format="hex"
          />
          <ColorInput
            label="Accent Base"
            value={config.radixParams.accent}
            onChange={(val) =>
              updateConfig({
                radixParams: { ...config.radixParams, accent: val },
              })
            }
            format="hex"
          />
        </Stack>
      )}
      <Divider />

      <CopyButton value={themeCode}>
        {({ copied, copy }) => (
          <Button color={copied ? "teal" : "blue"} onClick={copy}>
            {copied ? "Copied Theme!" : "Copy Theme Code"}
          </Button>
        )}
      </CopyButton>
      <Button color="red" variant="light" onClick={() => updateConfig(DEFAULT_COLOR_CONFIG)}>
        Reset
      </Button>
    </Stack>
  );
}
