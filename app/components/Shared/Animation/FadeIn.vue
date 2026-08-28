<template>
    <div ref="target" class="w-full">
        <div :class="['scroll-animate', { 'is-visible': IsVisible }]">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

const IsVisible = ref(false);
const target = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

onMounted(() =>
{

    observer = new IntersectionObserver(([entry]) =>
    {

        if (entry?.isIntersecting)
        {

            IsVisible.value = true;

            if (target.value)
            {

                observer?.unobserve(target.value);

            }

        }

    }, { threshold: 0.1 });

    if (target.value)
    {

        observer.observe(target.value);

    }

});

onUnmounted(() =>
{

    observer?.disconnect();

});

</script>

<style scoped>

.scroll-animate
{
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.scroll-animate.is-visible
{
    opacity: 1;
    transform: translateY(0);
}

</style>