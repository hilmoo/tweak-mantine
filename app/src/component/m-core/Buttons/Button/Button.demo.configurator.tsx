import { Button } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";
import { interactiveVariantsControl } from "../../../shared";

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`;

function Wrapper(props: any) {
  return <Button {...props}>Button</Button>;
}

export const configurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    interactiveVariantsControl,
    { type: "color", prop: "color", initialValue: "blue-dev-dev", libraryValue: "blue-dev-dev" },
    { type: "size", prop: "size", initialValue: "sm", libraryValue: "sm" },
    { type: "size", prop: "radius", initialValue: "md", libraryValue: "md" },
  ],
};
