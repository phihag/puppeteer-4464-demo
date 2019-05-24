#!/usr/bin/env node

(async () => {

const browser = await require('puppeteer').launch({args: ['--no-sandbox']});
const page = await browser.newPage();
await page.setContent('_\u2714_');
console.log(await page.content());
//require('assert')((await page.content()).includes('_\u2714_'));

})();