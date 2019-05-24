#!/usr/bin/env node

(async () => {
try {

const browser = await require('puppeteer').launch({args: ['--no-sandbox']});
const page = await browser.newPage();
await page.setContent('_\u2714_');
console.log(await page.content());
require('assert')((await page.content()).includes('_\u2714_'));

await browser.close();
} catch(e) {
console.error(e.stack);
process.exit(2);
}
})();