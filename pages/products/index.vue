<template>
  <div>
    <AppHero />
    <div class="container section px-3">
      <h3 class="mb-3 text-center text-md-left">New Products</h3>
      <div class="products__container">
        <ProductCard v-for="x in 7" :key="x.id" />
      </div>
    </div>
    <div class="container section px-3">
      <h3 class="mb-3 text-center text-md-left">Popular Products</h3>
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
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  row-gap: 3rem;
}
</style>