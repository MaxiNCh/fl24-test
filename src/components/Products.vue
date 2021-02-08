<template>
  <section class="products">
    <Filters
      @on-price-min="minPrice = $event"
      @on-price-max="maxPrice = $event"
      @on-qty-min="minQty = $event"
      @on-qty-max="maxQty = $event"
      @filter-category="categories = $event"
      @filter-country="countries = $event"
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
      categories: [],
      countries: {},
    };
  },
  methods: {
    fetchProducts(url) {
      return fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    // Добавляю произвольное количество для каждого продукта и страну производителя,
    // т.к. изначально данных в API не было.
    addQty(fetchedProducts) {
      let q = 1;
      const newProducts = [];
      fetchedProducts.forEach((item) => {
        newProducts.push({ ...item, quantity: q, country: this.countryOfOrigin(item) });
        q += 2;
      });
      this.products = newProducts;
      return newProducts;
    },
    countryOfOrigin(product) {
      if (product.id % 3 === 1) {
        return 'Russia';
      // eslint-disable-next-line no-else-return
      } else if (product.id % 3 === 2) {
        return 'China';
      } else {
        return 'Australia';
      }
    },
    compareCountries(product, countries) {
      if (!countries.Australia && !countries.Russia && !countries.China) {
        return true;
      }
      if (countries[product.country]) {
        return true;
      // eslint-disable-next-line no-else-return
      } else {
        return false;
      }
    },
    compareCategories(product, categories) {
      if (!categories.length
        || (categories.length === 1 && categories[0] === '')) {
        return true;
      }
      for (let i = 0; i < categories.length; i += 1) {
        if (product.category === categories[i]) {
          return true;
        }
      }
      return false;
    },
  },
  computed: {
    filteredProducts() {
      const regex = new RegExp(this.search, 'i');
      return this.products.filter((product) => (regex.test(product.title)
        && product.price >= this.minPrice
        && product.price <= this.maxPrice
        && product.quantity >= this.minQty
        && product.quantity <= this.maxQty
        && this.compareCategories(product, this.categories)
        && this.compareCountries(product, this.countries)));
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
