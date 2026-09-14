// vitest.config.ts
import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
    // Add custom vitest configs here if needed
    test: {
        environment: "nuxt"
    }
});