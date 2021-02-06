<template>
  <div class="item">
    <img class="item__image" :src="product.image" alt="image">
    <h4>{{product.title}}</h4>
    <p>{{product.price}}</p>
    <p>{{product.quantity}}</p>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['product'],
};
</script>
<style lang="scss">
  .item {
    padding: 1em;
    &__image {
      height: 15em;
      width: 15em;
      background-size: contain;
    }
  }
</style>
