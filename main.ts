// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a vertical GTA 6 clip cut from Rockstar's
// Grand Theft Auto VI Trailer 2 (Lucia walks out of prison, Jason waiting
// by the car), with make.fun's pitch on an end card, uploaded to YouTube
// as a public Short. This program does the one thing the gate needs: it
// copies VIDEO.json from the repository root to /output/VIDEO.json, where
// the house reads the video's address and fetches its views through the
// YouTube Data API. Nothing this program writes about the video is scored.
//
// VIDEO.json holds a placeholder until the clip is uploaded; replace it
// with the real Short address before submitting.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail fast on a malformed VIDEO.json instead of handing the gate a file
// it will refuse: it must be a JSON object with a url string.
const videoPath = join(BOT_DIR, 'VIDEO.json');
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(videoPath, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a "url" string, e.g. {"url": "https://www.youtube.com/shorts/<id>"}');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
