/**
 * Genera los módulos con el HTML de las landings de Masterclass y Speakers.
 *
 * El contenido se mantiene en `app/<pagina>/content.html` (fácil de editar) y
 * se transforma en un string exportado para que Next lo bundlee: así no hay
 * lecturas de disco en runtime ni problemas con el build standalone.
 *
 * Corre solo antes de `dev` y `build`.
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

const pages = [
  {
    source: "app/masterclass/content.html",
    target: "components/pages/masterclass-html.ts",
    exportName: "masterclassHtml",
  },
  {
    source: "app/speakers/content.html",
    target: "components/pages/speakers-html.ts",
    exportName: "speakersHtml",
  },
];

for (const page of pages) {
  const html = readFileSync(path.join(root, page.source), "utf8").trim();
  const contents = `// Generado por scripts/pages-content.mjs — no editar a mano.
// Fuente: ${page.source}
export const ${page.exportName} = ${JSON.stringify(html)};
`;
  writeFileSync(path.join(root, page.target), contents);
  console.log(`${page.source} → ${page.target}`);
}
