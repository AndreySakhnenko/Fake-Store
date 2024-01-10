<!-- app-sidebar.vue -->
<template>
  <aside class="sidebar bg-black">
    <nav class="text-center">
      <h2 class="text-2xl">Categories:</h2>
      <ul class="text-bgColor capitalize text-lg cursor-pointer">
        <li v-for="category in categories" :key="category">
          <a @click="handleCategoryClick(category)">{{ category }}</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppSidebar',
  data() {
    return {
      categories: []
    };
  },
  async created() {
    await this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        this.categories = response.data;
        console.log('Categories:', this.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    handleCategoryClick(category) {
      this.$emit('category-click', category);
    },
  }
};
</script>
