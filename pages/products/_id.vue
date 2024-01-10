<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>Category: {{ product.category }}</p>
    <p>Description: {{ product.description }}</p>
    <div class="product-img-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
      <img class="product-img" :src="product.thumbnail" alt="Product Image">
    </div>
    <p class="bg-gradient-to-r from-indigo-500">Rating: {{ product.rating.rate }}</p>
    <p>ID: {{ product.id }}</p>
    <button @click="addToCart">Добавити в корзину</button>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      container: null,
      img: null,
    };
  },
  methods: {
    handleMouseMove(e) {
      if (this.container && this.img) {
        const x = e.clientX - this.container.offsetLeft;
        const y = e.clientY - this.container.offsetTop;
        this.img.style.transformOrigin = `${x}px ${y}px`;
        this.img.style.transform = 'scale(2)';
      }
    },
    handleMouseLeave() {
      if (this.img) {
        this.img.style.transformOrigin = 'center';
        this.img.style.transform = 'scale(1)';
      }
    },
    addToCart() {

      const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

      const existingProduct = existingCartItems.find(item => item.id === this.product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        existingCartItems.push({ id: this.product.id, title: this.product.title, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(existingCartItems));


    },
  },
  async asyncData({ params }) {
    const productId = params.id;

    try {
      const response = await axios.get(`https://dummyjson.com/products/${productId}`);
      const product = response.data;
      return { product };
    } catch (error) {
      console.error('Помилка завантаження даних про продукт:', error);
      return { product: null };
    }
  },
  mounted() {
    this.container = this.$refs.container;
    this.img = this.$refs.container.querySelector('.product-img');
  },
};
</script>

<style>
.product-img-container {
  height: 500px;
  width: 500px;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid;
}

.product-img-container > img {
  transform-origin: center;
  object-fit: contain;
  height: 100%;
  width: 100%;
  max-width: 100%;
}
</style>
