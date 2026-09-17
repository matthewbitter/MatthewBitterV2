<template>
    <UHeader title="Matthew Bitter" to="/#Home" mode="slideover">
        <UNavigationMenu :items="NavigationLinks" content-orientation="vertical" class="hidden lg:flex shrink-0" />
        <template #body>
            <UNavigationMenu :items="NavigationLinks" orientation="vertical" :collapsible="false" />
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
        icon: "mdi:briefcase",
        active: isIndex.value && (ActiveSection.value === "Websites" || ActiveSection.value === "Games"),
        defaultOpen: true,
        children: [
            {
                label: "Websites",
                to: "/#Websites",
                icon: "mdi:web",
                active: isIndex.value && ActiveSection.value === "Websites"
            },
            {
                label: "Games",
                to: "/#Games",
                icon: "lucide:gamepad",
                active: isIndex.value && ActiveSection.value === "Games"
            }
        ]
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
        icon: "mdi:contact",
        active: isIndex.value && (ActiveSection.value === "HireMe" || ActiveSection.value === "Contact"),
        defaultOpen: true,
        children: [
            {
                label: "Hire Me",
                to: "/#HireMe",
                icon: "mdi:megaphone",
                active: isIndex.value && ActiveSection.value === "HireMe"
            },
            {
                label: "Contact Form",
                to: "/#Contact",
                icon: "mdi:form",
                active: isIndex.value && ActiveSection.value === "Contact"
            }
        ]
    }
]);
// HireMe

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

                const id = entry.target.id;

                ActiveSection.value = id;

                const newHash = `#${id}`;

                history.replaceState(null, "", newHash);

            }

        }

    },
    {
        root: null,
        rootMargin: "-50%",
        threshold: 0
    });

    const sections = document.querySelectorAll("[data-slot='root'][id]");

    for (const section of sections)
    {

        Observer?.observe(section);

    }

}

</script>