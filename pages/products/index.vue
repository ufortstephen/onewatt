<template>
  <div>
    <AppHero />
    <div class="container section px-3">
      <h4 class="mb-3 px-0 px-md-3 text-center text-md-left">New Products</h4>
      <div class="products__container">
        <ProductCard v-for="x in 7" :key="x.id" />
      </div>
    </div>
    <div class="container px-3">
      <h4 class="mb-3 px-0 px-md-3 text-center text-md-left">
        Popular Products
      </h4>
      <div class="products__container">
        <ProductCard v-for="x in 7" :key="x.id" />
      </div>
    </div>

    <AppFooter class="mt-5" />
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
  grid-gap: 1rem;
  padding: 16px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(260px, 1fr);
  overflow-x: scroll;
}

.products__container::-webkit-scrollbar {
  /* display: none; */
}

/* .products__container::-webkit-scrollbar {
  width: 12px;
}

.products__container::-webkit-scrollbar-track {
  -webkit-box-shadow: none;
  background: transparent;
  border-radius: 10px;
}

.products__container::-webkit-scrollbar-thumb {
  border-radius: 0px;
  height: 3px;
  width: 3px;
  -webkit-box-shadow: none;
  border-radius: 70px;
  background: #000;
} */
</style>