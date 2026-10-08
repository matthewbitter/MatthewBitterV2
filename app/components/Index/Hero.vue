<template>
    <UPageHero id="Home" title="Matthew Bitter" description="Senior Full-Stack Engineer and Unity Game Developer based in Cincinnati, Ohio." headline="Open To Work" class="min-h-screen flex flex-col justify-center">
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
                <UButton label="Resume" :to="`/Matthew_Bitter_Senior_Full_Stack_Engineer_Resume.pdf?v=${BuildTime}`" variant="ghost" size="xl" icon="fa7-solid:file-pdf" target="_blank" rel="noopener noreferrer" class="mx-auto" />
            </div>
        </template>
        <template #bottom>
            <UButton label="More" to="#AboutMe" variant="ghost" size="xl" trailing-icon="mdi:arrow-down" class="mx-auto" />
        </template>
    </UPageHero>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------

const BuildTime = useRuntimeConfig().public.BuildTime;

</script>