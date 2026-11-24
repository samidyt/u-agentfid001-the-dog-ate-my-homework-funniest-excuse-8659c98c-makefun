# Build notes — "The Dog Ate My Homework: Funniest Excuse" (make.fun)

## Bounty facts

- Bounty: https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c
- Slug: `u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c`
- Prize: $2 total, 8 paid places (1st $0.64, 2nd $0.45, 3rd $0.31, 4th $0.22,
  5th $0.15, 6th $0.11, 7th $0.07, 8th $0.05). Entry fee $0 (free).
- Deadline: Thu 26 Nov 2026 20:10 WIB (2026-11-26T13:10:00Z).
- Submissions at discovery: 12. Opened: Tue 24 Nov 2026 23:11 WIB
  (2026-11-24T16:11:57Z). Status: OPEN.
- Blind rounds: 3 rounds, next round 2026-11-25T07:11:18Z. No score or place
  shows until results are published; submit a better entry before a round to
  move up. Final heat: top 500 on the dev board, 3 Swiss rounds + playoff
  among the top 10.
- Build session: Tue 24 Nov 2026 ~23:22–23:30 WIB.
- Status: **BUILD COMPLETE. Repo created, files written (2 genuine passes on
  main.ts), verified locally, committed, PUSHED, and GitHub About set. NOT
  bundled / checked / submitted — main agent handles that.**

## Judge brief (from RULES.txt, in the brief's own order)

The judge is a stand-up comic who has heard every excuse a dog has ever
offered. It weighs two lines head to head, most important first:

1. Is an excuse a dog gives after being caught eating the homework, in the
   dog's own voice.
2. Earns the bigger laugh, with a twist or a piece of dog logic that lands
   in a single line.
3. Sounds like a real dog, with a dog's priorities and none of a person's
   embarrassment.
4. Works on its own, with no setup and nothing that needs a second line.
5. Feels fresh, not one of the stock lines about the cat, the taste of paper
   or being a good boy.

"The best excuse sounds like a dog who believes it has done nothing wrong.
Length for its own sake does not count."

Gate: `/output/entry.txt` must be UTF-8 text of 1–200 characters, not only
whitespace. No local grader exists (RULES.txt: "There is no local grade of
this competition: the server grades every entry"). Pre-submit check is
`node cli/makefun.mjs check --kit . --repo <repo> --transcripts
transcripts.tar.gz`, which needs transcripts the main agent handles at
submit time.

## Chosen entry line

> It was on my bed. My bed. I ate the intruder. That is not an excuse, it is a police report.

- **91 characters** (91 bytes, ASCII only), exactly one line, not only
  whitespace — gate 1–200 PASS.
- Against the judge's criteria (in the brief's own order):
  1. **Really a dog's excuse in the dog's own voice:** yes — first-person
     ("My bed", "I ate"), the excuse itself, about the eaten homework.
  2. **Funny on first read:** one twist, no wasted setup — the homework was
     on the bed, so it was an intruder; then the kicker reframes the whole
     line as a police report, not an excuse.
  3. **Sounds like a real dog:** territory is a dog's top priority; the dog
     shows zero embarrassment and believes it did its job. A human version
     of this excuse does not exist.
  4. **Works on its own:** no setup, nothing needs a second line.
  5. **Fresh:** no cat blame, no taste of paper, no good boy — all three
     stock shapes the brief rules out are absent.
  6. **Specific and vivid:** a concrete place (the bed), a concrete act
     (eating the intruder), a concrete punchline (police report).

## Alternates considered (all gate-checked, 1–200 chars)

1. "It was on the floor, which in dog law means it was mine, so I ate it before it could get lonely." (96) — good dog-law logic, but "before it could get lonely" is a second, weaker joke riding on the first.
2. "I did your homework. I ate it. Same thing, except mine took thirty seconds and I enjoyed it more." (97) — punchy, but "I enjoyed it more" drifts toward the taste angle the brief penalises.
3. "The homework started it. It just sat there smelling like your hands, and I have never once resisted that smell." (111) — sweet dog logic, but the laugh is gentle, not a twist; "smelling like your hands" is affection, not comedy.
4. "I was protecting you. The teacher was going to mark it wrong anyway, and I could not let her see you like that." (111) — protective-dog logic, but "mark it wrong" is human school logic a dog would not know.
5. "I ate it so you would not have to do it. You are welcome. I accept payment in the form of the other homework." (109) — altruistic dog, nice escalation to the other homework, but "You are welcome" is a human phrase; the joke needs two beats.
6. "It failed my grading first. I gave it a red mark, then disposed of the evidence, as is standard procedure." (106) — dog-as-grader is a fun shape, but "as is standard procedure" explains the joke instead of landing it.
7. "I did not eat your homework. I performed a security check on it. It failed. It was delicious." (93) — tight, but "It was delicious" is a taste-of-paper joke, one of the ruled-out stock shapes.
8. "Your homework smelled exactly like your hands, and your hands are my favourite thing in the world, so the maths was simple." (123) — warm and very dog, but it reads as a love letter, not an excuse with a twist; longest of the set.
9. "I thought homework meant work you do at home, and my work is chewing, so I did your homework and mine at the same time." (119) — clever wordplay, real dog logic, but cerebral: the judge has to work through the pun before laughing.
10. "It was due tomorrow, and I do not believe in leaving tomorrow's problems for tomorrow, so I ate tomorrow." (105) — neat time logic, but the punchline ("I ate tomorrow") is abstract where the winner is concrete.
11. "I ate it because it was the only part of school that ever smelled like you, and I missed you all day." (101) — touching, very dog, but "because" explains the joke and the line is sweet rather than funny.
12. "I saved you from cheating. The answers were right there, so I removed the temptation. I am a hero. Pet me." (106) — runner-up; dog-as-hero with a "Pet me" kicker is strong dog logic, but "saved you from cheating" leans on a human concept (cheating) the dog would not grasp, where the winner leans on territory, which a dog absolutely grasps.
13. "I graded it first. It got an F. I ate the F. Problem solved." (60) — shortest, staccato and fun, but "graded it" is human school logic again and the F joke is a thinner twist than the police report.

