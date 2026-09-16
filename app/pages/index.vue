<template>
    <UPage>

        <Index-Hero />

        <Shared-Animation-FadeIn>
            <LazyIndex-AboutMe />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <LazyIndex-Websites />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <LazyIndex-Games />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <LazyIndex-Skills />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <LazyIndex-Testimonials />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <LazyIndex-Contact />
        </Shared-Animation-FadeIn>

    </UPage>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Page Setup
//---------------------------------------------------------------------------
definePageMeta({ layout: false });

</script>