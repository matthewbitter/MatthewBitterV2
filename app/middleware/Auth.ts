// middleware/Auth.ts
export default defineNuxtRouteMiddleware(async () =>
{

    if (import.meta.client)
    {

        return;

    }

    const { loggedIn, user } = await useUserSession();
    const isValidUser = loggedIn.value && user.value?.GoogleId === useRuntimeConfig().PersonalGoogleId;

    if (!isValidUser)
    {

        return abortNavigation("Not Authorized");

    }

});