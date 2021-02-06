<template>
  <div class="items">
    <Item v-for="product in products" :key="product.id" :product="product"></Item>
    <!-- {{products}} -->
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'Items',
  components: {
    Item,
  },
  props: ['products'],
};
</script>

<style lang="scss">
  .items {
    background-color: lightblue;
    min-height: 300px;
    grid-column-start: 2;
    display: flex;
    flex-wrap: wrap;
  }
</style>
