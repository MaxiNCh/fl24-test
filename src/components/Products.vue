<template>
  <section class="products">
    <Filters
      @on-price-min="minPrice = $event"
      @on-price-max="maxPrice = $event"
      @on-qty-min="minQty = $event"
      @on-qty-max="maxQty = $event"
      v-model="search">
    </Filters>
    <Items :products="filteredProducts"></Items>
    {{search}}
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
  data() {
    return {
      search: '',
      products: [],
      minPrice: 0,
      maxPrice: 1000,
      minQty: 0,
      maxQty: 40,
    };
  },
  methods: {
    fetchProducts(url) {
      return fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    // Добавляю произвольное количество для каждого продукта,
    // т.к. изначально в JSON из беслптаного API нет количества.
    addQty(fetchedProducts) {
      let q = 1;
      const newProducts = [];
      fetchedProducts.forEach((item) => {
        newProducts.push({ ...item, quantity: q });
        q += 2;
      });
      this.products = newProducts;
      return newProducts;
    },
  },
  computed: {
    filteredProducts() {
      const regex = new RegExp(this.search, 'i');
      return this.products.filter((product) => (regex.test(product.title)
        && product.price >= this.minPrice
        && product.price <= this.maxPrice
        && product.quantity >= this.minQty
        && product.quantity <= this.maxQty));
    },
  },
  created() {
    this.fetchProducts('https://fakestoreapi.com/products')
      .then((data) => this.addQty(data))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss">
  .products {
    padding: 0 calc(50% - 590px);
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
</style>
