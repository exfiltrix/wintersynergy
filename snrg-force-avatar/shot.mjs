import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1400, height: 900 } });
await p.goto('file://' + process.cwd() + '/preview.html');
await p.screenshot({ path: process.argv[2], fullPage: true });
await b.close();
