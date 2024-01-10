<template>
  <div>
    <!-- <Preloader v-if="loading" /> -->
    <Header />
    <div class="wrapper">
      <template v-if="isHomePage">
        <transition name="fade" mode="out-in">
          <!-- <div class="flex gap-5"> -->

          <!-- <Sidebar /> -->
          <div class="content_pages content_home__page">
            <Nuxt />
          </div>
          <!-- </div> -->
        </transition>
      </template>
      <template v-else>
        <transition name="fade" mode="out-in">
          <div class="content_pages">
            <Nuxt />
          </div>
        </transition>
      </template>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/layout/app-header.vue";
import Sidebar from "@/components/sidebar/app-sidebar.vue";
import { ref } from "vue";

const loading = ref(true);

const isHomePage = () => this.$route.path === "/";
</script>

<style scoped>

</style>
