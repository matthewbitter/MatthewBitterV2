<template>
    <UPageHero id="Home" title="Matthew Bitter" description="Senior Full-Stack Engineer and Unity Game Developer based in Cincinnati, Ohio." headline="Open To Work" :links="HeroLinks" class="min-h-screen flex flex-col justify-center">
        <template #headline>
            <UButton label="Open To Work" variant="ghost">
                <template #leading>
                    <UIcon name="mdi:circle" class="absolute animate-ping" />
                    <UIcon name="mdi:circle" class="relative scale-66" />
                </template>
            </UButton>
        </template>
        <template #links>
            <div class="flex flex-wrap gap-x-6 gap-y-3 justify-center">
                <UButton label="GitHub" to="https://github.com/matthewbitter" variant="ghost" size="xl" icon="i-simple-icons-github" target="_blank" rel="noopener noreferrer" class="mx-auto" />
                <UButton label="LinkedIn" to="https://www.linkedin.com/in/matthew-bitter" variant="ghost" size="xl" icon="i-simple-icons-linkedin" target="_blank" rel="noopener noreferrer" class="mx-auto" />
                <UDropdownMenu arrow :items="ResumeLinks" size="xl">
                    <UButton label="Resume" to="/Matthew_Bitter_Senior_Full_Stack_Engineer_Resume_Portfolio.pdf" variant="ghost" size="xl" icon="i-simple-icons-googledocs" target="_blank" rel="noopener noreferrer" class="mx-auto" />
                </UDropdownMenu>
            </div>
        </template>
        <template #bottom>
            <UButton label="More" to="#AboutMe" variant="ghost" size="xl" trailing-icon="mdi:arrow-down" class="mx-auto" />
        </template>
    </UPageHero>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import type { DropdownMenuItem } from "@nuxt/ui";


//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------

const linkSettings: DropdownMenuItem = {
    target: "_blank",
    rel: "noopener noreferrer",
    color: "primary"
};

const ResumeLinks = ref<DropdownMenuItem[]>([{
    label: "Portfolio",
    to: "/Matthew_Bitter_Senior_Full_Stack_Engineer_Resume_Portfolio.pdf",
    icon: "i-simple-icons-googledocs",
    ...linkSettings
},
{
    label: "ATS",
    to: "/Matthew_Bitter_Senior_Full_Stack_Engineer_Resume.pdf",
    icon: "i-simple-icons-googledocs",
    ...linkSettings
}
]);

</script>