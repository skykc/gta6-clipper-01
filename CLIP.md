# The clip

## The moment (chosen in this session)

Grand Theft Auto VI Trailer 2 (Rockstar Games, youtube.com/watch?v=VQRLujxTm3c),
**59.0–69.5s: Lucia walks out of prison, Jason waiting by the car.**

Why this moment: it is the trailer's opening story beat and the start of Jason
and Lucia's story — instantly readable with the sound off (prison gates, grey
shirt, reunion by the car). I checked the live leaderboard (370 entries) first:
the top 10 all use other Trailer 2 moments — the packed-beach supercar, the
138–151s chase run, the fire-truck vs police, the 5-star chase into the ocean,
the crocodile, the first fish, the police helicopter — so this moment is strong
and not a duplicate of theirs.

## The cut (rendered with ffmpeg in this session)

- Source: `gta6-trailer2.mp4` (1080p, downloaded from Rockstar's channel with yt-dlp)
- Hook, 10.5s: Trailer 2 59.0–69.5s, blur-fill to vertical 1080x1920 so nothing
  falls off the sides, on-screen hook text in the top band:
  - 0–3s "HE WAITED FOR HER" (Jason at the prison counter)
  - 3–7s "SHE'S FINALLY OUT" (Lucia walks through the gates)
  - 7–10.5s "GTA 6 STARTS HERE" (Jason waiting by the car)
- End card, 5s: dark card with a magenta bar — "Make clips like this with AI
  and earn money on make.fun" + "make.fun/bounty/gta6-clipper-01"
- Output: `clip.mp4`, 1080x1920, 30 fps, H.264 + AAC, 15.5s
- Render commands: `render_hook.sh`, `render_endcard.sh` (ffmpeg filter graphs),
  concatenated with the concat filter (see the session transcript).

## Upload (for Risma)

- Title: **Lucia just walked out of prison — GTA 6 starts HERE**
- Publish as a public YouTube Short, before Mon 23 Nov 2026 08:00 WIB.
- Description (exact — the first line word for word, then the play code):

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-willow-heron-jasmine
```

- After upload, put the Short's address in `VIDEO.json` as
  `{"url": "https://www.youtube.com/shorts/<id>"}` and submit that commit.
- Keep the video public until the results are out.
