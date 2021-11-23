<template>
  <div>
    <AppHero />
    <div class="container section px-3">
      <h4 class="mb-3 px-0 px-md-3 text-center text-md-left">New Products</h4>
      <div class="products__container">
        <ProductCard v-for="x in 7" :key="x.id" />
      </div>
    </div>
    <div class="container section px-3">
      <h4 class="mb-3 px-0 px-md-3 text-center text-md-left">
        Popular Products
      </h4>
      <div class="products__container">
        <ProductCard v-for="x in 7" :key="x.id" />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {};
  },
};
</script>

<style scoped>
.products__container {
  /* display: grid;
  
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  row-gap: 3rem; */
  display: grid;
  grid-gap: 1rem;
  padding: 16px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(260px, 1fr);
  overflow-x: auto;
}
</style>