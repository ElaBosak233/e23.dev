<template>
    <div class="min-h-screen min-w-full bg-cover bg-center bg-fixed bg-no-repeat bg-gray-100"
    style="background-image: url(/background.jpg);"
    >
        <NavBar />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>