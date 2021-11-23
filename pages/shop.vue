<template>
  <div>
    <AppHero />

    <div class="section container">
      <ul
        class="nav nav-pills mb-3 justify-content-center nav__tabs"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            >Products</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            >Accessories</a
          >
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="products__container section px-3">
            <ProductCategory v-for="x in 12" :key="x.id" />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="products__container section px-3">
            <ProductCategory v-for="x in 8" :key="x.id" />
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      text: "VIEW ALL PRODUCTS",
    };
  },
};
</script>

<style scoped>
.nav__tabs {
  width: max-content;
  margin: 0px auto;
  padding: 12px 17px 12px 17px;
  background: #f8f8f8;
  border-radius: 8px;
  /* gap: 1rem; */
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #2c2926;
  font-size: 16px;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
  color: #2c2926;
  padding: 10px 35px;
  font-size: 17px;
}
.products__container {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  row-gap: 3rem;
}

@media (max-width: 528px) {
  .nav-pills .nav-link {
    padding: 6px 12px;
  }
  .nav__tabs {
    padding: 12px 12px 12px 12px;
  }
}
</style>