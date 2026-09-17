<template>
    <UPageSection id="HireMe" title="Hire Me">
        <UPageGrid>
            <UPageCard title="🚀 Senior Full-Stack Architect & Engineer">
                <template #description>
                    <Markdown>
                        {{ WhatIAm }}
                    </Markdown>
                </template>
            </UPageCard>
            <UPageCard title="🛠️ What I Bring to Your Team">
                <template #description>
                    <Markdown>
                        {{ WhatIBring }}
                    </Markdown>
                </template>
            </UPageCard>
            <UPageCard title="💼 Engagement Models">
                <template #description>
                    <Markdown>
                        {{ WhatIOffer }}
                    </Markdown>
                </template>
            </UPageCard>
        </UPageGrid>
    </UPageSection>
</template>

<script setup lang="ts">

const WhatIAm = `
With over 20 years of experience delivering production-grade enterprise software, I build high-performance web applications
that scale seamlessly. I combine deep engineering experience with modern, reactive tech stacks to help businesses launch
products faster and optimize their current infrastructure.

My specialized sweet spot is the modern web stack: Vue, Nuxt, TypeScript, and Firebase.
`;

const WhatIBring = `
- **Architecture First:** 20+ years of knowing how code decisions impact scaling, avoiding technical debt, and building robust, maintainable systems.
- **Frontend Performance:** Elite proficiency in Vue and Nuxt (SSR/SSG), state management (Pinia), and crafting pixel-perfect, highly responsive interfaces.
- **Type-Safe Full-Stack:** End-to-end TypeScript integration ensuring minimal runtime bugs, cleaner refactoring, and faster deployment cycles.
- **Serverless Backend Speed:** Expert-level implementation of the Firebase ecosystem (Firestore, Cloud Functions, Authentication, Hosting, and Realtime Database) for swift, cost-effective infrastructure.
`;

const WhatIOffer = `
I am available for selective high-impact opportunities that require deep technical leadership:
1.  **Fractional CTO / Technical Advisor:** Guiding technical architecture, mentoring mid-to-senior developers, and reviewing infrastructure strategy.
2.  **End-to-End Product Development:** Taking a greenfield project from a design concept to a fully deployed, high-speed MVPs using Nuxt and Firebase.
3.  **Performance Audit & Refactoring:** Diagnosing scaling bottlenecks in existing Vue/Nuxt apps or optimizing Firebase query structures to slash cloud spend.
`;

</script>