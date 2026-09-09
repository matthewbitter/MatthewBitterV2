<template>
    <UPageSection id="Websites" title="Web Projects">
        <UPageGrid>
            <UPageCard title="MatthewBitter.com" description="My personal portfolio website to let you know more about me, a number of my projects, and my core skills. " :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/MatthewBitter.png" width="348" height="257" alt="Matthew Bitter" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <span ref="target" class="text-primary">
                        <template v-if="TotalCommits">
                            {{ TotalCommits.toLocaleString() }} total commits on GitHub
                        </template>
                    </span>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Vue" color="neutral" variant="subtle" icon="material-icon-theme:vue" />
                        <UBadge label="Nuxt" color="neutral" variant="subtle" icon="material-icon-theme:nuxt" />
                        <UBadge label="TypeScript" color="neutral" variant="subtle" icon="material-icon-theme:typescript" />
                        <UBadge label="Nuxt UI" color="neutral" variant="subtle" icon="material-icon-theme:nuxt" />
                        <UBadge label="Node.js" color="neutral" variant="subtle" icon="material-icon-theme:nodejs" />
                        <UBadge label="Firebase" color="neutral" variant="subtle" icon="material-icon-theme:firebase" />
                        <UBadge label="Pinia" color="neutral" variant="subtle" icon="logos:pinia" />
                        <UBadge label="Firestore" color="neutral" variant="subtle" icon="thesvg-color:firestore" />
                        <UBadge label="GitHub" color="neutral" variant="subtle" icon="mdi:github" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="Ignite" description="Ignite empowers individual achievement by recognition programs, incentives, and social driven recognition activities and rewarding your employees." :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/Ignite.png" width="348" height="257" alt="Ignite" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Vue" color="neutral" variant="subtle" icon="material-icon-theme:vue" />
                        <UBadge label="Nuxt" color="neutral" variant="subtle" icon="material-icon-theme:nuxt" />
                        <UBadge label="TypeScript" color="neutral" variant="subtle" icon="material-icon-theme:typescript" />
                        <UBadge label="Vuetify (Material Design)" variant="subtle" color="neutral" icon="devicon:vuetify" />
                        <UBadge label="Node.js" color="neutral" variant="subtle" icon="material-icon-theme:nodejs" />
                        <UBadge label="MSSQL" color="neutral" variant="subtle" icon="mdi:database" />
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                        <UBadge label="Azure" color="neutral" variant="subtle" icon="material-icon-theme:azure" />
                        <UBadge label="ASP.NET" color="neutral" variant="subtle" icon="devicon:dotnetcore" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="Moonstruck Games" description="Moonstruck Games is a Cincinnati based gaming company that is focused on mobile and social gaming.">
                <template #header>
                    <NuxtImg src="/Images/Moonstruck.png" width="348" height="257" alt="Moonstruck" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="MSSQL" color="neutral" variant="subtle" icon="mdi:database" />
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                        <UBadge label="ASP.NET" color="neutral" variant="subtle" icon="devicon:dotnetcore" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="SocialPoint" description="SocialPoint is a social media management tool for the regular social user that enhances their social media engagement on a daily basis.">
                <template #header>
                    <NuxtImg src="/Images/SocialPoint.jpg" width="348" height="257" alt="Social Point" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="MSSQL" color="neutral" variant="subtle" icon="mdi:database" />
                        <UBadge label="ASP.NET" color="neutral" variant="subtle" icon="devicon:dotnetcore" />
                    </div>
                </template>
            </UPageCard>
        </UPageGrid>
    </UPageSection>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------
const TotalCommits = ref(0);
const target = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;


//---------------------------------------------------------------------------
/**
 * Runs after component renders in the DOM
 */
//---------------------------------------------------------------------------
onMounted(() =>
{

    observer = new IntersectionObserver(([entry]) =>
    {

        if (entry?.isIntersecting)
        {

            LoadCommitTotal();

            if (target.value)
            {

                observer?.unobserve(target.value);

            }

        }

    }, { threshold: 0.1 });

    if (target.value)
    {

        observer.observe(target.value);

    }

});


//---------------------------------------------------------------------------
/**
 * Runs after component is removed from the DOM
 */
//---------------------------------------------------------------------------
onUnmounted(() =>
{

    observer?.disconnect();

});


//---------------------------------------------------------------------------
/**
 * Loads the total number of commits for the project.
 */
//---------------------------------------------------------------------------
async function LoadCommitTotal(): Promise<void>
{

    const response = await $fetch.raw("https://api.github.com/repos/matthewbitter/MatthewBitterV2/commits?per_page=1", { method: "HEAD" });
    const linkHeader = response.headers.get("link");

    if (linkHeader)
    {

        // Extract the page number associated with rel="last"
        const match = linkHeader.match(/<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="last"/);
        TotalCommits.value = match ? parseInt(match[1] as string, 10) : 1;

    }

}

</script>