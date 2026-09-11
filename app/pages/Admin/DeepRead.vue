<template>
    <UPage>
        <UPageSection>
            <UProgress v-if="ViewState === 'Loading'" />
            <Markdown v-else>
                {{ Content }}
            </Markdown>
        </UPageSection>
    </UPage>
</template>

<script setup lang="ts">

definePageMeta({
    middleware: "auth"
});


//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------
const ViewState = ref<"Loading" | "Loaded" | "ErrorLoading">("Loading");
const Content = ref("");


//---------------------------------------------------------------------------
/**
 * Runs after component renders in the DOM
 */
//---------------------------------------------------------------------------
onMounted(async () =>
{

    LoadDeepRead();

});


//---------------------------------------------------------------------------
/**
 * Returns the markdown for the deep read
 */
//---------------------------------------------------------------------------
async function LoadDeepRead(): Promise<void>
{

    try
    {

        ViewState.value = "Loading";

        const data = await $fetch<string>("/api/DeepRead");

        Content.value = data;

        ViewState.value = "Loaded";

    }
    catch (exception)
    {

        ViewState.value = "ErrorLoading";

        console.log(exception);

    }

}

</script>