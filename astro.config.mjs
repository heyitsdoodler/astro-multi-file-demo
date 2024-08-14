import { defineConfig } from 'astro/config';
import DynamicPublicDirectory from "vite-multiple-assets";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            DynamicPublicDirectory([
                "public2",
                "public3"
            ])
        ]
    }
});
