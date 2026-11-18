// news-image-20261117 entry: write the day's world-news image to /output/entry.png.
// Node 22, standard library only. The image (entry.png, a JPEG at 1024x1024) is a
// six-panel summary of Tuesday 17 November 2026's world news, held in this repository.
// The grader runs this in a sandbox with no network and a writable /output.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const src = new URL('./entry.png', import.meta.url);
copyFileSync(src, join(outDir, 'entry.png'));
