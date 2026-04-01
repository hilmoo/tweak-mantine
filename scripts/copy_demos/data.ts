import path from "node:path";
import fs from "node:fs";
import { MantineDemo } from "@mantinex/demo";
import { DEST_ROOT } from "./constant";

interface PageData {
  pageName: string;
  demo: DemoData[];
}

interface DemoData {
  demoName: string;
  demoComponent: MantineDemo;
}

export function generateDataFile(basePath: string, category: string): void {
  const categoryPath = path.join(basePath, category);
  if (!fs.existsSync(categoryPath)) {
    return;
  }

  const pages = fs
    .readdirSync(categoryPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const pageDataList: PageData[] = [];

  for (const pageName of pages) {
    const pagePath = path.join(categoryPath, pageName);
    const indexPath = path.join(pagePath, "index.ts");

    if (!fs.existsSync(indexPath)) {
      continue;
    }

    const indexContent = fs.readFileSync(indexPath, "utf-8");
    const exportRegex = /export\s*{\s*(\w+)\s*}\s*from\s*['"](.+?)['"]/g;
    const demos: DemoData[] = [];

    let match;
    while ((match = exportRegex.exec(indexContent)) !== null) {
      const [, exportName, fromPath] = match;
      const demoName = fromPath.replace("./", "").replace(/^\.\//, "");
      demos.push({
        demoName,
        demoComponent: exportName as any,
      });
    }

    if (demos.length > 0) {
      pageDataList.push({
        pageName,
        demo: demos,
      });
    }
  }

  if (pageDataList.length === 0) {
    return;
  }

  // Generate imports with aliases
  const imports: string[] = [];
  for (const page of pageDataList) {
    for (const demo of page.demo) {
      const importPath = `./${page.pageName}`;
      const alias = `${demo.demoComponent}${page.pageName}`;
      imports.push(`import { ${demo.demoComponent} as ${alias} } from '${importPath}';`);
      // Update the demoComponent to use the alias
      demo.demoComponent = alias as any;
    }
  }

  // Generate data structure
  const dataStructure = {
    category,
    pages: pageDataList,
  };

  // Create file content
  const fileContent = `import type { MantineDemo } from '@mantinex/demo';

${imports.join("\n")}

interface DataResult {
  category: string;
  pages: PageData[];
}

interface PageData {
  pageName: string;
  demo: DemoData[];
}

interface DemoData {
  demoName: string;
  demoComponent: MantineDemo;
}

export const data: DataResult = ${JSON.stringify(dataStructure, null, 2).replace(
    /"demoComponent":\s*"(\w+)"/g,
    '"demoComponent": $1',
  )};
`;

  const dataFilePath = path.join(categoryPath, "index.ts");
  fs.writeFileSync(dataFilePath, fileContent, "utf-8");
  console.log(`  ✓ Generated index.ts for ${category}`);
}

function generateCombinedDataForPath(
  basePath: string,
  pathName: string,
  exportVarName: string,
): void {
  if (!fs.existsSync(basePath)) {
    return;
  }

  const categories = fs
    .readdirSync(basePath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const imports = categories.map(
    (category) => `import { data as ${category.replace(/\s+/g, "")}Data } from './${category}';`,
  );

  const exports = categories.map((category) => `  ${category.replace(/\s+/g, "")}Data`);

  const content = `import type { DataResult } from '~/component/demo/type';

${imports.join("\n")}

export const ${exportVarName}: DataResult[] = [
${exports.join(",\n")}
];
`;

  const dataFilePath = path.join(basePath, "index.ts");
  fs.writeFileSync(dataFilePath, content, "utf-8");
  console.log(`  ✓ Generated ${pathName}/index.ts`);
}

export function generateAllDataFiles(): void {
  console.log("\n--- Generating data files ---");

  const coreBasePath = path.join(DEST_ROOT, "m-core");
  if (fs.existsSync(coreBasePath)) {
    const coreCategories = fs
      .readdirSync(coreBasePath, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    for (const category of coreCategories) {
      generateDataFile(coreBasePath, category);
    }
  }

  const extBasePath = path.join(DEST_ROOT, "m-ext");
  if (fs.existsSync(extBasePath)) {
    const extCategories = fs
      .readdirSync(extBasePath, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    for (const category of extCategories) {
      generateDataFile(extBasePath, category);
    }
  }
}

export function generateCombinedDataFile(): void {
  console.log("\n--- Generating combined data files ---");

  const coreBasePath = path.join(DEST_ROOT, "m-core");
  generateCombinedDataForPath(coreBasePath, "m-core", "coreData");

  const extBasePath = path.join(DEST_ROOT, "m-ext");
  generateCombinedDataForPath(extBasePath, "m-ext", "extData");
}
