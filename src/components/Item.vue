<template>
  <div class="item">
    <img class="item__image" :src="product.image" alt="image">
    <p class="item__p">{{product.title}}</p>
      <div>
        <p class="item__p">{{product.price}} USD</p>
        <p class="item__p">Quantity in stock: {{product.quantity}}</p>
        <p class="item__p">Made in {{product.country}}</p>
      </div>
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
    background-color: lightgrey;
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 14em;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__image {
      border-radius: 5px 5px 0 0;
      height: 13.9em;
      width: 13.9em;
      background-size: contain;
      &+p {
        font-weight: bolder;
      }
    }
    &__p {
      font-size: .9em;
      margin: 1em 1em;
    }

  }
</style>
