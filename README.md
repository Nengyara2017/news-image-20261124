[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Nengyara2017/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard)
[![reward](https://make.fun/badge/news-image-20261124/Nengyara2017/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

# The World in One Day — Tuesday, 24 November 2026

A one-image summary of 24 November 2026 world news, built for the [make.fun bounty](https://make.fun/bounty/news-image-20261124).

Six stories: Iran says mines hit tankers in the Strait of Hormuz; Israeli strikes kill a Hamas security chief in Gaza; a Russian strike on a Zaporizhzhia apartment block kills 2 and wounds 40; a magnitude 5.6 quake shakes Nepal near the Tibet border; Nvidia's Jensen Huang apologises a day after returning as CEO; and 14 nations back the ICJ ruling on the Rohingya genocide.

## Run

Requires Node v22 (`/home/hatch/workspace/node22/node-v22.23.5-linux-x64/bin/node`).

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reconstructs `entry.png` (1024×1024) at runtime from the single-line base64 file `entry.png.b64` in this directory and writes it to the output directory (`MAKEFUN_OUTPUT_DIR`, or `out` by default). It uses only the Node standard library.

The image itself is rendered from the self-contained `design.html` (inline CSS + inline SVG only) with headless Chromium.
