<template>
    <VuePDF :pdf="pdf" />
</template>

<script setup lang="ts">

import { VuePDF, usePDF } from "@tato30/vue-pdf";


definePageMeta({
    middleware: "auth"
});


const { pdf } = usePDF("/Matthew_Bitter_Senior_Full_Stack_Engineer_Resume.pdf");

</script>