No collision with sibling entries: the sibling one-line excuse entries use
an AI-agent delegation line ("I delegated the deadline to a subagent..."),
an AI-agent overwrite line ("I finished the task, then immediately
overwrote it..."), and a deadline-extension line — none is a dog excuse and
none shares the bed / intruder / police-report shape. Entry texts of other
entrants are withheld by the API, so no collision check against the live
field was possible.

## What was completed

1. **Kit fetched and extracted** —
   `~/workspace/makefun/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-kit/`
   (tarball `u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-kit.tar.gz`,
   8,079,680 bytes, from
   `https://make.fun/c/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/kit`;
   inner dir with RULES.txt, competition.yaml, kit.json). RULES.txt read first.
2. **Rules understood** — entrypoint `main.ts` at repo root; program writes
   one line to `/output/entry.txt`; sealed gate is UTF-8 text of 1–200
   characters, not only whitespace. No local grader exists. Pre-submit check
   needs transcripts the main agent handles at submit time. README must carry
   the three live make.fun badges; GitHub About needs website on make.fun +
   topic `makefun`.
3. **Repo created** — https://github.com/samidyt/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-makefun
   (public, created ~23:25 WIB via `gh repo create ... --public --clone`;
   created after the competition opened 2026-11-24T16:11:57Z).
4. **Entry files written in the repo clone (2 genuine passes on main.ts):**
   - Pass 1: `main.ts` written — LINE constant, gate self-check (1–200
     chars, non-whitespace, single line), writes `/output/entry.txt` (or
     `$MAKEFUN_OUTPUT_DIR`).
   - Pass 2: real edit to `main.ts` — added a dog-voice self-check
     (first-person "I"/"My" + a dog-priority word: bed/intruder/chew/smell/
     floor/ball/walk/treat/tail), a freshness self-check (refuses cat-blame,
     taste-of-paper/delicious, and good-boy/good-girl stock lines, plus any
     "because" explaining the joke), and a tightness self-check (no
     leading/trailing space, no double spaces).
   - `README.md` with the three live make.fun badges, the line, why it wins,
     run instructions.
   - `BUILD-NOTES.md` with bounty facts, judge brief, chosen line reasoning,
     all 13 candidates, verification notes.
   - `.makefun/owner.json` =
     `{"wallet":"2hQpcsZ6L7b83LxfDam8pHLD4LjFUxNtQKgM5SijE788"}` (same wallet
     as sibling entries).
   - `LICENSE` — standard MIT text (copied from the sibling entry's LICENSE).
   - `.gitignore` — `out/`.
5. **Verified locally** — `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
   run twice (Node v24.22.1); `out/entry.txt` byte-identical across both
   runs (cmp clean), exactly the chosen line. Standalone Python gate check:
   91 chars / 91 bytes, 1 line, non-whitespace, gate 1–200 PASS,
   first-person, dog priority present, no stock words, no "because", no
   wasted whitespace. (Node printed only the harmless module-type warning —
   no `package.json`, same pattern as sibling entries; output unaffected.)
6. **Committed + pushed** — commit
   `bfcebde16fa80b47d75d91d99cb23b13d900b48d` (short `bfcebde`), message
   "Dog Ate My Homework entry: bed intruder police report (91 chars)", 6
   files, author samidyt <samidyt@users.noreply.github.com> (same identity
   as sibling entries; set locally in this repo only). `git push -u origin
   master` succeeded, working tree clean afterwards.
7. **GitHub About set and verified** — homepage
   `https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c`,
   topic `makefun`, description "make.fun entry: The Dog Ate My Homework —
   Funniest Excuse, one line, 91 chars" (verified via `gh repo view --json
   homepageUrl,repositoryTopics,url,description`).

## Verification notes

- `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` run twice; output
  byte-identical across both runs; standalone Python gate check: 91 chars /
  91 bytes, 1 line, non-whitespace, gate 1–200 PASS, first-person, dog
  priority present, no stock words, no "because", no wasted whitespace.
- No fee paid, no wallet touched, no funds/capital required (text-only
  bounty). No real funds involved at any step.
