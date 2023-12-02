<template>
  <div class="">
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <h2 class="sr-only">Products</h2>

        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a
            v-for="product in displayedProducts"
            :key="product.id"
            class="group"
          >
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            >
              <img
                :src="product.thumbnail"
                alt="Product Image"
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{{ product.title }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ product.price }} $
            </p>
            <nuxt-link :to="'/product/' + product.id">Перейти далі</nuxt-link>
          </a>
        </div>
      </div>
    </div>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-change="loadPage"
    />
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "./Pagination.vue"; // Импортируйте компонент пагинации
export default {
  components: {
    Pagination, // Зарегистрируйте компонент пагинации для использования
  },
  data() {
    return {
      products: [], // Список всех товаров
      currentPage: 1, // Текущая страница
      productsPerPage: 12, // Количество товаров на странице
    };
  },

  async mounted() {
    await this.loadProducts();
  },

  computed: {
    // Вычисляемые свойства для отображения товаров на текущей странице
    displayedProducts() {
      const startIdx = (this.currentPage - 1) * this.productsPerPage;
      const endIdx = startIdx + this.productsPerPage;
      return this.products.slice(startIdx, endIdx);
    },

    // Вычисляемое свойство для общего количества страниц
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
  },

  methods: {
    async loadProducts() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=100&select=title,price,thumbnail,rating,category`
        );
        this.products = response.data.products;
        console.log(response.data);
        console.log("Products:", this.products);
      } catch (error) {
        console.error("Произошла ошибка при загрузке товаров:", error);
      }
    },

    loadPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>
