import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve, join } from "node:path";

// Publish route-specific HTML metadata for crawlers and social previews that
// do not execute JavaScript. React still renders the existing Vite app.
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pages = JSON.parse(await readFile(join(root, "src/data/metadata.json"), "utf8"));
const template = await readFile(join(root, "dist/index.html"), "utf8");
const origin = new URL(template.match(/<link rel="canonical" href="([^"]+)"/)[1]).origin;
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

for (const [path, page] of Object.entries(pages)) {
  const title = escape(page.title);
  const description = escape(page.description);
  const url = new URL(path, origin).href;
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${description}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`);
  const directory = join(root, "dist", path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), html);
  // Support Vite's extensionless preview as well as Vercel directory routing.
  if (path !== "/") await writeFile(join(root, "dist", `${path.slice(1)}.html`), html);
}
console.log(`Generated metadata for ${Object.keys(pages).length} portfolio routes.`);
