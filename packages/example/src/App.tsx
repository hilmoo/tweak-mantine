import {
  MantineProvider,
  Container,
  Title,
  Button,
  Group,
  Stack,
  TextInput,
  Checkbox,
  Radio,
  Switch,
  Paper,
  Badge,
  Alert,
  SimpleGrid,
  Slider,
  useMantineColorScheme,
  ActionIcon,
  Textarea,
} from "@mantine/core";
import { Theme } from "./theme";
import { cssVariablesResolver } from "@hilmo/tweak-mantine";

function ThemeShowcase() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <header>
          <Group justify="space-between" align="flex-start">
            <div style={{ flex: 1 }}>
              <Title order={1}>Tweak Mantine Example</Title>
            </div>

            <ActionIcon
              onClick={() => toggleColorScheme()}
              variant="default"
              size="xl"
              aria-label="Toggle color scheme"
            >
              {colorScheme === "dark" ? "🌞" : "🌜"}
            </ActionIcon>
          </Group>
        </header>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Paper withBorder p="md" radius="md" shadow="sm">
            <Title order={3} mb="md">
              Buttons
            </Title>
            <Group>
              <Button variant="filled">Filled</Button>
              <Button variant="light">Light</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="subtle">Subtle</Button>
              <Button variant="default">Default</Button>
            </Group>
            <Group mt="md">
              <Button color="red">Danger</Button>
              <Button color="teal">Success</Button>
              <Button radius="xl">Pill Radius</Button>
            </Group>
          </Paper>

          <Paper withBorder p="md" radius="md" shadow="sm">
            <Title order={3} mb="md">
              Inputs & Controls
            </Title>
            <Stack gap="md">
              <TextInput label="Standard Input" placeholder="Focus me to see the ring color" />
              <Textarea label="Textarea" placeholder="Focus me to see the ring color" />
              <Group>
                <Checkbox label="Checkbox" defaultChecked />
                <Radio label="Radio" defaultChecked />
                <Switch label="Switch" defaultChecked />
              </Group>
              <Slider
                defaultValue={40}
                marks={[
                  { value: 20, label: "20%" },
                  { value: 80, label: "80%" },
                ]}
              />
            </Stack>
          </Paper>

          <Paper withBorder p="md" radius="md" shadow="sm">
            <Title order={3} mb="md">
              Badges & Alerts
            </Title>
            <Group mb="md">
              <Badge color="blue">Primary</Badge>
              <Badge color="teal" variant="light">
                Success
              </Badge>
              <Badge color="red" variant="outline">
                Error
              </Badge>
              <Badge color="yellow" variant="dot">
                Warning
              </Badge>
            </Group>
            <Alert title="Informational Alert" color="blue" variant="light">
              This alert box is great for checking how your theme handles subtle background
              opacities and text contrast.
            </Alert>
          </Paper>

          <Paper withBorder p="md" radius="md" shadow="sm">
            <Title order={3} mb="md">
              Surfaces & Shadows
            </Title>
            <Group align="flex-start">
              <Paper shadow="xs" p="md" withBorder>
                Shadow XS
              </Paper>
              <Paper shadow="sm" p="md" withBorder>
                Shadow SM
              </Paper>
              <Paper shadow="md" p="md" withBorder>
                Shadow MD
              </Paper>
            </Group>
          </Paper>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

export function App() {
  return (
    <MantineProvider
      theme={Theme}
      cssVariablesResolver={cssVariablesResolver}
      defaultColorScheme="auto"
    >
      <ThemeShowcase />
    </MantineProvider>
  );
}
