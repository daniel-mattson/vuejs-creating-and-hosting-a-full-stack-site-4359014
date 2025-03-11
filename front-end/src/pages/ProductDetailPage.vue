<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageURL" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button 
        v-if="user"
        :disabled="isInCart"
        @click="addToCart" 
        class="add-to-cart"
        v-text="buttonText"
      />
      <button 
        v-else 
        class="sign-in" 
        @click="signIn"
      >
        Sign in to add to cart
      </button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
  import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
  import axios from 'axios';
  import NotFoundPage from './NotFoundPage.vue';

  export default {
    name: "ProductDetailPage",
    props: [ 'user' ],
    components: {
      NotFoundPage,
    },
    data() {
      return {
        productId: this.$route.params.productId,
        product: {},
        isInCart: false,
      }
    },
    computed: {
      buttonText() {
        return this.isInCart ? 'Already in cart' : 'Add to cart';
      }
    },
    watch: {
      async user() {
        this.updateIsInCart();
      }
    },
    methods: {
      async addToCart() {
        await axios.post(`/api/users/${this.user.uid}/cart`, { id: this.productId });
        alert(`${this.product.name ?? 'Product'} added to cart`);

        this.updateIsInCart();
      },
      async updateIsInCart() {
        if (this.user?.uid) {
          const cartResponse = await axios.get(`/api/users/${this.user.uid}/cart/${this.productId}`);
          this.isInCart = cartResponse.data;
        }
      },
      async signIn() {
        const email = prompt('Enter your email to sign in:');
        const auth = getAuth();
        const actionCodeSettings = {
          url: `https://full-stack-vue-deployment-dm.onrender.com/products/${this.productId}`,
          handleCodeInApp: true,
        };
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        alert('A log in link was sent to the email you provided');
        window.localStorage.setItem('emailForSignIn', email);
      }
    },
    async created() {
      const auth = getAuth();
      if (isSignInWithEmailLink(auth, window.location.href)) {
        const email = window.localStorage.getItem('emailForSignIn');
        await signInWithEmailLink(auth, email, window.location.href);
        alert('Successfully signed in!');
        window.localStorage.removeItem('emailForSignIn')
      }

      const productResponse = await axios.get(`/api/products/${this.productId}`);
      this.product = productResponse.data;

      this.updateIsInCart();
    },
  };
</script>

<style>
  .add-to-cart:disabled {
    background-color: #888;
    cursor: default;
  }
</style>