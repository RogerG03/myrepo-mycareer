// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const site = process.env.SITE_URL ?? (isGitHubPages ? "https://rogerg03.github.io" : undefined);
const base = process.env.BASE_URL ?? (isGitHubPages ? "/myrepo-mycareer" : undefined);

export default defineConfig({
  ...(site ? { site } : {}),
  ...(base ? { base } : {}),
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },
});
