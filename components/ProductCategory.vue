<template>
  <div class="product__card card">
    <img src="~assets/images/bg__two.png" alt="" />
    <div class="category__name py-3 pl-2">
      <h5 class="">Category Name</h5>
      <NuxtLink to="/products">
        <button class="view__products-btn">VIEW ALL PRODUCTS</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "text2"],
};
</script>

<style scoped>
img {
  width: 100%;
  height: 300px;
}
.card {
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 9px;

  height: max-content;
}
.category__name {
  background: #f8f8f8;
}
.product__card {
  border-radius: 6px;
}
h5 {
  font-size: 18px;
}

.view__products-btn {
  position: relative;

  background: #303030;
  font-size: 11px;
  text-align: center;
  color: #fff;
  border: none;
  outline: none;
  width: 80%;
  padding: 14px 20px 14px 20px;
  border-radius: 7px;
  display: none;
}
.card:hover .category__name {
  position: absolute;
  bottom: -4rem;
  width: 100%;
  padding: 1rem !important;
}
.card:hover .category__name h5 {
  margin-bottom: 1rem;
}

.card:hover .view__products-btn {
  position: relative;
  /* bottom: -3rem;
  margin-top: 1rem; */
  display: block;
}

a:hover {
  text-decoration: none;
}
@media (max-width: 528px) {
  .card:hover .category__name {
    position: absolute;
    bottom: 0rem;
    width: 100%;
    padding: 1rem !important;
  }
  img {
    height: 250px;
  }
}
</style>