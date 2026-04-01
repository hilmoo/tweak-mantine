import path from "node:path";
import fs from "node:fs";

const COLOR_ALIASES: Record<string, string> = {
  dark: "gray-dev-dev",
  gray: "gray-dev-dev",

  red: "red-dev-dev",
  pink: "pink-dev-dev",

  grape: "green-dev-dev",

  violet: "purple-dev-dev",
  indigo: "purple-dev-dev",

  blue: "blue-dev-dev",
  cyan: "blue-dev-dev",

  teal: "teal-dev-dev",

  green: "green-dev-dev",
  lime: "green-dev-dev",

  yellow: "amber-dev-dev",
  orange: "amber-dev-dev",

  "primary-color-filled": "pink-dev-dev",
};

function generateReplacementMap(aliases: Record<string, string>): Record<string, string> {
  const map: Record<string, string> = {
    "primary-color-filled": "color-pink-dev-dev-8",
    "theme.primaryColor": "theme.colors.pink",
  };

  for (const [source, target] of Object.entries(aliases)) {
    map[`initialValue: '${source}'`] = `initialValue: '${target}'`;
    map[`color: '${source}`] = `color: '${target}`;
    map[`--mantine-color-${source}`] = `--mantine-color-${target}`;
    map[`color="${source}`] = `color="${target}`;
    map[`'${source}'`] = `'${target}'`;
    map[`'${source}.`] = `'${target}.`;
  }

  return map;
}

const REPLACEMENT_REGEX = new RegExp(
  Object.keys(generateReplacementMap(COLOR_ALIASES))
    .map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|"),
  "g",
);

export function replaceImportsInFile(filePath: string): void {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, "utf-8");

  const newContent = content.replace(REPLACEMENT_REGEX, (match) => {
    return generateReplacementMap(COLOR_ALIASES)[match];
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, "utf-8");
  }
}

export function replaceImportsInDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      replaceImportsInDirectory(fullPath);
    } else if (entry.isFile()) {
      replaceImportsInFile(fullPath);
    }
  }
}
