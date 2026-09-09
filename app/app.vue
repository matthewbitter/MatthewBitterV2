<template>
    <UApp>
        <UMain>

            <!-- Automatically handles dynamic in-app and route notifications -->
            <NuxtAnnouncer />
            <NuxtRouteAnnouncer />

            <Layout-Header />
            <NuxtPage />
            <Layout-Footer />
        </UMain>
    </UApp>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Page Setup
//---------------------------------------------------------------------------

const url = "https://matthewbitter.com";
const image = `${url}/Images/MatthewBitter.png`;

useHead({
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
        { rel: "icon", href: "/favicon.ico" },
        { rel: "canonical", href: url }
    ],
    htmlAttrs: {
        lang: "en"
    }
});

const title = "Matthew Bitter – Developer Portfolio";
const description = "A Senior Full-Stack Developer with 20+ years of experience who specializes in Vue, Nuxt, and TypeScript.";

useSeoMeta({
    title,
    description,
    author: "Matthew Bitter",
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogType: "website",
    ogUrl: url,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image
});

</script>