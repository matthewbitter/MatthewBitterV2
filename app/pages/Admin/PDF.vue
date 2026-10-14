<template>
    <ClientOnly>
        <VuePDF :pdf="pdf" text-layer annotation-layer editor-layer :editor-type="editorType">
            <template #editors>
                <PDFFreeTextAnnotation color="#2196F3" :font-size="20" />
            </template>
        </VuePDF>
    </ClientOnly>
</template>

<script setup lang="ts">

import { VuePDF, usePDF, PDFFreeTextAnnotation } from "@tato30/vue-pdf";
import "@tato30/vue-pdf/style.css";


definePageMeta({
    middleware: "auth"
});

// editor-type '3' corresponds to the FreeText annotation editor
const editorType = ref(3);

const { pdf } = usePDF("/Matthew_Bitter_Senior_Full_Stack_Engineer_Resume.pdf");

</script>