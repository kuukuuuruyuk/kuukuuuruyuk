<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import JudulKepala from "./components/JudulKepala.vue";
</script>

<template>
  <header>
    <div class="w-full mt-8">
      <div class="max-w-3xl mx-auto">
        <div class="rounded-xl border">
          <div class="pt-2 px-3">
            <JudulKepala title="Kuku Ruyuk" />
          </div>

          <div class="w-full pb-2 mt-4">
            <nav class="flex justify-center items-center space-x-4">
              <RouterLink
                class="text-2xl bg-gray-50 hover:text-blue-600 px-1 shadow rounded-lg"
                to="/"
                >Home</RouterLink
              >
              <RouterLink
                class="text-2xl bg-gray-50 hover:text-blue-600 px-1 shadow rounded-lg"
                to="/about"
                >About</RouterLink
              >
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>
