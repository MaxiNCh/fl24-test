<template>
  <header class="header">
    <img class="header__img" src="../assets/logo.png">
    <h1 class="header__h1">Grocery Store</h1>
  </header>
</template>

<style lang="scss">
  .header {
    padding: 2em calc(50% - 590px);
    display: flex;
    justify-content: flex-end;
    &__img {
      height: 4rem;
      margin-right: 1rem;
    }
    &__h1 {
      display: inline-block;
    }
  }
</style>
