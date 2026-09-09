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

useHead({
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
        { rel: "icon", href: "/favicon.ico" }
    ],
    htmlAttrs: {
        lang: "en"
    }
});

const title = "Matthew Bitter";
const description = "Matthew Bitter is a Senior Full-Stack Developer with over 20+ years of experience, specializing in building high-performance, scalable, responsive applications using Vue, Nuxt, and TypeScript.";

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterCard: "summary_large_image",
    ogImage: "https://matthewbitter.com/Images/MatthewBitter.png",
    author: "Matthew Bitter",
    ogType: "website"
});

</script>