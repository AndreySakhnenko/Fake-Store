<!-- SortProducts.vue -->
<template>
  <div>
    <select v-model="selectedSort" @change="applySort">
      <option value="default">Default</option>
      <option value="high-price">High Price</option>
      <option value="low-price">Low Price</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSort: 'default',
    };
  },
  methods: {
    applySort() {
      this.$emit('sort-changed', this.selectedSort);
    },
  },
};
</script>
