import Stripe from "stripe";

export const StripeClient = new Stripe(

    useRuntimeConfig().StripeSecretKey,
    {

        apiVersion: "2026-08-26.dahlia",
        typescript: true

    }

);