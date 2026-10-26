import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const base = process.env.BASE_URL ?? (process.env.GITHUB_ACTIONS === "true" ? "/myrepo-mycareer" : "");
for (const [locale, path, alternate] of [["es", "dist/index.html", `${base}/en/`], ["en", "dist/en/index.html", `${base}/`]]) {
  test(`${locale}: identity, navigation, locale and built assets`, () => {
    const html = readFileSync(path, "utf8");
    assert.match(html, new RegExp(`<html lang="${locale}"`));
    assert.match(html, /Roger Guido<span>\.<\/span>/);
    assert.ok(html.includes(`href="${alternate}"`), "Language switch must respect the deployment base");
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, "No duplicate IDs");
    for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(target), `Missing anchor ${target}`);
    for (const [, tag] of html.matchAll(/(<a\b[^>]*target="_blank"[^>]*>)/g)) assert.match(tag, /rel="noreferrer"/);
    for (const [, asset] of html.matchAll(/(?:href|src)="([^"]*_astro\/[^"?]+)"/g)) assert.ok(existsSync(`dist/${asset.slice(asset.indexOf("_astro/"))}`), `Missing asset ${asset}`);
    assert.match(html, /class="skip-link"/);
    assert.match(html, /class="code-scene/);
    assert.ok(html.includes(locale === "es" ? "avanzó de forma parcial" : "progressed partially"), "Keep the rental project's scope disclosure");
    assert.ok(html.includes(locale === "es" ? "no es una captura" : "not a screenshot"), "Keep the illustrative study disclosure");
    assert.ok(!html.includes('src="https://'), "No external runtime scripts");
  });
}
