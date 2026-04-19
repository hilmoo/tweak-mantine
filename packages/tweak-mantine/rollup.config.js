import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import esbuild from "rollup-plugin-esbuild";
import path from "node:path";
import { createGenerateScopedName } from "hash-css-selector";

const entries = {
  core: "src/index.ts",
  charts: "src/ext/charts/theme.ts",
  "code-highlight": "src/ext/code-highlight/theme.ts",
  dates: "src/ext/dates/theme.ts",
  dropzone: "src/ext/dropzone/theme.ts",
  spotlight: "src/ext/spotlight/theme.ts",
  tiptap: "src/ext/tiptap/theme.ts",
  schedule: "src/ext/schedule/theme.ts",
};

export default Object.entries(entries).map(([name, inputPath]) => ({
  input: inputPath,
  output: [
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "esm/[name].mjs",
      chunkFileNames: "esm/chunks/[name]-[hash].mjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: false,
    },
  ],
  external(id) {
    return !id.startsWith(".") && !path.isAbsolute(id);
  },
  onwarn(warning, warn) {
    if (warning.code === "MODULE_LEVEL_DIRECTIVE" && warning.message.includes('"use client"')) {
      return;
    }
    warn(warning);
  },
  plugins: [
    postcss({
      extract: path.resolve(`dist/styles/${name}.css`),
      modules: { generateScopedName: createGenerateScopedName("tm") },
      minimize: true,
    }),
    nodeResolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),
    esbuild({
      target: "esnext",
    }),
  ],
}));
