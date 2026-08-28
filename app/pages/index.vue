<template>
    <UPage>

        <Index-Hero />

        <Shared-Animation-FadeIn>
            <Index-AboutMe />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <Index-Websites />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <Index-Games />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <Index-Skills />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <Index-Testimonials />
        </Shared-Animation-FadeIn>

        <Shared-Animation-FadeIn>
            <Index-Contact />
        </Shared-Animation-FadeIn>

    </UPage>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Page Setup
//---------------------------------------------------------------------------
definePageMeta({ layout: false });

</script>