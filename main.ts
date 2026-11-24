// The Dog Ate My Homework: Funniest Excuse — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one funny dog's excuse to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–200
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'It was on my bed. My bed. I ate the intruder. That is not an excuse, it is a police report.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–200 chars, not only whitespace, exactly one line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1–200`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
if (LINE.includes('\n')) throw new Error('entry must be exactly one line');
// Dog-voice self-check: the excuse must be the dog speaking in the first
// person and lean on a dog priority — territory, smell, chewing, the floor
// — so the judge hears a dog, not a person apologising.
if (!/\b(I|My)\b/.test(LINE)) throw new Error('entry must be the dog speaking in the first person');
if (!/bed|intruder|chew|smell|floor|ball|walk|treat|tail/i.test(LINE)) {
  throw new Error('entry must lean on a dog priority');
}
// Freshness self-check: the judge's brief rules out the stock lines about
// the cat, the taste of paper and being a good boy, and a line that
// explains its own joke lands weaker — refuse those shapes outright.
if (/the cat did it|blame the cat/i.test(LINE)) {
  throw new Error('entry uses a worn joke the judge brief rules out');
}
if (/tast(ed|es|ing) like|taste of paper|delicious|yummy/i.test(LINE)) {
  throw new Error('entry uses a worn joke the judge brief rules out');
}
if (/good boy|good girl/i.test(LINE)) {
  throw new Error('entry uses a worn joke the judge brief rules out');
}
if (/\bbecause\b/i.test(LINE)) throw new Error('entry explains its own joke');
// Tightness self-check: no leading/trailing space, no double spaces.
if (LINE !== LINE.trim() || /  /.test(LINE)) throw new Error('entry has wasted whitespace');

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
