import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, "..", "src", "css");
const distDir = path.join(__dirname, "..", "dist", "styles");

function copyCssFiles() {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
    console.log(`Created directory: ${distDir}`);
  }

  try {
    const files = fs.readdirSync(srcDir);
    const cssFiles = files.filter((file) => path.extname(file).toLowerCase() === ".css");
    if (cssFiles.length === 0) {
      console.warn("No .css files found in source.");
      return;
    }

    cssFiles.forEach((file) => {
      const srcPath = path.join(srcDir, file);
      const distPath = path.join(distDir, file);
      fs.copyFileSync(srcPath, distPath);
    });
  } catch (error) {
    console.error("Error during copy process:", error);
  }
}

copyCssFiles();
