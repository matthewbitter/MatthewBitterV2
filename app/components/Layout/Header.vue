<template>
    <UHeader title="Matthew Bitter" to="/#Home" mode="slideover">
        <UNavigationMenu :items="NavigationLinks" />
        <template #body>
            <UNavigationMenu :items="NavigationLinks" orientation="vertical" />
        </template>
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import type { NavigationMenuItem } from "@nuxt/ui";


//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------

const ActiveSection = ref("Home");
let Observer: IntersectionObserver | null = null;
const isIndex = computed(() => useRoute().name === "index");
const route = useRoute();

const NavigationLinks = computed<NavigationMenuItem[]>(() => [
    {
        label: "Home",
        to: "/#Home",
        icon: "mdi:home",
        active: isIndex.value && ActiveSection.value === "Home"
    },
    {
        label: "About Me",
        to: "/#AboutMe",
        icon: "mdi:person",
        active: isIndex.value && ActiveSection.value === "AboutMe"
    },
    {
        label: "Projects",
        to: "/#Projects",
        icon: "mdi:folders",
        active: isIndex.value && ActiveSection.value === "Projects"
    },
    {
        label: "Skills",
        to: "/#Skills",
        icon: "mdi:code",
        active: isIndex.value && ActiveSection.value === "Skills"
    },
    {
        label: "Testimonials",
        to: "/#Testimonials",
        icon: "lucide:speech",
        active: isIndex.value && ActiveSection.value === "Testimonials"
    },
    {
        label: "Contact",
        to: "/#Contact",
        icon: "mdi:contact",
        active: isIndex.value && ActiveSection.value === "Contact"
    }
]);


//---------------------------------------------------------------------------
/**
 * Runs every route change.
 */
//---------------------------------------------------------------------------
watch(() => route.path, () =>
{

    SetupSectionObserver();

});


//---------------------------------------------------------------------------
/**
 * Runs after component renders in the DOM
 */
//---------------------------------------------------------------------------
onMounted(() =>
{

    SetupSectionObserver();

});


//---------------------------------------------------------------------------
/**
 * Runs after component is removed from the DOM
 */
//---------------------------------------------------------------------------
onUnmounted(async () =>
{

    if (Observer)
    {

        Observer.disconnect();

    }

});


//---------------------------------------------------------------------------
/**
 * Highlights which section is active in the header.
 */
//---------------------------------------------------------------------------
function SetupSectionObserver()
{

    ActiveSection.value = "Home";

    Observer = new IntersectionObserver((entries) =>
    {

        for (const entry of entries)
        {

            if (entry.isIntersecting)
            {

                ActiveSection.value = entry.target.id;
                entry.target.classList.remove("opacity-0", "translate-y-10");
                entry.target.classList.add("opacity-100", "translate-y-0");

            }

        }

    },
    {
        root: null,
        rootMargin: "-50%",
        threshold: 0
    });

    const sections = document.querySelectorAll("div[id], section[id]");

    for (const section of sections)
    {

        Observer?.observe(section);

    }

}

</script>