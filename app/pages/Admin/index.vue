<template>
    <UPage>
        <UPageHero title="Contact Form Submissions">
            <UProgress v-if="ViewState === 'Loading'" />
            <UPageGrid v-else>
                <UPageCard v-for="(submission, index) of ContactFormSubmissions" :key="index" :title="submission.Name" :description="submission.Email">
                    <template #default>
                        {{ submission.Message }}
                    </template>
                    <template #leading>
                        <UTooltip :text="submission.TimeStamp!.toString()">
                            <NuxtTime :datetime="submission.TimeStamp!" relative />
                        </UTooltip>
                    </template>
                </UPageCard>
            </UPageGrid>
        </UPageHero>
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
const ContactFormSubmissions = ref<ContactForm[]>([]);


//---------------------------------------------------------------------------
/**
 * Runs after component renders in the DOM
 */
//---------------------------------------------------------------------------
onMounted(async () =>
{

    await LoadContactFormSubmissions();

});


//---------------------------------------------------------------------------
/**
 * Returns the Contact Form Submissions
 */
//---------------------------------------------------------------------------
async function LoadContactFormSubmissions(): Promise<void>
{

    try
    {

        ViewState.value = "Loading";

        const data = await $fetch<ContactForm[]>("/api/ContactForm");

        ContactFormSubmissions.value = data;

        ViewState.value = "Loaded";

    }
    catch (exception)
    {

        ViewState.value = "ErrorLoading";

        console.log(exception);

    }

}

</script>