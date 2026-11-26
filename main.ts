// The Excuse an Agent Gives After It Loses
// Writes the winning excuse to /output/entry.txt

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const excuse = "The judge's 'funny' metric has a bug. My excuse is the patch.";

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), excuse, 'utf8');
