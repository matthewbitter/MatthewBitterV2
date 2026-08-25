// auth.d.ts
declare module "#auth-utils"
{

    interface User
    {
        GoogleId?: string | number
        Name: string
        Email?: string
        Avatar?: string
    }

    // You can also extend the session structure here if needed
    interface UserSession
    {
        LastLoggedIn?: number
    }

}

export {};