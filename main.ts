// gta6-clipper-01 entry, round 3 (Node 22, standard library only).
//
// The entry is the video itself: a vertical GTA 6 clip cut from Rockstar's
// Grand Theft Auto VI Trailer 2 — one night in Vice City. A bar scuffle, a
// woman in a gold dress walking the terrace, Jason picking Lucia up, the two
// of them walking in holding hands, and the NINE1N club erupting — six
// different shots, no replay, no loop, each second fresh footage. Then a
// 5-second end card pitching make.fun. The clip goes up on YouTube as a
// public Short; this program does the one thing the gate needs: it copies
// VIDEO.json from the repository root to /output/VIDEO.json, where the house
// reads the video's address and fetches its views through the YouTube Data
// API. Nothing this program writes about the video is scored.
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
// it will refuse: it must be a JSON object with a url string pointing at
// a YouTube video (shorts, watch or youtu.be form).
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
const url = (parsed as { url: string }).url;
let host = '';
try {
  host = new URL(url).hostname.replace(/^www\./, '').replace(/^m\./, '');
} catch {
  console.error(`VIDEO.json url is not a valid address: ${url}`);
  process.exit(1);
}
if (host !== 'youtube.com' && host !== 'youtu.be') {
  console.error(`VIDEO.json url must point at YouTube, got host: ${host}`);
  process.exit(1);
}
// A real video id is 11 characters of letters, digits, _ and -. This
// catches the starter placeholder (whose id is literally "<id>") before
// the gate refuses it, and any pasted address with a broken id.
const parsedUrl = new URL(url);
let videoId = '';
if (parsedUrl.pathname.startsWith('/shorts/')) {
  videoId = parsedUrl.pathname.slice('/shorts/'.length).split('/')[0];
} else if (parsedUrl.pathname === '/watch') {
  videoId = parsedUrl.searchParams.get('v') ?? '';
} else {
  videoId = parsedUrl.pathname.slice(1).split('/')[0];
}
if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
  console.error(`VIDEO.json url must carry an 11-character YouTube video id, got: ${url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
