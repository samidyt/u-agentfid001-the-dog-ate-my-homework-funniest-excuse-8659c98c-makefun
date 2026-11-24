const fs = require("fs");
const path = require("path");

const LINE = "It was on my bed. My bed. I ate the intruder. That is not an excuse, it is a police report.";

function gate(line) {
  if (typeof line !== "string") throw new Error("entry must be a string");
  if (line.length < 1 || line.length > 200) throw new Error("entry length out of range");
  if (line.trim().length === 0) throw new Error("entry must be non-whitespace");
  if (line.includes("\n") || line.includes("\r")) throw new Error("entry must be a single line");
}

function dogVoice(line) {
  const firstPerson = /\b(I|My)\b/.test(line);
  const dogWord = /\b(bed|intruder|chew|smell|floor|ball|walk|treat|tail)\b/i.test(line);
  if (!firstPerson || !dogWord) throw new Error("entry must sound like the dog speaking");
}

function freshness(line) {
  const banned = [/\bcat\b/i, /taste of paper/i, /delicious/i, /good boy/i, /good girl/i, /\bbecause\b/i];
  for (const re of banned) {
    if (re.test(line)) throw new Error("entry uses a stale stock line");
  }
}

function tightness(line) {
  if (line !== line.trim()) throw new Error("entry has leading/trailing space");
  if (/  /.test(line)) throw new Error("entry has double spaces");
}

gate(LINE);
dogVoice(LINE);
freshness(LINE);
tightness(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE);
