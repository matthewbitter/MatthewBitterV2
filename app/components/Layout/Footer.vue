<template>
    <UFooter>
        <template #left>
            © {{ new Date().getFullYear() }} Matthew Bitter
        </template>
        <template #default>
            <UNavigationMenu :items="NavigationLinks" />
        </template>
        <template #right>
            <UTooltip text="GitHub">
                <UButton icon="i-simple-icons-github" to="https://github.com/matthewbitter" target="_blank" color="neutral" variant="ghost" aria-label="GitHub">
                    <span class="sr-only">GitHub</span>
                </UButton>
            </UTooltip>
            <UTooltip text="LinkedIn">
                <UButton icon="i-simple-icons-linkedin" to="https://www.linkedin.com/in/matthew-bitter" target="_blank" color="neutral" variant="ghost" aria-label="LinkedIn">
                    <span class="sr-only">LinkedIn</span>
                </UButton>
            </UTooltip>
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