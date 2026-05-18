import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public", "products");
const source = path.join(publicDir, "neckrelax-kit-source.png");

const { width: W, height: H } = await sharp(source).metadata();

/** Crop regions tuned for the 616×760 supplier composite layout. */
const crops = [
  { name: "neckrelax-kit-hero.jpg", left: 0, top: 0, width: W, height: Math.round(H * 0.34) },
  {
    name: "neckrelax-kit-lifestyle.jpg",
    left: 0,
    top: Math.round(H * 0.34),
    width: Math.round(W * 0.5),
    height: Math.round(H * 0.28),
  },
  {
    name: "neckrelax-kit-accessories.jpg",
    left: Math.round(W * 0.5),
    top: Math.round(H * 0.34),
    width: Math.round(W * 0.5),
    height: Math.round(H * 0.28),
  },
  {
    name: "neckrelax-kit-patch.jpg",
    left: 0,
    top: Math.round(H * 0.62),
    width: Math.round(W * 0.2),
    height: H - Math.round(H * 0.62),
  },
  {
    name: "neckrelax-kit-remote.jpg",
    left: Math.round(W * 0.2),
    top: Math.round(H * 0.62),
    width: Math.round(W * 0.2),
    height: H - Math.round(H * 0.62),
  },
  {
    name: "neckrelax-kit-heat-use.jpg",
    left: Math.round(W * 0.4),
    top: Math.round(H * 0.62),
    width: Math.round(W * 0.2),
    height: H - Math.round(H * 0.62),
  },
  {
    name: "neckrelax-kit-multi-body.jpg",
    left: Math.round(W * 0.6),
    top: Math.round(H * 0.62),
    width: Math.round(W * 0.2),
    height: H - Math.round(H * 0.62),
  },
  {
    name: "neckrelax-kit-pain-map.jpg",
    left: Math.round(W * 0.8),
    top: Math.round(H * 0.62),
    width: W - Math.round(W * 0.8),
    height: H - Math.round(H * 0.62),
  },
];

for (const crop of crops) {
  const out = path.join(publicDir, crop.name);
  await sharp(source)
    .extract({
      left: crop.left,
      top: crop.top,
      width: crop.width,
      height: crop.height,
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(out);
  console.log("wrote", crop.name);
}

// Full composite for “what’s in the box” section
await sharp(source)
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(publicDir, "neckrelax-kit-showcase.jpg"));
console.log("wrote neckrelax-kit-showcase.jpg");
