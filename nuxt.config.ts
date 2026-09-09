// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxt/eslint",
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxt/scripts",
        "@pinia/nuxt",
        "@nuxt/icon",
        "@nuxtjs/sitemap",
        "@nuxtjs/robots",
        "nuxt-auth-utils",
        "@comark/nuxt"
    ],

    devtools: {
        enabled: true
    },

    css: ["~/assets/css/main.css"],

    site: {
        url: "https://matthewbitter.com",
        name: "Matthew Bitter Portfolio",
        urls: ["/"]
    },

    colorMode: {
        disableTransition: false
    },

    runtimeConfig: {
        // Private keys (Server-side only)
        RecaptchaSecretKey: "",
        FirebaseServiceAccountKey: "",
        ResendApiKey: "",
        PersonalEmail: "",
        NoReplyEmail: "",
        PersonalGoogleId: "",
        StripeSecretKey: "",
        StripeWebhookSecret: "",

        // Public keys (Server and Client-side)
        public: {
            RecaptchaSiteKey: "",
            StripePublishableKey: ""
        }
    },

    routeRules: {
        "/": { prerender: true },
        "/Admin": { robots: false },
        "/Login": { robots: false },
        "/StripeTest": { robots: false },
        // Cache Assets for One Year
        "/_nuxt/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
        // Cache Images for One Year
        "/_ipx/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
        "/Images/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } }
    },

    features: {
        // Inline extracted styles into HTML to prevent render-blocking requests
        inlineStyles: true
    },

    compatibilityDate: "2026-06-30",

    eslint: {
        config: {
            stylistic: {
                commaDangle: "never",
                braceStyle: "1tbs"
            }
        }
    },

    // Configure the underlying icon module
    icon: {
        clientBundle: {
            // Scans all your components to bundle icons into the client build
            scan: true,
            // Prevents bundling from breaking if you use many icons
            sizeLimitKb: 4096,
            icons: [
                "thesvg-color:firestore",
                "thesvg-color:resend-dark",
                "thesvg-color:resend-light"
            ]
        }
    },

    scripts: {
        registry: {
            googleRecaptcha: {
                siteKey: "6Lep3IwtAAAAAMCXbo_3rXt3XVHC4zbs83_LHWHQ",
                // Optional: triggers script load when Nuxt is ready
                trigger: "manual"
            }
        }
    }

});