import { DEST_ROOT, MANTINE_DEMO_BASE, MANTINE_ROOT } from "./constant";
import path from "node:path";
import fs from "node:fs";
import { copyDirectoryRecursive } from "./file";

export function copySharedFolder(): void {
  const sourceSharedPath = path.join(MANTINE_ROOT, "shared");
  const destSharedPath = path.join(DEST_ROOT, "shared");

  if (fs.existsSync(sourceSharedPath)) {
    if (fs.existsSync(destSharedPath)) {
      fs.rmSync(destSharedPath, { recursive: true, force: true });
    }
    copyDirectoryRecursive(sourceSharedPath, destSharedPath);
    console.log(`\n✓ Shared folder copied to ${destSharedPath}`);
  } else {
    console.log(`\n✗ Shared folder not found at ${sourceSharedPath}`);
  }
}

export function copySharedDatesExt(): void {
  const sourceSharedDatesPath = path.join(MANTINE_DEMO_BASE, "dates", "_shared");
  const destSharedDatesPath = path.join(DEST_ROOT, "m-ext", "Dates", "_shared");
  if (fs.existsSync(destSharedDatesPath)) {
    fs.rmSync(destSharedDatesPath, { recursive: true, force: true });
  }
  if (fs.existsSync(sourceSharedDatesPath)) {
    copyDirectoryRecursive(sourceSharedDatesPath, destSharedDatesPath);
    console.log(`\n✓ Shared Dates folder copied to ${destSharedDatesPath}`);
  } else {
    console.log(`\n✗ Shared Dates folder not found at ${sourceSharedDatesPath}`);
  }
}

export function copySharedScheduleExt(): void {
  const sourceSharedSchedulePath = path.join(MANTINE_DEMO_BASE, "schedule");
  const destSchedulePath = path.join(DEST_ROOT, "m-ext", "Schedule");

  if (fs.existsSync(destSchedulePath)) {
    const existingFiles = fs.readdirSync(destSchedulePath);

    existingFiles.forEach((file) => {
      const fullPath = path.join(destSchedulePath, file);

      if (fs.statSync(fullPath).isFile()) {
        fs.unlinkSync(fullPath);
      }
    });
  }

  if (fs.existsSync(sourceSharedSchedulePath)) {
    fs.mkdirSync(destSchedulePath, { recursive: true });

    const files = fs.readdirSync(sourceSharedSchedulePath);

    files.forEach((file) => {
      const fullSourcePath = path.join(sourceSharedSchedulePath, file);
      const fullDestPath = path.join(destSchedulePath, file);

      if (fs.statSync(fullSourcePath).isFile() && file.endsWith(".tsx")) {
        fs.copyFileSync(fullSourcePath, fullDestPath);
      }
    });

    console.log(`\n✓ .tsx files copied to ${destSchedulePath}`);
  } else {
    console.log(`\n✗ Shared Schedule folder not found at ${sourceSharedSchedulePath}`);
  }
}
