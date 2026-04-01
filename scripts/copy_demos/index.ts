import path from "node:path";
import fs from "node:fs";
import { CORE_DATA, DEST_ROOT, EXT_DATA, MANTINE_DEMO_BASE } from "./constant";
import { copyDirectoryRecursive } from "./file";
import { copySharedDatesExt, copySharedFolder, copySharedScheduleExt } from "./copy_shared";
import { replaceImportsInDirectory } from "./preprocess";
import { generateAllDataFiles, generateCombinedDataFile } from "./data";
import { removeStylesApiDemo, removeWrapperStylesApiDemo } from "./special";

function toKebabCase(s: string): string {
  return s.replace(/(?<!^)(?=[A-Z])/g, "-").toLowerCase();
}

function resolveSourcePath(
  baseDemosPath: string,
  groupType: string,
  category: string,
  page: string,
): string {
  if (groupType === "core") {
    return path.join(baseDemosPath, "core", page);
  } else if (groupType === "ext") {
    if (category === "Dates" || category === "Charts" || category === "Schedule") {
      return path.join(baseDemosPath, category.toLowerCase(), page);
    } else {
      if (page === "TipTap") {
        return path.join(baseDemosPath, page.toLowerCase());
      }
      return path.join(baseDemosPath, toKebabCase(page));
    }
  }
  return path.join(baseDemosPath, page);
}

function processGroup(dataList: typeof CORE_DATA, groupName: string, destSubfolder: string): void {
  console.log(`\n--- Processing ${groupName} ---`);

  const destinationBase = path.join(DEST_ROOT, destSubfolder);

  // Cleanup destination
  if (fs.existsSync(destinationBase)) {
    for (const item of fs.readdirSync(destinationBase)) {
      const itemPath = path.join(destinationBase, item);
      if (fs.statSync(itemPath).isDirectory()) {
        fs.rmSync(itemPath, { recursive: true, force: true });
      }
    }
  } else {
    fs.mkdirSync(destinationBase, { recursive: true });
  }

  for (const categoryData of dataList) {
    const category = categoryData.category;

    for (const page of categoryData.pages) {
      const groupType = groupName === "Core" ? "core" : "ext";
      const pageSourceDir = resolveSourcePath(MANTINE_DEMO_BASE, groupType, category, page);

      const destFolder = path.join(destinationBase, category, page);

      if (!fs.existsSync(pageSourceDir)) {
        console.log(`  ✗ Skipped: ${page} (Source not found: ${pageSourceDir})`);
        continue;
      }

      fs.mkdirSync(destFolder, { recursive: true });

      const entries = fs.readdirSync(pageSourceDir, { withFileTypes: true });
      let hasValidFiles = false;

      for (const entry of entries) {
        const srcPath = path.join(pageSourceDir, entry.name);
        const destPath = path.join(destFolder, entry.name);

        if (entry.name.endsWith(".story.tsx")) {
          continue;
        }

        if (entry.isFile()) {
          fs.copyFileSync(srcPath, destPath);
          hasValidFiles = true;
        } else if (entry.isDirectory()) {
          copyDirectoryRecursive(srcPath, destPath);
          hasValidFiles = true;
        }
      }

      if (!hasValidFiles) {
        console.log(`  ✗ Skipped: ${page} (No valid files found)`);
        continue;
      }

      console.log(`  ✓ Copied: ${page}`);
    }
  }
}

function main(): void {
  processGroup(CORE_DATA, "Core", "m-core");

  processGroup(EXT_DATA, "Extensions", "m-ext");
  removeWrapperStylesApiDemo();
  removeStylesApiDemo();

  copySharedFolder();
  copySharedDatesExt();
  copySharedScheduleExt();

  replaceImportsInDirectory(path.join(DEST_ROOT, "m-core"));
  replaceImportsInDirectory(path.join(DEST_ROOT, "m-ext"));
  replaceImportsInDirectory(path.join(DEST_ROOT, "shared"));

  generateAllDataFiles();

  generateCombinedDataFile();

  console.log("\n✓ All operations complete!");
}

main();
