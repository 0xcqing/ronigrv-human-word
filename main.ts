/**
 * Writes a one-word entry, 'vibe-coding', to entry.txt for this make.fun bounty.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output'; mkdirSync(out, { recursive: true });
const msg = "vibe-coding"; // best one-word vibe
writeFileSync(join(out, 'entry.txt'), msg, 'utf-8');