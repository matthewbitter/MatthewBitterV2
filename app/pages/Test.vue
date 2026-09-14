<template>
    <UPage>
        <UPageHero>
            <template #headline>
                <p data-testid="count-val">
                    Count: {{ Count }}
                </p>
            </template>
            <template #footer>
                <UButton label="Increment" size="xl" class="mx-auto" @click="Increment" />
            </template>
        </UPageHero>
    </UPage>
</template>

<script lang="ts" setup>

const Count = ref(0);
const Increment = () =>
{

    Count.value++;

};

</script>