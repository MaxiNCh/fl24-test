<template>
  <div id="app">
    <Header></Header>
    <Products></Products>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Products from './components/Products.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Products,
    Footer,
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%
}
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Roboto', sans-serif;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
}
</style>
