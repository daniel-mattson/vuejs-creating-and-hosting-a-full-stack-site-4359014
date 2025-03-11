<template>
  <div class="product-container" v-for="product in cartItems" :key="product.id">
    <img :src="product.imageURL" :alt="product.name" class="product-image" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
    <button @click="$emit('remove-from-cart', product.id)" class="remove-button">Remove from Cart</button>
  </div>
</template>

<script>
  export default {
    name: "ShoppingCartList",
    props: [ 'cartItems' ],
    emits: [ 'remove-from-cart' ],
  };
</script>