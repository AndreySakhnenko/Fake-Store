<template>
  <div>
    <h1>Test test test</h1>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.title }} - Quantity: {{ item.quantity }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

// принимаем данные из родительского компонента
const props = defineProps(['cartItems']);
</script>
