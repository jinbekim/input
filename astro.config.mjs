// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import react from '@astrojs/react';

import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react(), lit()],
});