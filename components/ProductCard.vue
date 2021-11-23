<template>
  <div class="product__card card">
    <div class="out__of__stock"><small>OUT OF STOCK</small></div>
    <img src="~assets/images/bg__two.png" alt="" />
    <div class="category__name py-3 pl-2">
      <h5 class="">Product Name</h5>
      <p class="mb-0">
        NGN 250,000 <strike class="small ml-3">NGN 500,000</strike>
      </p>
      <NuxtLink to="/products/product">
        <button class="view__products-btn">VIEW DETAILS</button>
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
p {
  color: #000;
}
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
  font-size: 20px;
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
  bottom: -5.8rem;
  width: 100%;
  padding: 1rem !important;
}
.card:hover .category__name p {
  margin: 0.5rem 0 !important;
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

.out__of__stock {
  position: absolute;
  background: #666360;
  color: #fff;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  left: 10px;
  top: 15px;
}
@media (max-width: 528px) {
  .card:hover .category__name {
    position: absolute;
    /* bottom: 0rem; */
    width: 100%;
    padding: 1rem !important;
  }
}
</style>