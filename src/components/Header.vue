<template>
  <header class="header">
    <img class="header__img" src="../assets/logo.png">
    <h1 class="header__h1">Grocery Store</h1>
  </header>
</template>

<style lang="scss">
  .header {
    padding: 2em;
    margin: 0 calc(50% - 590px);
    margin-bottom: 2em;
    background-color: lightgrey;
    display: flex;
    justify-content: flex-end;
    &__img {
      height: 4rem;
      margin-right: 1rem;
      margin-top: .6rem;
    }
    &__h1 {
      display: inline-block;
    }
  }
</style>
