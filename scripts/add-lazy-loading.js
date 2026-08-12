#!/usr/bin/env node
/**
 * Add loading="lazy" decoding="async" to all <img> tags
 * that don't already have a loading attribute.
 *
 * Above-the-fold files get loading="eager" to avoid LCP penalty:
 *  - Hero.jsx (hero slider/bg images)
 *  - MainNav.jsx (logo always visible)
 *  - Button components (arrow icons)
 *  - EmblaCarouselArrow.jsx
 */

const fs = require("fs");
const path = require("path");

const EAGER_FILES = new Set([
  "Hero.jsx",
  "MainNav.jsx",
  "ButtonNormal.jsx",
  "ButtonKg.jsx",
  "ButtonTransparent.jsx",
  "EmblaCarouselArrow.jsx",
]);

const SRC_DIR = path.resolve(__dirname, "../src");
let filesUpdated = 0;
let tagsUpdated = 0;

function findJsFiles(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", ".next"].includes(entry.name)) {
      findJsFiles(full, results);
    } else if (entry.isFile() && /\.(jsx?|tsx?)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function processFile(filePath) {
  const fileName = path.basename(filePath);
  const isEager = EAGER_FILES.has(fileName);
  const loadingVal = isEager ? "eager" : "lazy";

  let content = fs.readFileSync(filePath, "utf8");
  let count = 0;

  // Match <img ...> or <img .../> that don't already have loading=
  const newContent = content.replace(
    /<img\b(?![^>]*\bloading=)([^>]*?)(\/?>)/g,
    (match, attrs, close) => {
      count++;
      return `<img loading="${loadingVal}" decoding="async"${attrs}${close}`;
    }
  );

  if (count > 0) {
    fs.writeFileSync(filePath, newContent, "utf8");
    const rel = path.relative(process.cwd(), filePath);
    const label = isEager ? "eager (above-fold)" : "lazy";
    console.log(`  ✅ ${rel}  — ${count} tag${count > 1 ? "s" : ""} [${label}]`);
    filesUpdated++;
    tagsUpdated += count;
  }
}

console.log("\n======================================================");
console.log("  Adding loading=lazy / decoding=async to <img> tags");
console.log("======================================================\n");

const files = findJsFiles(SRC_DIR);
for (const file of files) {
  processFile(file);
}

console.log(`\n======================================================`);
console.log(`  Done! ${tagsUpdated} <img> tags updated across ${filesUpdated} files`);
console.log(`======================================================\n`);
