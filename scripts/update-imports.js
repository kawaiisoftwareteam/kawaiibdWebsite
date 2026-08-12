#!/usr/bin/env node
/**
 * Update image import paths from .jpg/.jpeg/.png → .webp
 * Only replaces if the .webp sibling file actually exists.
 */

const fs = require("fs");
const path = require("path");

const SRC_DIR = path.resolve(__dirname, "../src");
let updatedFiles = 0;
let totalReplacements = 0;

// Recursively find all JS/JSX/TS/TSX files
function findJsFiles(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".next") {
      findJsFiles(fullPath, results);
    } else if (entry.isFile() && /\.(jsx?|tsx?)$/.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

// Match: import X from './path/to/image.jpg'
//    or: import X from "../path/to/image.png"
//    or: from '../../Assets/foo.jpeg'
const IMPORT_REGEX = /^(import\s+\S+\s+from\s+['"])([^'"]+\.(jpg|jpeg|png))(['"])/gm;

// Match: require('./path/to/image.jpg')
const REQUIRE_REGEX = /(require\s*\(\s*['"])([^'"]+\.(jpg|jpeg|png))(['"])/gm;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const fileDir = path.dirname(filePath);
  let replacements = 0;

  function replacer(match, prefix, imgPath, ext, suffix) {
    // Only handle relative paths
    if (!imgPath.startsWith(".")) return match;
    
    const absImg = path.resolve(fileDir, imgPath);
    const absWebp = absImg.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    if (fs.existsSync(absWebp)) {
      const newPath = imgPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
      replacements++;
      return `${prefix}${newPath}${suffix}`;
    }
    return match;
  }

  const newContent = content
    .replace(IMPORT_REGEX, replacer)
    .replace(REQUIRE_REGEX, replacer);

  if (replacements > 0) {
    fs.writeFileSync(filePath, newContent, "utf8");
    const rel = path.relative(process.cwd(), filePath);
    console.log(`  ✅ ${rel} (${replacements} replacement${replacements > 1 ? "s" : ""})`);
    updatedFiles++;
    totalReplacements += replacements;
  }
}

console.log("\n======================================================");
console.log("  Updating image import paths → .webp");
console.log("======================================================\n");

const files = findJsFiles(SRC_DIR);
for (const file of files) {
  processFile(file);
}

console.log(`\n======================================================`);
console.log(`  Updated : ${updatedFiles} files`);
console.log(`  Changed : ${totalReplacements} import paths`);
console.log(`======================================================\n`);
