<template>
  <div id="app">
    <Header></Header>
    <Products :isLoading="isLoading" :products="products"></Products>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Products from './components/Products.vue';

export default {
  name: 'App',
  components: {
    Header,
    Products,
  },
  data: () => ({
    products: [],
    isLoading: false,
  }),
  methods: {
    // Добавляю произвольное количество для каждого продукта,
    // т.к. изначально в JSON из API нет количества.
    addQty(fetchedProducts) {
      let q = 1;
      const newProducts = [];
      fetchedProducts.forEach((item) => {
        newProducts.push({ ...item, quantity: q });
        q += 2;
      });
      this.products = newProducts;
    },
  },
  beforeCreate() {
    this.isLoading = true;
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        this.addQty(data);
        this.isLoading = false;
      });
  },
  mounted() {
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
}
</style>
