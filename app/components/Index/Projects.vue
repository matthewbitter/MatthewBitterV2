<template>
    <UPageSection id="Projects" title="Projects">
        <UPageGrid class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            <UPageCard title="MatthewBitter.com" description="My personal portfolio website to let you know more about me, a number of my projects, and my core skills. " :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/MatthewBitter.png" width="540" height="400" alt="Ignite" fit="fill" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Vue" color="neutral" variant="subtle" icon="material-icon-theme:vue" />
                        <UBadge label="Nuxt" color="neutral" variant="subtle" icon="material-icon-theme:nuxt" />
                        <UBadge label="TypeScript" color="neutral" variant="subtle" icon="material-icon-theme:typescript" />
                        <UBadge label="Nuxt UI" color="neutral" variant="subtle" icon="material-icon-theme:nuxt" />
                        <UBadge label="Node.js" color="neutral" variant="subtle" icon="material-icon-theme:nodejs" />
                        <UBadge label="Firebase" color="neutral" variant="subtle" icon="material-icon-theme:firebase" />
                        <UBadge label="Pinia" color="neutral" variant="subtle" icon="logos:pinia" />
                        <UBadge label="Firestore" color="neutral" variant="subtle" icon="material-icon-theme:firebase" />
                        <UBadge label="GitHub" color="neutral" variant="subtle" icon="mdi:github" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="Ignite" description="Ignite empowers individual achievement by recognition programs, incentives, and social driven recognition activities and rewarding your employees." :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/Ignite.png" width="540" height="400" alt="Ignite" />
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
                    <NuxtImg src="/Images/Moonstruck.png" width="540" height="400" alt="Moonstruck Games" />
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
                    <NuxtImg src="/Images/SocialPoint.jpg" width="540" height="400" alt="SocialPoint" />
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