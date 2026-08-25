export default defineOAuthGoogleEventHandler({

    config: {
        // Optional: Request additional profile details if needed
        scope: ["openid", "email", "profile"]
    },

    async onSuccess(event, { user })
    {

        console.log("user.sub", user.sub);

        // Authenticate and save the session payload
        await setUserSession(event, {
            user: {
                GoogleId: user.sub,
                Email: user.email,
                Name: user.name,
                Avatar: user.picture
            },
            LastLoggedIn: Date.now()
        });

        // Redirect the user back to the home page or dashboard
        return sendRedirect(event, "/");

    },

    onError(event, error)
    {

        console.error("Google OAuth Error:", error);
        return sendRedirect(event, "/?error=login_failed");

    }

});