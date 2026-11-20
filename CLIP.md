# CLIP.md — round 3: "One Night in Vice City"

## The decision

Round 1 (Lucia walks out of prison, Trailer 2 59–69.5s) was too slow and
emotional. Round 2 (skull-mask robbery + beer on the pier, 74.8–83.5s) was
rejected by Risma — and it repeated one shot in slow-mo, which she
explicitly forbade for round 3. So round 3 picks a moment that is
completely different from both: **a night out in Vice City**, Trailer 2
86–103s, told as one escalating arc — scuffle, glamour, the couple, the
club. The hook lands in the first second (a woman lunging at a man at the
bar), every shot is a different place and a different second of footage,
and the clip never repeats a shot: no replay, no slow-mo repeat, no loop.

## Shot list (all from GTA 6 Trailer 2, Rockstar Games)

Every range below is a different, non-overlapping slice of the trailer.
No shot appears twice.

| # | Trailer time | Length | What you see | On-screen text |
|---|--------------|--------|--------------|----------------|
| 1 | 92.5–93.8 | 1.3s | Bar scuffle: a woman lunges at a man at the "Happy Hour" bar | IT STARTS AT THE BAR. |
| 2 | 94.2–96.2 | 2.0s | A woman in a gold sequin dress walks the terrace bar | THEN SHE WALKS IN. |
| 3 | 97.6–98.8 | 1.2s | Jason in the car, intense, Lucia beside him | THEY ROLL OUT. |
| 4 | 99.0–100.0 | 1.0s | Jason and Lucia walk in holding hands (backs) | HAND IN HAND. |
| 5 | 100.0–101.2 | 1.2s | The NINE1N club crowd erupts in purple light | THE MUSIC HITS. |
| 6 | 101.3–102.8 | 1.5s | The green sequin dress dancing under the lights | VICE CITY NIGHTS. |
| — | end card | 5.0s | Black card, make.fun ghost mark + pitch | Make clips like this with AI / and earn money on make.fun / make.fun/bounty/gta6-clipper-01 |

Total: 13.23s, 1080×1920 vertical, H.264 + AAC, original trailer audio
kept through the hook, end card silent.

## Why this moment

- **Different from rounds 1 and 2:** no prison, no robbery, no pier, no
  beer. A night out, not a crime.
- **Not used by the leaderboard top 10:** no supercar on the beach, no
  138–151s chase, no fire truck, no 5-star chase into the ocean, no
  crocodile, no fishing, no helicopter.
- **Readable without sound:** every shot is a clear picture (a scuffle, a
  gold dress, a couple holding hands, a club erupting) with one short line
  of text.
- **Fresh footage every second:** six shots, six time ranges, zero overlap.

## How it was rendered (in this session)

Source: `~/workspace/makefun/gta6-clipper-01-work/gta6-trailer2.mp4`
(1080p, 166.8s). Work dir: `~/workspace/makefun/gta6-clipper-01-work-r3/`.

1. Contact sheets made in this session (every 5s, then 1s and 0.5s detail
   in the 28–58s, 86–118s and 118–138s windows) to pick the moment.
2. Hook: one ffmpeg command, six inputs (`-ss`/`-t` per shot), each
   blur-filled to 1080×1920 (blurred background + centred foreground),
   on-screen text in DejaVu Sans Bold 72px, white with black border,
   concatenated with original audio → `hook.mp4` (8.2s).
3. End card: black 1080×1920, 5s, make.fun ghost mark (260px) + pitch
   text, silent audio track → `endcard.mp4`.
4. Concatenated hook + end card → `clip.mp4` (13.23s, 4,156,822 bytes,
   sha256 `845e96a78beaeed7e0e5ecac47081e60ee9156765b96548dc9fc03dfcd1b4582`).
5. Seven frames extracted and checked visually: all six texts readable,
   subjects not cropped, no shot repeated.

## Upload (for Risma — new Short, the file is different from rounds 1–2)

- **Suggested title:** "One night in Vice City — GTA 6 hits different" (48 chars)
- **Description, exactly these two lines:**
  ```
  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
  makefun-willow-heron-jasmine
  ```
- Public Short, before **Monday 23 Nov 2026 08:00 WIB**, keep it public
  until the results are out.
- After upload: put the Short's URL into `VIDEO.json` as
  `{"url": "https://www.youtube.com/shorts/<id>"}`, push, bundle, check,
  submit after Risma's approval.
