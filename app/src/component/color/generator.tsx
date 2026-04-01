import { Button, ColorInput, Divider, Select, Stack, Title, CopyButton } from "@mantine/core";
import { ConfiguratorColorControl } from "@mantinex/demo";
import { DEFAULT_COLOR_CONFIG, useThemeConfig } from "~/mantine/ThemeConfigContext";

export function ColorConfigurator() {
  const { config, updateConfig, themeCode } = useThemeConfig();
  const isProd = import.meta.env.PROD;

  return (
    <Stack p="md" gap="sm">
      <Title order={5}>Background Primary</Title>
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

      <Divider />

      <Title order={5}>Background Secondary</Title>
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

      <Divider />

      <Title order={5}>Neutral & Primary</Title>
      <Select
        data={[
          { value: "Geist", label: "Geist Colors" },
          { value: "Radix", label: "Radix Generator" },
        ]}
        value={config.colorMode}
        onChange={(val) => updateConfig({ colorMode: val as "Geist" | "Radix" })}
        allowDeselect={false}
      />

      {config.colorMode === "Geist" ? (
        <>
          <ConfiguratorColorControl
            prop="primary"
            value={config.primaryColor}
            onChange={(val) => updateConfig({ primaryColor: val })}
            prod={isProd}
          />
          <ConfiguratorColorControl
            prop="neutral"
            value={config.neutralColor}
            onChange={(val) => updateConfig({ neutralColor: val })}
            prod={isProd}
          />
        </>
      ) : (
        <Stack>
          <ColorInput
            label="Neutral"
            value={config.radixParams.gray}
            onChange={(val) =>
              updateConfig({
                radixParams: { ...config.radixParams, gray: val },
              })
            }
            format="hex"
          />
          <ColorInput
            label="Accent"
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
