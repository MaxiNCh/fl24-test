<template>
  <aside class="filter">
    <h4><font-awesome-icon icon="search"/> Search</h4>
    <input class="filter__search" :value="value"
      @input="$emit('input', $event.target.value)" type="text" name="search">
    <h4><font-awesome-icon icon="sliders-h"/> Filters</h4>
    <ul class="filter__ul">
      <li class="filter__li">
        <button class="filter__btn">Price</button>
        <FilterRange
          :min="0" :max="1000"
          @on-input-min="onPriceMin" @on-input-max="onPriceMax"
        ></FilterRange>
      </li>
      <li class="filter__li">
        <button class="filter__btn">Quantity</button>
        <FilterRange
          :min="0" :max="40"
          @on-input-min="onQtyMin" @on-input-max="onQtyMax"
        ></FilterRange>
      </li>
      <li class="filter__li">
        <button class="filter__btn">Category</button>
        <select>
          <option>Electronics</option>
          <option>Jewelery</option>
          <option>Men clothing</option>
          <option>Women clothing</option>
        </select>
      </li>
      <li class="filter__li">
        <button class="filter__btn">Sex</button>
        <input type="checkbox" id="male" name="male"><label for="male">Male</label>
        <br>
        <input type="checkbox" id="woman" name="woman"><label for="woman">Woman</label>
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
  },
  mounted() {
    console.log(this.filterRanges);
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
      border-bottom: 1px solid grey;
      padding-bottom: 1em;
      margin-top: 1em;
    }
    &__btn {
      display: block;
      margin-bottom: 1em;
    }
  }
</style>
