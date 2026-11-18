import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");

const files = [
  ["logo.png", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch-home-renovations2-1.png"],
  ["kitchen-09.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-9-scaled.jpg"],
  ["kitchen-17.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-17.jpg"],
  ["kitchen-11.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-11.jpg"],
  ["kitchen-05.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-5.jpg"],
  ["kitchen-08.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-8.jpg"],
  ["kitchen-18.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-18.jpg"],
  ["kitchen-04.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-4.jpg"],
  ["kitchen-13.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-13.jpg"],
  ["kitchen-03.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-3.jpg"],
  ["kitchen-hero.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr.jpg"],
  ["kitchen-12.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-12.jpg"],
  ["kitchen-19.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/kitchen_thr-19.jpg"],
  ["bath-07.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/bathroom_thrgroup-7-scaled.jpg"],
  ["bath-09.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/bathroom_thrgroup-9-scaled.jpg"],
  ["bath-10.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/bathroom_thrgroup-10-scaled.jpg"],
  ["bath-01.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/bathroom_thrgroup.jpg"],
  ["bath-03.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/bathroom_thrgroup-3.jpg"],
  ["bath-05.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/bathroom_thrgroup-5.jpg"],
  ["bath-11.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/bathroom_thrgroup-11-scaled.jpg"],
  ["bath-06.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/bathroom_thrgroup-6.jpg"],
  ["bath-08.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/bathroom_thrgroup-8-scaled.jpg"],
  ["living-09.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_living_9.jpg"],
  ["living-02.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_living_2.jpg"],
  ["living-04.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_living_4.jpg"],
  ["home-12.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_12.jpg"],
  ["home-17.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_17.jpg"],
  ["home-18.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_18.jpg"],
  ["home-13.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_13.jpg"],
  ["floor-16.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_floorboard_16-1.jpg"],
  ["floor-02.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_floorboard_2.jpg"],
  ["laundry-27.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_27-1.jpg"],
  ["laundry-05.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_5-2-1.jpg"],
  ["laundry-09.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_9-3.jpg"],
  ["laundry-06.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_6-1.jpg"],
  ["laundry-08.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_8-1.jpg"],
  ["showroom-31.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_31.jpg"],
  ["showroom-32.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_32.jpg"],
  ["showroom-33.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_33.jpg"],
  ["showroom-34.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_34.jpg"],
  ["showroom-35.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_35.jpg"],
  ["showroom-36.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_36.jpg"],
  ["showroom-39.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_39.jpg"],
  ["showroom-40.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_40.jpg"],
  ["deck-02.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_decking_2-1.jpg"],
  ["ba-bath-1-before.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/1-before.jpg"],
  ["ba-bath-1-after.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/1-after.jpg"],
  ["ba-bath-4-before.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_4_before-1.jpg"],
  ["ba-bath-4-after.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_4_after-1.jpg"],
  ["ba-bath-9-before.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_9_before-1-1.jpg"],
  ["ba-bath-9-after.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_9_after-1-1.jpg"],
  ["ba-bath-2-before.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/2-before.jpg"],
  ["ba-bath-2-after.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/2-after.jpg"],
  ["ba-bath-5-before.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_5_before-1.jpg"],
  ["ba-bath-5-after.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_5_after-1.jpg"],
  ["ba-bath-7-before.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_7_before-1.jpg"],
  ["ba-bath-7-after.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_7_after-1.jpg"],
  ["ba-bath-8-before.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_8_before-1.jpg"],
  ["ba-bath-8-after.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/09/touch_home_renovations_8_after-1.jpg"],
  ["ba-home-1-before.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_1-before-1.jpg"],
  ["ba-home-1-after.jpg", "https://thrgroup.com.au/wp-content/uploads/2023/08/touch_home_renovations_1_after-2-1.jpg"],
  ["ba-kitchen-a-before.webp", "https://thrgroup.com.au/wp-content/uploads/2023/09/PHOTO-2023-09-12-12-10-47-fotor-20230914182054.webp"],
  ["ba-kitchen-a-after.webp", "https://thrgroup.com.au/wp-content/uploads/2023/09/PHOTO-2023-09-12-12-10-481-fotor-20230914182039.webp"],
  ["ba-kitchen-b-before.webp", "https://thrgroup.com.au/wp-content/uploads/2023/09/PHOTO-2023-09-12-12-10-511-fotor-20230914181425.webp"],
  ["ba-kitchen-b-after.webp", "https://thrgroup.com.au/wp-content/uploads/2023/09/PHOTO-2023-09-12-12-10-51-fotor-2023091418142.webp"],
  ["ba-laundry-a-before.webp", "https://thrgroup.com.au/wp-content/uploads/2023/09/PHOTO-2023-09-12-12-11-201-Copy-fotor-20230914181724.webp"],
  ["ba-laundry-a-after.webp", "https://thrgroup.com.au/wp-content/uploads/2023/09/PHOTO-2023-09-12-12-11-20-Copy-fotor-20230914181742.webp"],
  ["ba-laundry-b-before.webp", "https://thrgroup.com.au/wp-content/uploads/2023/09/PHOTO-2023-09-12-12-10-50-fotor-20230914175141.webp"],
  ["ba-laundry-b-after.webp", "https://thrgroup.com.au/wp-content/uploads/2023/09/PHOTO-2023-09-12-12-10-512-fotor-2023091417521.webp"],
];

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
  Referer: "https://thrgroup.com.au/gallery/",
};

function candidates(url) {
  const encoded = encodeURIComponent(url.replace("https://", ""));
  return [
    url,
    `https://wsrv.nl/?url=${encoded}&n=-1`,
    `https://web.archive.org/web/2024id_/${url}`,
  ];
}

async function download(name, url) {
  const dest = join(outDir, name);
  for (const source of candidates(url)) {
    try {
      const res = await fetch(source, { headers, redirect: "follow" });
      if (!res.ok) continue;
      const type = res.headers.get("content-type") ?? "";
      if (!type.includes("image") && !type.includes("octet-stream")) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 4000) continue;
      await writeFile(dest, buf);
      console.log(`ok ${name} (${buf.length} bytes via ${new URL(source).host})`);
      return;
    } catch {
      // try next source
    }
  }
  console.error(`fail ${name}`);
}

await mkdir(outDir, { recursive: true });
for (const [name, url] of files) {
  await download(name, url);
}
