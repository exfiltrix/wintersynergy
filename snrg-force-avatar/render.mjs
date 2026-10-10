// Renders concept-*.svg to PNG 1024 and 512 with resvg
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
for (const c of ['a', 'b', 'c']) {
  const svg = readFileSync(`concept-${c}.svg`, 'utf8');
  for (const size of [1024, 512]) {
    const png = new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
    writeFileSync(`concept-${c}${size === 512 ? '-512' : ''}.png`, png);
  }
}
console.log('done');
