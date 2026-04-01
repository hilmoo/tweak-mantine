import { createTheme } from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";
import style from "./theme.module.css";

export const TWEAK_RICH_TEXT_EDITOR_THEME = createTheme({
  components: {
    RichTextEditor: RichTextEditor.extend({
      classNames: {
        root: style.root,
        content: style.content,
        control: style.control,
        linkEditorExternalControl: style.linkEditorExternalControl,
        toolbar: style.toolbar,
      },
    }),
  },
});
