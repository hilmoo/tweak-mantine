import { createTheme } from "@mantine/core";
import { parseColor } from "../../color-function/parseHelper";
import { Dropzone } from "@mantine/dropzone";
import style from "./theme.module.css";

export const TWEAK_DROPZONE_THEME = createTheme({
  components: {
    Dropzone: Dropzone.extend({
      vars: (theme, props) => ({
        root: {
          "--dropzone-accept-bg": parseColor({
            color: props.color,
            theme,
            shade: 0,
            fallback: "var(--mantine-color-body-secondary)",
          }),
          "--dropzone-reject-bg": parseColor({
            color: props.color,
            theme,
            shade: 0,
            fallback: "var(--mantine-color-red-0)",
          }),
          "--dropzone-accept-color": parseColor({
            color: props.color,
            theme,
            shade: 8,
            fallback: "var(--mantine-color-primary-color-8)",
          }),
          "--dropzone-reject-color": parseColor({
            color: props.color,
            theme,
            shade: 8,
            fallback: "var(--mantine-color-red-8)",
          }),
        },
      }),
      classNames: {
        root: style.root,
      },
    }),
  },
});
