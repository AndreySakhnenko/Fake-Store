<template>
<div>
  <div class="ml-4 flow-root lg:ml-6" >
    <a href="#" class="group -m-2 flex items-center p-2" @click="openModal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-primary"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>

      <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        {{ cartItemCount }}
      </span>
      <span class="sr-only">items in cart, view bag</span>
    </a>
  </div>
  <ModalCart v-if="isModalOpenCart" :cartItems="cartItems"/>
</div>
</template>

<script>
import ModalCart from "./app-modalOrders.vue"
export default {
    comments:{
        ModalCart
    },
    data(){
        return{
            isModalOpenCart: false,
            cartItems: []
        }
    },
    methods: {
        openModal() {
            console.log('test')
            this.cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            this.isModalOpenCart = true;

        },
    },
  computed: {
    cartItemCount() {
      // Get the cart items from local storage
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

      // Calculate the total quantity of items in the cart
    //   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    //   return totalQuantity;


       // Calculate the total number of unique items in the cart
      const uniqueItemCount = cartItems.length;

      return uniqueItemCount;
    },
  },
};
</script>
