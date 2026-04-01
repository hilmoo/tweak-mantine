import { createTheme } from "@mantine/core";
import { Spotlight } from "@mantine/spotlight";
import style from "./theme.module.css";

export const TWEAK_SPOTLIGHT_THEME = createTheme({
  components: {
    Spotlight: Spotlight.extend({
      classNames: {
        actionsList: style.actionsList,
        action: style.action,
        footer: style.footer,
      },
    }),
  },
});
