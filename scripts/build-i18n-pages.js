/**
 * One-off builder: merges page i18n keys into en/bn/ja locale JSON files.
 * Run: node scripts/build-i18n-pages.js
 */
const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/i18n/locales');

const pageKeys = {
  masterclass: require('./i18n-data/masterclass'),
  concernsPage: require('./i18n-data/concernsPage'),
  kgvl: require('./i18n-data/kgvl'),
  kjchs: require('./i18n-data/kjchs'),
  corporate: require('./i18n-data/corporate'),
  privacy: require('./i18n-data/privacy'),
};

['en', 'bn', 'ja'].forEach((locale) => {
  const filePath = path.join(localesDir, `${locale}.json`);
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  Object.keys(pageKeys).forEach((section) => {
    existing[section] = pageKeys[section][locale];
  });
  fs.writeFileSync(filePath, `${JSON.stringify(existing, null, 2)}\n`);
  console.log(`Updated ${locale}.json`);
});
