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
    await this.test();
    await this.test2();
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
    async test(){
          
      const options = {
        method: 'GET',
        url: 'https://text-similarity-calculator.p.rapidapi.com/stringcalculator.php',
        params: {
          ftext: ' один два три чотири',
          stext: 'шість сім вісам девять один'
        },
        headers: {
          'X-RapidAPI-Key': '5c15f9602dmshee78acc159c51b6p138180jsn968e3255fb1a',
          'X-RapidAPI-Host': 'text-similarity-calculator.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async test2(){

      const encodedParams = new URLSearchParams();
      encodedParams.set('q', 'Hello, world!');
      encodedParams.set('target', 'uk');
      encodedParams.set('source', 'en');

      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': '5c15f9602dmshee78acc159c51b6p138180jsn968e3255fb1a',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
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
