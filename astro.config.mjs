import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import svelte from "@astrojs/svelte";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), icon(), sitemap(), partytown()],
  output: "server",
  adapter: vercel(),
});
