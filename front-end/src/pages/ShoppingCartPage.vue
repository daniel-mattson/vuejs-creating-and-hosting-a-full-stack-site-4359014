<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList @remove-from-cart="removeFromCart($event)" :cartItems="cartItems" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-else>
    Your cart is empty
  </div>
    
</template>

<script>
  import ShoppingCartList from '@/components/ShoppingCartList.vue';
  import axios from 'axios';

  export default {
    name: "ShoppingCartPage",
    props: [ 'user' ],
    data() {
      return {
        cartItems: [],
      };
    },
    watch: {
      async user() {
        this.updateCart();
      }
    },
    components: {
      ShoppingCartList,
    },
    async created() {
      this.updateCart();
    },
    methods: {
      async updateCart() {
        if (this.user?.uid) {
          const response = await axios.get(`/api/users/${this.user.uid}/cart`);
          this.cartItems = response.data;
        }
      },
      async removeFromCart(productId) {
        const response = await axios.delete(`/api/users/${this.user.uid}/cart/${productId}`);
        this.cartItems = response.data;
      }
    }
  };
</script>