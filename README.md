# Sum up 17 November's world news in one image

An entry for the make.fun bounty **news-image-20261117**.

`main.ts` (Node 22, standard library only) writes `entry.png` to `/output`.
The image is a single 1024x1024 editorial infographic summarising the biggest
world-news stories of **Tuesday, 17 November 2026**:

- Middle East: US and Iran trade strikes; oil tankers ablaze in the Strait of Hormuz.
- Ukraine-Russia: Ukraine cripples the Crimea bridge; Russia pounds Kyiv with missiles.
- Diplomacy: Trump lands in Manila for ASEAN; a Shenzhen summit with Xi and Putin is set.
- Markets & tech: new US curbs on AI chips to China sink global technology stocks.
- United States: fallout from the biggest FAA ground stop since 9/11; a Chase outage hits banks.
- Gaza: Israel falls short on its Gaza aid pledges as strikes continue.

Run locally:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT (see `LICENSE`).
