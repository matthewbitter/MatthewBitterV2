<template>
    <UFooter>
        <template #left>
            © {{ new Date().getFullYear() }} Matthew Bitter
        </template>
        <template #default>
            <UNavigationMenu :items="NavigationLinks" />
        </template>
        <template #right>
            <UButton icon="i-simple-icons-github" to="https://github.com/matthewbitter" target="_blank" color="neutral" variant="ghost" />
            <UButton icon="i-simple-icons-linkedin" to="https://www.linkedin.com/in/matthewbitterdeveloper" target="_blank" color="neutral" variant="ghost" />
        </template>
    </UFooter>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import type { NavigationMenuItem } from "@nuxt/ui";


//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------

const NavigationLinks = ref<NavigationMenuItem[]>([
    {
        label: "Privacy Policy",
        to: "/PrivacyPolicy"
    },
    {
        label: "Site Map",
        href: "/sitemap.xml",
        target: "_blank"
    }
]);

</script>