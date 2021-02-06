<template>
  <section class="products">
    <Filters></Filters>
    <Items :products="products"></Items>
  </section>
</template>

<script>
import Filters from './Filters.vue';
import Items from './Items.vue';

export default {
  name: 'Products',
  components: {
    Filters,
    Items,
  },
  props: ['products'],
};
</script>

<style lang="scss">
  .products {
    padding: 0 calc(50% - 590px);
    display: grid;
    grid-template-columns: 20% 80%;
  }
</style>
