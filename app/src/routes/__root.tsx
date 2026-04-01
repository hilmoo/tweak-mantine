import "~/mantine/tweak-mantine/css/index.css";
import "@mantinex/demo/styles.css";
import "./extension.css";

import { createRootRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { CodeHighlightAdapterProvider, createShikiAdapter } from "@mantine/code-highlight";
import { AppShell, Group, Title, Burger, Button, Stack } from "@mantine/core";
import { ToggleColor } from "../component/color";
import { useDisclosure } from "@mantine/hooks";
import { DemoNavbar } from "~/component/demo/Navbar";
import { coreData } from "~/component/m-core";
import { extData } from "~/component/m-ext";
import { ModalsProviderDemo } from "~/component/demo/ModalsProvider";
import { Notifications } from "@mantine/notifications";
import { ColorConfigurator } from "~/component/color/generator";

import { ThemeConfigProvider } from "~/mantine/ThemeConfigContext";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => <div>Not found</div>,
});

async function loadShiki() {
  const { createHighlighter } = await import("shiki");
  const shiki = await createHighlighter({
    langs: ["tsx", "scss", "html", "bash", "json"],
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

function RootLayout() {
  const { pathname } = useLocation();
  const [opened, { toggle, close: closeNavbar }] = useDisclosure();
  const [asideOpened, { toggle: toggleAside, close: closeAside }] = useDisclosure();

  function navbar() {
    if (pathname.startsWith("/core")) {
      return <DemoNavbar Data={coreData} />;
    }
    if (pathname.startsWith("/ext")) {
      return <DemoNavbar Data={extData} />;
    }
    return null;
  }

  const hasSubNav = !!navbar();

  return (
    <>
      <ThemeConfigProvider>
        <CodeHighlightAdapterProvider adapter={shikiAdapter}>
          <ModalsProviderDemo>
            <Notifications />
            <AppShell
              withBorder
              header={{ height: 60 }}
              navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: {
                  mobile: !opened,
                  desktop: !hasSubNav,
                },
              }}
              aside={{
                width: 300,
                breakpoint: "md",
                collapsed: {
                  desktop: false,
                  mobile: !asideOpened,
                },
              }}
              padding="md"
            >
              <AppShell.Header>
                <Group h="100%" px="md" justify="space-between" wrap="nowrap">
                  <Group wrap="nowrap">
                    <Burger
                      opened={opened}
                      onClick={() => {
                        toggle();
                        closeAside();
                      }}
                      hiddenFrom="sm"
                      size="sm"
                      aria-label="Toggle navigation"
                    />

                    <Title order={3}>Tweak Mantine</Title>

                    <Group gap={"xs"} visibleFrom="sm">
                      <Button component={Link} to={"/"} variant="default">
                        Docs
                      </Button>
                      <Button component={Link} to="/core" variant="default">
                        Core
                      </Button>
                      <Button component={Link} to="/ext" variant="default">
                        Extension
                      </Button>
                    </Group>
                  </Group>
                  <Group wrap="nowrap">
                    <ToggleColor />
                    <Burger
                      opened={asideOpened}
                      onClick={() => {
                        toggleAside();
                        closeNavbar();
                      }}
                      hiddenFrom="md"
                      size="sm"
                      aria-label="Toggle configurator"
                    />
                  </Group>
                </Group>
              </AppShell.Header>

              <AppShell.Navbar p="md">
                <Stack hiddenFrom="sm" mb={hasSubNav ? "md" : 0} gap="sm">
                  <Button
                    component={Link}
                    to="/"
                    variant="default"
                    justify="flex-start"
                    onClick={toggle}
                  >
                    Docs
                  </Button>
                  <Button
                    component={Link}
                    to="/core"
                    variant="default"
                    justify="flex-start"
                    onClick={toggle}
                  >
                    Core
                  </Button>
                  <Button
                    component={Link}
                    to="/ext"
                    variant="default"
                    justify="flex-start"
                    onClick={toggle}
                  >
                    Extension
                  </Button>
                </Stack>

                {navbar()}
              </AppShell.Navbar>

              <AppShell.Main>
                <Outlet />
              </AppShell.Main>
              <AppShell.Aside>
                <ColorConfigurator />
              </AppShell.Aside>
            </AppShell>
          </ModalsProviderDemo>
        </CodeHighlightAdapterProvider>
      </ThemeConfigProvider>
      <TanStackRouterDevtools />
    </>
  );
}
