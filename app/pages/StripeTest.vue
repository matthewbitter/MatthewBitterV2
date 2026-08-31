<template>
    <UPage>
        <UButton label="Pay with Stripe" :href="StripeCheckoutUrl" />
    </UPage>
</template>

<script setup lang="ts">

const response = await $fetch("/api/Stripe/Checkout", { method: "POST", body: { PriceId: "price_1UABivAaw1eYdh3W9lYQzUFd" } });

const StripeCheckoutUrl = response.url!;

console.log(response);

</script>