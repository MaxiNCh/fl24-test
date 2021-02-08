<template>
  <aside class="filter">
    <h4><font-awesome-icon icon="search"/> Search</h4>
    <input class="filter__search" :value="value"
      @input="$emit('input', $event.target.value)" type="text" name="search">
    <h4><font-awesome-icon icon="sliders-h"/> Filters</h4>
    <ul class="filter__ul">
      <li class="filter__li">
        <button @click="priceVisible = !priceVisible" class="filter__btn">
          Price<font-awesome-icon v-if="!priceVisible" icon="caret-down"/>
          <font-awesome-icon v-else icon="caret-up"/>
        </button>
        <FilterRange
          v-if="priceVisible" :min="0" :max="1000"
          @on-input-min="onPriceMin" @on-input-max="onPriceMax"
        ></FilterRange>
      </li>
      <li class="filter__li">
        <button @click="qtyVisible = !qtyVisible" class="filter__btn">
          Quantity<font-awesome-icon v-if="!qtyVisible" icon="caret-down"/>
          <font-awesome-icon v-else icon="caret-up"/>
        </button>
        <FilterRange
          v-if="qtyVisible" :min="0" :max="40"
          @on-input-min="onQtyMin" @on-input-max="onQtyMax"
        ></FilterRange>
      </li>
      <li class="filter__li">
        <button @click="categVisible = !categVisible" class="filter__btn">
          Category<font-awesome-icon v-if="!categVisible" icon="caret-down"/>
          <font-awesome-icon v-else icon="caret-up"/>
        </button>
        <select
          v-if="categVisible" @change="onChangeCategory"
          v-model="categories" name="categories" id="categories" multiple>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men clothing">Men clothing</option>
          <option value="women clothing">Women clothing</option>
        </select>
      </li>
      <li class="filter__li">
        <button @click="countryVisible = !countryVisible" class="filter__btn">
          Made in<font-awesome-icon v-if="!countryVisible" icon="caret-down"/>
          <font-awesome-icon v-else icon="caret-up"/>
        </button>
        <div v-if="countryVisible">
          <input @change="onChangeCountry" v-model="countries.Australia"
            type="checkbox" id="Australia" name="Australia">
          <label for="Australia">Australia</label>
          <br>
          <input @change="onChangeCountry" v-model="countries.China"
            type="checkbox" id="China" name="China">
          <label for="China">China</label>
          <br>
          <input @change="onChangeCountry" v-model="countries.Russia"
            type="checkbox" id="Russia" name="Russia">
          <label for="Russia">Russia</label>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script>
import FilterRange from './FilterRange.vue';

export default {
  name: 'Filters',
  components: {
    FilterRange,
  },
  data() {
    return {
      categories: [],
      countries: {
        Australia: false,
        China: false,
        Russia: false,
      },
      priceVisible: false,
      qtyVisible: false,
      categVisible: false,
      countryVisible: false,
    };
  },
  props: [
    'value',
  ],
  methods: {
    onPriceMax(value) {
      this.$emit('on-price-max', value);
    },
    onPriceMin(value) {
      this.$emit('on-price-min', value);
    },
    onQtyMax(value) {
      this.$emit('on-qty-max', value);
    },
    onQtyMin(value) {
      this.$emit('on-qty-min', value);
    },
    onChangeCategory() {
      this.$emit('filter-category', this.categories);
    },
    onChangeCountry() {
      this.$emit('filter-country', this.countries);
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss">
  .filter {
    min-height: 300px;
    grid-column-start: 1;
    padding-right: 2em;
    &>h4 {
      text-align: center;
    }
    &__search {
      margin-bottom: 1em;
      width: 100%;
    }
    &__ul {
      list-style-type: none;
      padding: 0;
    }
    &__li {
      // border: 1px solid grey;
      margin-bottom: 2em;
    }
    &__btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0 1em;
      margin-bottom: 1em;
      width: 100%;
      background-color: unset;
      border: none;
      font-size: 1em;
      font-weight: bolder;
      &:hover {
        cursor: pointer;
        color: darkgrey;
      }
      &:focus {
        outline: none;
      }
    }
    select {
      overflow: auto;
      height: 7em;
      width: 100%;
      font-size: .9em;
    }
  }
</style>
