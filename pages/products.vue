<template>
  <div>
    <h1 class="text-3xl font-bold underline text-red-500">
    Hello world!
  </h1>
  <div class="hover:break-before-column">

    <div v-for="category in categories" :key="category">{{ category }}</div>
  </div>
    <div v-for="product in products" :key="product.id" class="box1">
        <nuxt-link :to="'/product/' + product.id">{{ product.title }}</nuxt-link>
        <p>Category: {{ product.category }}</p>
        <p>Description: {{ product.description }}</p>
        <div class="product-img">
          <img :src="product.thumbnail" alt="Product Image" />
        </div>
        <p class="bg-gradient-to-r from-indigo-500">Rating: {{ product.rating.rate }}</p>
        <p>price: {{ product.price }}</p>
        <p>ID: {{ product.id }}</p>
      </div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductsPage',
  data() {
    return {
      products: [],
      categories: []
    };
  },
  async created() {
    await this.makeRequest(); 
    await this.categori();
  },
  methods: {
    async makeRequest() {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=100');
        this.products = response.data.products;
        console.log('Products:', this.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async categori() {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        this.categories = response.data;
        console.log('Categories:', this.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
  }
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
