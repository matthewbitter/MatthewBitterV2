<template>
    <UPageSection id="Games" title="Game Projects">
        <span>
            Moonstruck Games
        </span>
        <UPageGrid>
            <UPageCard title="Crystal Craft" description="A strategy game in which you solve various puzzles using different sized and shaped crystals." :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/CrystalCraft.jpg" width="348" height="257" alt="Crystal Craft" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="Wrap Attack" description="A game that brings together your favorites... bubble wrap, paint, and cute fuzzy animals." :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/WrapAttack.jpg" width="348" height="257" alt="Wrap Attack" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="Bone Bash" description="The Skeleton King has you trapped in his world and you must fight his army to make your way to freedom." :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/BoneBash.jpg" width="348" height="257" alt="Bone Bash" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="Light Run" description="Collect light to help illuminate the dungeon as you flee from the impending Darkness that is chasing you." :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/LightRun.jpg" width="348" height="257" alt="Light Run" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="Light Run 2" description="The Darkness is back and this time faster than ever! You must overcome obstacles and the growing speed of the Darkness through new environments to try and make it to the Light at the end." :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/LightRun2.jpg" width="348" height="257" alt="Light Run 2" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                    </div>
                </template>
            </UPageCard>
        </UPageGrid>
        <span>
            Global Game Jam
        </span>
        <UPageGrid>
            <UPageCard title="Tiki Tussle (2026)" description="You are a spirit trapped in a Tiki mask trying to escape the temple." :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/TikiTussle.png" width="348" height="257" alt="Tiki Tussle" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="Bloop Bloop (2025)" description="You must find your way to the shelter before you run out of oxygen, but beware of the Bloop!" :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/BloopBloop.png" width="348" height="257" alt="Bloop Bloop" fit="fill" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                    </div>
                </template>
            </UPageCard>
            <UPageCard title="Crazy Cluckers (2024)" description="A first person shooter where you are defending your self against egg shooting, bazooka wielding chickens." :ui="{ header: 'w-full' }">
                <template #header>
                    <NuxtImg src="/Images/CrazyCluckers.png" width="348" height="257" alt="Crazy Cluckers" fit="fill" class="bg-white" format="avif" quality="50" sizes="xs:100vw sm:100vw md:50vw lg:348px" />
                </template>
                <template #default>
                    <div class="flex flex-wrap gap-2 items-end">
                        <UBadge label="Unity (C#)" color="neutral" variant="subtle" icon="material-icon-theme:unity" />
                    </div>
                </template>
            </UPageCard>
        </UPageGrid>
    </UPageSection>
</template>