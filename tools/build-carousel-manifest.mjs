/* =============================================================================
   Blabble — elenco delle immagini della galleria di "Il gioco"

   Il sito statico non ha un bundler, quindi il browser non può leggere il
   contenuto di una cartella: questo script fa da passo di build minimo. Legge
   `assets/game-carousel/`, ordina i nomi alfabeticamente e scrive
   `assets/game-carousel/manifest.js`, che `script.js` usa per costruire le
   slide. Aggiungendo o togliendo immagini basta rilanciarlo:

       node tools/build-carousel-manifest.mjs

   Nessuna dipendenza e nessun file da modificare a mano.
   ========================================================================== */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIR = path.join(ROOT, "assets", "game-carousel");
const OUT = path.join(DIR, "manifest.js");
const BASE = "assets/game-carousel";

/* i formati che il sito serve già: raster compressi, niente SVG */
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

fs.mkdirSync(DIR, { recursive: true });

const images = fs
  .readdirSync(DIR, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => EXTENSIONS.includes(path.extname(name).toLowerCase()))
  /* ordine alfabetico stabile e indipendente dal filesystem: "01-" prima di "02-" */
  .sort((a, b) => a.localeCompare(b, "en", { numeric: false, sensitivity: "base" }));

const list = images.map((name) => `  "${BASE}/${name}",`).join("\n");

const file = `/* =============================================================================
   File generato da tools/build-carousel-manifest.mjs — non modificare a mano.
   Rigenera con: node tools/build-carousel-manifest.mjs
   ========================================================================== */
window.BLABBLE_CAROUSEL = [
${list}
];
`;

fs.writeFileSync(OUT, images.length ? file : file.replace("\n\n];", "\n];"));

console.log(
  images.length
    ? `manifest.js aggiornato con ${images.length} immagine/i:\n  ${images.join("\n  ")}`
    : "nessuna immagine trovata in assets/game-carousel: manifest.js vuoto (resta il placeholder grigio)"
);
