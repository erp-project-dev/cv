// Renders the built site with headless Chromium and prints one A4 PDF per language
// into dist/ (for deploy) and public/ (so `npm run dev` can serve them too).
import { spawn } from "node:child_process";
import { copyFile } from "node:fs/promises";
import { chromium } from "playwright";

const PORT = 4173;
const LANGS = ["en", "es"];

const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], { stdio: "pipe" });
await new Promise((resolve, reject) => {
  server.stdout.on("data", (d) => d.toString().includes(String(PORT)) && resolve());
  server.on("exit", (code) => reject(new Error(`vite preview exited (${code})`)));
});

const browser = await chromium.launch();
try {
  for (const lang of LANGS) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}/?lang=${lang}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const out = `dist/cv-${lang}.pdf`;
    await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
    await copyFile(out, `public/cv-${lang}.pdf`);
    console.log(`✓ ${out}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.kill();
}
