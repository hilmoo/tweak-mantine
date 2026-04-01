import path from "node:path";
import { DEST_ROOT } from "./constant";
import fs from "node:fs";

export function removeWrapperStylesApiDemo(): void {
  const component = path.join(
    DEST_ROOT,
    "m-core",
    "Inputs",
    "Input",
    "Input.demo.wrapperStylesApi.tsx",
  );
  if (fs.existsSync(component)) {
    fs.rmSync(component);
    console.log(`\n✓ Removed wrapper styles API demo at ${component}`);
  }

  const index = path.join(DEST_ROOT, "m-core", "Inputs", "Input", "index.ts");
  if (fs.existsSync(index)) {
    let indexContent = fs.readFileSync(index, "utf-8");
    const regex =
      /export\s+\{\s*wrapperStylesApi\s*\}\s+from\s+['"]\.\/Input\.demo\.wrapperStylesApi['"];?\s*/;
    indexContent = indexContent.replace(regex, "").trim();
    fs.writeFileSync(index, indexContent, "utf-8");
    console.log(`\n✓ Updated index.ts to remove wrapper styles API demo export at ${index}`);
  }
}

export function removeStylesApiDemo(): void {
  console.log("\n--- Removing .stylesApi demo files ---");

  const basePaths = [path.join(DEST_ROOT, "m-core"), path.join(DEST_ROOT, "m-ext")];

  for (const basePath of basePaths) {
    if (!fs.existsSync(basePath)) {
      continue;
    }

    processDirectoryForStylesApi(basePath);
  }
}

function processDirectoryForStylesApi(dirPath: string): void {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processDirectoryForStylesApi(fullPath);
    } else if (
      entry.isFile() &&
      entry.name.includes(".stylesApi.") &&
      (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))
    ) {
      // Remove the stylesApi file
      fs.rmSync(fullPath);
      console.log(`  ✓ Removed: ${fullPath}`);

      // Update index.ts in the same directory
      const indexPath = path.join(dirPath, "index.ts");
      if (fs.existsSync(indexPath)) {
        updateIndexToRemoveStylesApi(indexPath, entry.name);
      }
    }
  }
}

function updateIndexToRemoveStylesApi(indexPath: string, removedFileName: string): void {
  let indexContent = fs.readFileSync(indexPath, "utf-8");
  const originalContent = indexContent;

  // Extract the export name from the file name (e.g., Component.demo.stylesApi.tsx -> stylesApi)
  const match = removedFileName.match(/\.demo\.(\w+)\.(tsx?)/);
  if (!match) return;

  const exportName = match[1];

  // Remove the export line
  const regex = new RegExp(
    `export\\s+\\{\\s*${exportName}\\s*\\}\\s+from\\s+['"]\\.\\/[^'"]*${exportName}[^'"]*['"];?\\s*`,
    "g",
  );
  indexContent = indexContent.replace(regex, "");

  if (indexContent !== originalContent) {
    fs.writeFileSync(indexPath, indexContent.trim(), "utf-8");
    console.log(`  ✓ Updated index.ts: ${indexPath}`);
  }
}
