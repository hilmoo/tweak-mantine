import { createTheme } from "@mantine/core";
import { ChartTooltip } from "@mantine/charts";
import style from "./theme.module.css";

export const TWEAK_CHARTS_THEME = createTheme({
  components: {
    ChartTooltip: ChartTooltip.extend({
      classNames: {
        tooltip: style.tooltip,
      },
    }),
  },
});
