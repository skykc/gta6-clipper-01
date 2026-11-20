# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/skykc/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/skykc/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 15-second vertical GTA 6 Short cut from Rockstar's Grand Theft Auto VI Trailer 2: Lucia walks out of prison and Jason is waiting by the car — the moment GTA 6's story starts. Hook text on screen ("HE WAITED FOR HER" / "SHE'S FINALLY OUT" / "GTA 6 STARTS HERE"), then a 5-second end card pitching make.fun ("Make clips like this with AI and earn money on make.fun"). The clip is rendered with ffmpeg in this session (blur-fill to 1080x1920, on-screen text, pitch end card) and uploaded to YouTube as a public Short. Places go by the video's views at the deadline; the top 20 share $500.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do — the house reads the video itself through the YouTube Data API. `VIDEO.json` holds a placeholder until the clip is uploaded; replace it with the real Short address (YouTube Share button, Copy) before submitting.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6en97dxm&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
