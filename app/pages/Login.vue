<template>
    <UPage>
        <UPageHero v-if="loggedIn && user" headline="Welcome!">
            <template #description>
                <UUser :name="user.Name" :description="user.Email" :avatar="{ src: user.Avatar }" orientation="vertical" :ui="{ root: 'items-center text-center' }" />
            </template>
            <template #footer>
                <UButton label="Log Out" class="mx-auto" @click="clear" />
            </template>
        </UPageHero>
        <UPageHero v-else headline="You are not logged in" class="min-h-screen flex flex-col justify-center">
            <template #description>
                <!-- Directing to our API route opens Google's OAuth window -->
                <UButton label="Login with Google" href="/api/auth/Google" external class="mx-auto" />
            </template>
        </UPageHero>
    </UPage>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------
const { loggedIn, user, clear } = useUserSession();
// const ViewState = ref<"Loading" | "Loaded" | "ErrorLoading">("Loading");

</script>