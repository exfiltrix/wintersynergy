// close-up of 80/40 px renders at device scale 3 to judge small-size legibility
import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 420, height: 300 }, deviceScaleFactor: 3 });
const fs = await import("node:fs"); const f = "/tmp/claude-0/-home-user-wintersynergy/be7405cb-91db-5703-85d7-34fa7f955a3b/scratchpad/zoom.html"; fs.writeFileSync(f, `<body style="margin:0;display:grid;grid-template-columns:1fr 1fr;font:0">${['#fff','#17212b'].map(bg=>`<div style="background:${bg};padding:10px">${['a','b','c'].map(c=>`<div style="display:flex;gap:10px;align-items:center;margin:6px"><img src="file://${process.cwd()}/concept-${c}.svg" style="width:80px;border-radius:50%"><img src="file://${process.cwd()}/concept-${c}.svg" style="width:40px;border-radius:50%"></div>`).join('')}</div>`).join('')}</body>`); await p.goto("file://" + f);
await p.waitForTimeout(300);
await p.screenshot({ path: process.argv[2] });
await b.close();
