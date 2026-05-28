/**
 * Patches react-aria to fix TypeError: Cannot read properties of null (reading 'HTMLElement')
 * This error occurs because react-aria's ScrollView and useResizeObserver access window globals
 * without null checks, which fails in Next.js App Router's SSR context.
 */
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'node_modules', 'react-aria', 'dist', 'private');

const patches = [
  {
    file: path.join(base, 'virtualizer', 'ScrollView.js'),
    from: "let isClientWidthMocked = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientWidth');",
    to: "let isClientWidthMocked = typeof window !== 'undefined' && window && window.HTMLElement ? Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientWidth') : false;",
    label: 'ScrollView.js isClientWidthMocked',
  },
  {
    file: path.join(base, 'virtualizer', 'ScrollView.js'),
    from: "let isClientHeightMocked = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientHeight');",
    to: "let isClientHeightMocked = typeof window !== 'undefined' && window && window.HTMLElement ? Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientHeight') : false;",
    label: 'ScrollView.js isClientHeightMocked',
  },
  {
    file: path.join(base, 'utils', 'useResizeObserver.js'),
    from: "return typeof window.ResizeObserver !== 'undefined';",
    to: "return typeof window !== 'undefined' && window != null && typeof window.ResizeObserver !== 'undefined';",
    label: 'useResizeObserver.js hasResizeObserver',
  },
];

let patchCount = 0;
let alreadyPatched = 0;

for (const patch of patches) {
  if (!fs.existsSync(patch.file)) {
    console.warn(`[patch-react-aria] File not found: ${patch.file}`);
    continue;
  }
  let content = fs.readFileSync(patch.file, 'utf8');
  if (content.includes(patch.from)) {
    content = content.replace(patch.from, patch.to);
    fs.writeFileSync(patch.file, content);
    console.log(`[patch-react-aria] Patched: ${patch.label}`);
    patchCount++;
  } else if (content.includes(patch.to)) {
    alreadyPatched++;
  } else {
    console.warn(`[patch-react-aria] Could not find patch target: ${patch.label}`);
  }
}

if (patchCount > 0) {
  console.log(`[patch-react-aria] Applied ${patchCount} patch(es) successfully.`);
} else if (alreadyPatched > 0) {
  console.log(`[patch-react-aria] All patches already applied (${alreadyPatched} total).`);
} else {
  console.warn('[patch-react-aria] No patches applied - react-aria version may have changed.');
}
