import { useState } from "react";
import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Switch } from "@mantine/core";
import { MantineDemo } from "@mantinex/demo";

const code = `
import { useState } from 'react';
import { Switch } from '@mantine/core';
import { CheckIcon, XIcon } from '@phosphor-icons/react';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal-dev-dev"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <CheckIcon size={12} color="var(--mantine-color-teal-dev-dev-6)" />
        ) : (
          <XIcon size={12} color="var(--mantine-color-red-dev-dev-6)" />
        )
      }
    />
  );
}
`;

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal-dev-dev"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <CheckIcon size={12} color="var(--mantine-color-teal-dev-dev-6)" />
        ) : (
          <XIcon size={12} color="var(--mantine-color-red-dev-dev-6)" />
        )
      }
    />
  );
}

export const thumbIcon: MantineDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
