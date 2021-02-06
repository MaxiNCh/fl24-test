<template>
  <header class="header">
    <img class="header__img" src="../assets/logo.png">
    <h1 class="header__h1">Grocery Store</h1>
  </header>
</template>

<style lang="scss">
  .header {
    padding: 0 calc(50% - 590px);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &__img {
      height: 4rem;
      margin-right: 1rem;
    }
    &__h1 {
      display: inline-block;
    }
  }
</style>
