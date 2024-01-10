<!-- Products.vue -->
<template>
  <div>
    <h1 class="text-3xl font-bold underline text-red-500">Products</h1>
    <SortProducts @sort-changed="sortChanged" />
    <Box :selectedCategory="selectedCategory" :sortOrder="sortOrder" />
    <div>
      <p>Category: {{ selectedCategory }}</p>
    </div>
  </div>
</template>

<script>
import SortProducts from "@/components/products/app-sortProducts.vue";
import Box from "~/components/products/app-box.vue";
export default {
  name: "ProductsPage",
  components: {
    Box,
    SortProducts,
  },
  props: {
    selectedCategory: String,
  },
  data() {
    return {
      sortOrder: 'default',
      // Ваші дані для продуктів, які потрібно відобразити
    };
  },
  methods: {
    sortChanged(newSortOrder) {
      this.sortOrder = newSortOrder;
    },
    // ... інші методи ...
  },
};
</script>

<style>
.product-img {
  max-width: 100px;
  width: 100%;
  height: 100px;
}
.product-img > img {
  width: 100%;
  height: 100%;
}
.box {
  border: 1px solid black;
  margin: 20px;
}
</style>
