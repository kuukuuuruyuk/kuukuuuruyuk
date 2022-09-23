<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
</script>

<template>
  <div class="py-6">
    <WelcomeItem>
      <template #title>
        <h1 class="text-3xl">Welcome</h1>
      </template>
      <p class="text-lg">Halo selamat datang</p>
    </WelcomeItem>
  </div>
</template>
