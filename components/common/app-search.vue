<template>
    <div class="flex place-items-center">
        <div class="search pl-6" :class="{ 'active': isSearchActive }">
                <input v-if="isSearchActive" type="search" @input="handleInput"  class="border-2"/>
              </div>
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500" @click="toggleSearch">
                  <span class="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </a>
              </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const isSearchActive = ref(false);

const toggleSearch = () => {
  isSearchActive.value = !isSearchActive.value;
};

const handleInput = (event) => {
  console.log('search:')
  // Handle input logic if needed
};

</script>
<style scoped>
.search {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.search.active {
  max-height: 50px; /* Adjust the height as needed */
  opacity: 1;
}
</style>