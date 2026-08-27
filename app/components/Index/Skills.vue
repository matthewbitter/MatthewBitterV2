<template>
    <UPageSection id="Skills" title="Skills">
        <UInput v-model.trim="SkillSearch" icon="i-lucide-search" placeholder="Search" size="lg" class="w-full" />
        <UPageGrid>
            <template v-for="(skill, index) of FilteredSkills" :key="index">
                <component :is="skill.Component" v-if="skill.Component" />
                <UPageCard v-else :title="skill.Name" :icon="(typeof skill.Icon === 'function') ? skill.Icon() : skill.Icon" :description="skill.Description" :to="skill.Url" target="_blank" />
            </template>
        </UPageGrid>
    </UPageSection>
</template>

<script setup lang="ts">

//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import type { ConcreteComponent } from "vue";


//---------------------------------------------------------------------------
// Properties
//---------------------------------------------------------------------------
type SkillType = { Name?: string, Description?: string, Url?: string, Icon?: string | (() => string), Score: number, Component?: string | ConcreteComponent };
const IndexSkillPinia = resolveComponent("Index-Skill-Pinia");
const SkillSearch = ref("");
const FilteredSkills = computed(() => Skills.filter(skill => skill.Name?.toLowerCase().includes(SkillSearch.value.toLowerCase()) || skill.Description?.toLowerCase().includes(SkillSearch.value.toLowerCase())));
const Skills = reactive<SkillType[]>([]);


const skills: SkillType[] = [
    {
        Name: "Nuxt",
        Description: "Full-stack web framework built on top of Vue",
        Url: "https://nuxt.com",
        Icon: "material-icon-theme:nuxt",
        Score: 100
    },
    {
        Name: "Vue",
        Description: "Progressive JavaScript framework for building interactive front-end user interfaces and web applications",
        Url: "https://vuejs.org/",
        Icon: "material-icon-theme:vue",
        Score: 100
    },
    {
        Name: "TypeScript",
        Description: "Typed superset of JavaScript for scalable applications",
        Url: "https://www.typescriptlang.org",
        Icon: "material-icon-theme:typescript",
        Score: 100
    },
    {
        Name: "Vuetify",
        Description: "UI component library for Vue using Material Design rules",
        Url: "https://vuetifyjs.com/en",
        Icon: "devicon:vuetify",
        Score: 0
    },
    {
        Name: "Nuxt UI",
        Description: "UI component library for Vue using Tailwind CSS",
        Url: "https://ui.nuxt.com",
        Icon: "material-icon-theme:nuxt",
        Score: 0
    },
    markRaw({
        Name: "Pinia",
        Description: "The official state management library for Vue.js",
        Component: IndexSkillPinia,
        Score: 0
    }),
    {
        Name: "Firebase",
        Description: "Platform for building mobile and web applications",
        Url: "https://firebase.google.com",
        Icon: "material-icon-theme:firebase",
        Score: 0
    },
    {
        Name: "Azure",
        Description: "Public cloud computing platform",
        Url: "https://azure.microsoft.com/en-us",
        Icon: "material-icon-theme:azure",
        Score: 0
    },
    {
        Name: "Node.js",
        Description: "JavaScript runtime for building scalable network applications",
        Url: "https://nodejs.org/en",
        Icon: "material-icon-theme:nodejs",
        Score: 0
    },
    {
        Name: "Unity",
        Description: "Cross-platform software engine used to build 2D and 3D video games, real-time simulations, and interactive experiences",
        Url: "https://unity.com/",
        Icon: "material-icon-theme:unity",
        Score: 0
    },
    {
        Name: "C#",
        Description: "A modern, object-oriented programming language",
        Url: "https://dotnet.microsoft.com/en-us/languages/csharp",
        Icon: "material-icon-theme:csharp",
        Score: 0
    },
    {
        Name: "ASP.NET",
        Description: "Server-side web application framework",
        Url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
        Icon: "devicon:dotnetcore",
        Score: 0
    },
    {
        Name: "GitHub",
        Description: "Code hosting platform for version control and collaboration",
        Url: "https://github.com",
        Icon: "mdi:github",
        Score: 0
    },
    {
        Name: "Firestore",
        Description: "A fully managed, serverless NoSQL document database to store, sync, and query data",
        Url: "https://firebase.google.com/docs/firestore",
        Icon: "thesvg-color:firestore",
        Score: 0
    },
    {
        Name: "reCAPTCHA",
        Description: "Protects your site from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart",
        Url: "https://developers.google.com/recaptcha",
        Icon: "logos:recaptcha",
        Score: 0
    },
    {
        Name: "Resend",
        Description: "A modern email delivery platform and API built specifically for developers",
        Url: "https://resend.com/",
        Icon: "thesvg-color:resend-dark",
        Score: 0
    },
    {
        Name: "MSSQL",
        Description: "A relational database management system",
        Url: "https://www.microsoft.com/en-us/sql-server",
        Icon: "mdi:database",
        Score: 0
    },
    {
        Name: "Cloudflare",
        Description: "A global cloud platform that provides security, speed, and reliability services for the web",
        Url: "https://www.cloudflare.com/",
        Icon: "devicon:cloudflare",
        Score: 0
    },
    {
        Name: "Google Cloud Platform (GCP)",
        Description: "A suite of cloud computing services that lets you build, run, and scale applications",
        Url: "https://cloud.google.com/",
        Icon: "material-icon-theme:gcp",
        Score: 0
    }
];

skills.sort((skillA, skillB) => skillB.Score - skillA.Score);

Skills.push(...skills);


//---------------------------------------------------------------------------
/**
 * Runs after component renders in the DOM
 */
//---------------------------------------------------------------------------
onMounted(() =>
{

    const resendSkill = Skills.find(skill => skill.Name === "Resend");

    if (!resendSkill)
    {

        return;

    }

    resendSkill.Icon = () => `thesvg-color:resend-${useColorMode().value}`;

});

</script>