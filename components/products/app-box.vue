<!-- SignIn.vue -->
<template>
  <div>
    <div class="bg-[#F2F2F5]">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>
        <div>
          <NewUser/>
        </div>
        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a v-for="product in displayedProducts" :key="product.id" class="group">
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
            <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }} $</p>
            <p class="mt-1 text-lg font-medium text-gray-900">{{ product.category }} $</p>
            <nuxt-link :to="'/product/' + product.id">Перейти далі</nuxt-link>
          </a>
        </div>
      </div>
    </div>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-change="loadPage" />
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "./Pagination.vue";
import NewUser from "../userAuth/testUser.vue";

export default {
  components: {
    Pagination,
    NewUser
  },
  props: {
    selectedCategory: String,
    sortOrder: String,
  },
  data() {
    return {
      products: [],
      currentPage: 1,
      productsPerPage: 12,
    };
  },

  async mounted() {
    await this.loadProducts();
  },

  computed: {
    displayedProducts() {
      const startIdx = (this.currentPage - 1) * this.productsPerPage;
      const endIdx = startIdx + this.productsPerPage;
      return this.products.slice(startIdx, endIdx);
    },

    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
  },

  watch: {
    selectedCategory: {
      handler(newVal, oldVal) {
        this.loadProducts(); // Після зміни категорії перезавантажуємо продукти
      },
      immediate: true,
    },
    sortOrder: {
      handler(newVal, oldVal) {
        this.sortProducts();
      },
      immediate: true, // to trigger the watcher immediately on component load
    },
  },

  methods: {
   async loadProducts() {
  try {
    let url = `https://dummyjson.com/products`;

    if (this.selectedCategory) {
      url += `/category/${this.selectedCategory}`;
    }

    const response = await axios.get(url);
    this.products = response.data.products;

    this.sortProducts();

    console.log("Products:", this.products);
  } catch (error) {
    console.error("Произошла ошибка при загрузке товаров:", error);
  }
},


  sortProducts() {
  // Create a copy of the array before sorting
  const sortedProducts = [...this.products];
 if (this.sortOrder === 'default') {
  console.log(this.products)
  }
 else if (this.sortOrder === 'high-price') {
    sortedProducts.sort((a, b) => b.price - a.price);
    console.log(sortedProducts)
  } else if (this.sortOrder === 'low-price') {
    sortedProducts.sort((a, b) => a.price - b.price);
    console.log('2')
    console.log(sortedProducts)
  }

  // Update the displayed products
  this.products = sortedProducts;
},


    loadPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>
