<template>
  <div>
    <div class="flex gap-5 bg-[#F2F2F5]">
      <Sidebar @category-click="updateProducts" class="w-[30%]"/>
      <Products :selectedCategory="selectedCategory" />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/app-sidebar.vue";
import Products from "~/components/products/products.vue";

export default {
  name: 'IndexPage',
  components: {
    Products,
    Sidebar
  },
  data() {
    return {
      selectedCategory: null,
    };
  },
  methods: {
    updateProducts(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
