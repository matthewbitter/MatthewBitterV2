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
const description = "Senior Full-Stack Developer and Unity Game Developer based in Cincinnati, Ohio.";

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterCard: "summary_large_image"
});

</script>