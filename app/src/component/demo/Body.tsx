import { Stack, Title, Divider } from "@mantine/core";
import { useMemo, memo } from "react";
import { DataResult } from "./type";
import { Demo } from "@mantinex/demo";

interface BodyDemoProps {
  elementName: string;
  Data: DataResult[];
}

const DemoItem = memo(({ demo }: { demo: any }) => {
  return (
    <Stack gap="sm" mih={300}>
      <Divider size={"xl"} />
      <Title order={2}>{demo.demoName}</Title>
      <Demo data={demo.demoComponent} />
    </Stack>
  );
});

DemoItem.displayName = "DemoItem";

export const BodyDemo = memo(({ elementName, Data }: BodyDemoProps) => {
  const selectedPage = useMemo(
    () =>
      Data.flatMap((categoryData) => categoryData.pages).find(
        (page) => page.pageName === elementName,
      ),
    [elementName, Data],
  );

  if (!selectedPage) {
    return (
      <Title order={3} c="dimmed">
        Component not found
      </Title>
    );
  }

  return (
    <Stack gap="xl">
      <Title>{selectedPage.pageName}</Title>
      {selectedPage.demo.map((demo) => (
        <DemoItem key={demo.demoName} demo={demo} />
      ))}
    </Stack>
  );
});

BodyDemo.displayName = "BodyDemo";
