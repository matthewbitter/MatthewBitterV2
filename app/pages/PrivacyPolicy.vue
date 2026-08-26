<template>
    <UPage>
        <UPageSection>
            <Markdown>
                {{ Content }}
            </Markdown>
        </UPageSection>
    </UPage>
</template>

<script setup lang="ts">

const Content = `# Privacy Policy

**Last Updated: August 25, 2026**

This Privacy Policy explains how this personal website collects, uses, and protects your information when you visit this website or use the contact form.

### 1. Information I Collect
When you fill out and submit my contact form, I collect the following personal data:
*   **Name:** To address you properly in my communications.
*   **Email Address:** To reply to your message.
*   **Message Content:** To understand and address your inquiry.
*   **IP Address:** Collected automatically upon form submission for security purposes and spam prevention.

### 2. How I Process and Store Your Data
Your data is processed and stored using **Firebase** infrastructure.
*   **Firebase Authentication & Cloud Firestore/Realtime Database:** Your form submissions are securely transmitted and stored using Firebase's cloud services.
*   **Location:** Firebase may store this data on servers located outside of your home country (including the United States). By submitting the form, you consent to this transfer and storage.

### 3. Purpose of Collection
I only use your information to:
*   Respond directly to your inquiries.
*   Protect my website from malicious activity, abuse, and spam.

### 4. Data Retention
I store your contact form messages and associated IP addresses only for as long as necessary to fulfill the purpose of your communication or to maintain website security records. You may request the deletion of your data at any time.

### 5. Cookies and Local Storage
Because this application is built on **Nuxt 4** and integrated with **Firebase**, it may use essential technical cookies or local storage tokens.
*   **Purpose:** These are strictly necessary to maintain your session, secure the form submission, and prevent Cross-Site Request Forgery (CSRF) attacks.
*   **Control:** You can disable cookies in your browser settings, but doing so may cause the contact form to malfunction.

### 6. Your Rights
Depending on your location (such as the EU under GDPR, or various US state laws), you may have the right to:
*   Access the personal data I hold about you.
*   Request the correction or deletion of your personal data.
*   Object to or restrict the processing of your data.

To exercise these rights, please contact me directly through the website.`;

</script>