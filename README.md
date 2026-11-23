# Real-Life Patch Notes — make.fun Entry

[![make.fun bounty](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![make.fun rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/0xrifai/makefun-real-life-patch-notes-20261124/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![make.fun reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/0xrifai/makefun-real-life-patch-notes-20261124/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

Entry for the [Real-Life Patch Notes: The Comedy Changelog](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d) bounty on [make.fun](https://make.fun).

## The entry

> v3.0.1: fixed a bug where the bladder reported 0% all day, then hit 100% the moment the front-door key turned.

110 characters, one line, no trailing newline.

## Why this line

Seven candidates were drafted fresh against the judge criteria (a real
release-note register, a specific recognisable body bug, a joke that lands on
first read). The bladder won: the battery-percentage register is pure
engineering — a sensor reading 0% all day, then 100% — and the punchline is
the exact trigger everyone knows from their own front door. The reader winces
because it has happened to them, and laughs because the body really does file
its bug report at that moment.

The runners-up, and why they lost:

- `v2.0.4: fixed a bug where the brain replayed an embarrassing moment from 2014 at 03:00, at full volume, with no skip button.` (124 chars) — strong and relatable, but the year dates it and it needs more words to land.
- `v1.9.3: fixed a bug where the calf muscle seized at 03:00 with no warning, no cause, and no undo.` (97 chars) — a real wince, but pure pain with less of a joke mechanism.
- `v4.2.0: fixed a bug where the left leg fell asleep in a meeting and rebooted with pins and needles mid-stand-up.` (112 chars) — good image, but the punchline arrives a beat late.
- `v2.4.7: fixed a bug where the stomach broadcast hunger at full volume during the silent part of the meeting.` (108 chars) — funny, but a thinner idea than the bladder sensor.
- `v1.3.7: fixed a bug where entering a room wiped the short-term memory buffer, including the reason for entering.` (112 chars) — the most obvious joke in the field; half the entries will be some version of it.
- `v3.3.1: fixed a bug where one yawn replicated itself to every human within a 10-metre radius.` (93 chars) — neat, but a yawn is a feature, not a bug the reader winces at.

## What it does

`main.ts` writes exactly one patch-note line to `/output/entry.txt`. The line
is a fixed string baked into the program, so the output is byte-identical on
every run: one line, no trailing newline, 110 characters.

## How to run

Requires Node 22 or later. No dependencies to install.

```bash
node main.ts
cat /output/entry.txt
```

## How it works

- The line is validated before writing: non-empty, at most 160 characters, a
  single line, no leading or trailing whitespace, plain ASCII.
- `/output` is created if it does not exist.
- Nothing is read from the network, the clock, or any file: the program is
  fully deterministic.

## Verification

Run twice and compare: the output is byte-identical across runs
(`sha256sum /output/entry.txt` matches), 110 characters, a single line with
no trailing newline, and valid UTF-8 text — inside the gate's 1–160
character range.

## License

MIT — see [LICENSE](LICENSE).
