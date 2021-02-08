<template>
  <div class="wrap">
    <label class="lblRang" for="priceRangeMin">Min: </label>
    <input @input="$emit('on-input-min', $event.target.value)"
      type="text" v-model="minRange">
    <input @input="$emit('on-input-min', $event.target.value)"
      id="priceRangeMin" type="range" :min="min"
      :max="max" v-model="minRange">
    <br>
    <label class="lblRang" for="priceRangeMax">Max: </label>
    <input @input="$emit('on-input-max', $event.target.value)"
      type="text" v-model="maxRange">
    <input @input="$emit('on-input-max', $event.target.value)"
    id="priceRangeMax" type="range" :min="min"
      :max="max" v-model="maxRange">
  </div>
</template>

<script>
export default {
  name: 'FilterRange',
  data() {
    return {
      minRange: null,
      maxRange: null,
    };
  },
  props: ['min', 'max'],
  created() {
    this.minRange = this.min;
    this.maxRange = this.max;
  },
};
</script>

<style lang="scss" scoped>
input[type="text"] {
  width: 20%;
  margin-left: 1em;
}
input[type="range"] {
  width: 100%;
}

</style>
