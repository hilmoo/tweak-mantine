import { createTheme } from "@mantine/core";
import { CodeHighlight, CodeHighlightTabs, InlineCodeHighlight } from "@mantine/code-highlight";
import { parseColor } from "../../color-function/parseHelper";
import style from "./theme.module.css";

export const TWEAK_CODE_HIGHLIGHT_THEME = createTheme({
  components: {
    CodeHighlight: CodeHighlight.extend({
      vars: (theme, props) => ({
        codeHighlight: {
          "--ch-background": parseColor({
            color: props.color,
            theme,
            shade: 0,
            fallback: "var(--mantine-color-body)",
          }),
        },
      }),
      classNames: {
        codeHighlight: style.border,
      },
    }),
    CodeHighlightTabs: CodeHighlightTabs.extend({
      vars: (theme, props) => ({
        codeHighlight: {
          "--ch-background": parseColor({
            color: props.color,
            theme,
            shade: 0,
            fallback: "var(--mantine-color-body)",
          }),
        },
      }),
      classNames: {
        codeHighlight: style.border,
        file: style.file,
      },
    }),
    InlineCodeHighlight: InlineCodeHighlight.extend({
      vars: (theme, props) => ({
        inlineCodeHighlight: {
          "--ch-background": parseColor({
            color: props.color,
            theme,
            shade: 0,
            fallback: "var(--mantine-color-body)",
          }),
        },
      }),
      classNames: {
        inlineCodeHighlight: style.border,
      },
    }),
  },
});
