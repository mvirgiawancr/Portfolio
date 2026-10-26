// One-off: re-encode the stills under public/work so the page ships bytes, not originals.
// covers -> jpg 1600x1200 (top crop, so they also work as og:image everywhere)
// everything else -> webp, max 1600 wide, native aspect
import sharp from "sharp";
import { readFile, readdir, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = "public/work";
const MAP_FILE = "scripts/image-map.json";
const map = JSON.parse(await readFile(MAP_FILE, "utf8").catch(() => "{}"));

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(png|jpe?g)$/i.test(e.name)) yield p;
  }
}

for await (const file of walk(ROOT)) {
  const isCover = /^cover\.(png|jpe?g)$/i.test(path.basename(file));
  const out = file.replace(/\.(png|jpe?g)$/i, isCover ? ".jpg" : ".webp");
  const tmp = out + ".tmp"; // a jpg cover would otherwise be its own output
  const img = sharp(file);
  if (isCover) {
    await img
      .resize(1600, 1200, { fit: "cover", position: "top" })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(tmp);
  } else {
    await img
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(tmp);
  }
  await rename(tmp, out);
  const url = (p) => "/" + p.replace(/\\/g, "/").replace(/^public\//, "");
  map[url(file)] = url(out);
  if (file !== out) await unlink(file);
}

await writeFile("scripts/image-map.json", JSON.stringify(map, null, 2));
console.log(Object.entries(map).length, "files re-encoded");

