<template>
  <div>
    <div class="">
      <div
        id="heroCarousel"
        class="carousel slide"
        data-ride="carousel"
        :class="{ shortHero: this.$route.name !== 'index' }"
      >
        <ol class="carousel-indicators">
          <li data-target="#heroCarousel" data-slide-to="0" class="active"></li>
          <!-- <li data-target="#heroCarousel" data-slide-to="1"></li> -->
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active hero__bg bg__one">
            <div class="px-2 px-md-5 py-4">
              <AppHeader />
              <!-- <div class="hero__text text-center">
                <div class="align-self-center">
                  <h1 class="my-2">CLEAN ▪ POWER ▪ ELECTRICITY</h1>
                  <p class="muted__text"></p>
                  <p class="mt-5">
                    <a href="#products"
                      ><button class="button__white mr-2 mt-3 mt-md-0">
                        VIEW PRODUCTS
                      </button></a
                    >
                  </p>
                </div>
              </div> -->
            </div>
            <div
              class="text-center space-top"
              style="position: relative; top: -2rem"
            >
              <a href="#products"
                ><img src="~assets/images/caret_down.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container section px-3" id="products">
      <h4 class="mb-3 px-0 px-md-3 text-center text-md-left">Products</h4>
      <div class="products__container">
        <div class="product__card card">
          <!-- <div class="out__of__stock"><small>OUT OF STOCK</small></div> -->
          <img src="~assets/images/ss.png" alt="" />
          <div class="category__name py-3 pl-2">
            <h6 class="">Home 3</h6>

            <NuxtLink to="/shop/product">
              <button class="view__products-btn">MAKE RESERVATION</button>
            </NuxtLink>
          </div>
        </div>
        <div class="product__card card">
          <!-- <div class="out__of__stock"><small>OUT OF STOCK</small></div> -->
          <img src="~assets/images/ss.png" alt="" />
          <div class="category__name py-3 pl-2">
            <h6 class="">Home 5</h6>

            <NuxtLink to="/shop/product">
              <button class="view__products-btn">MAKE RESERVATION</button>
            </NuxtLink>
          </div>
        </div>
        <div class="product__card card">
          <!-- <div class="out__of__stock"><small>OUT OF STOCK</small></div> -->
          <img src="~assets/images/ss.png" alt="" />
          <div class="category__name py-3 pl-2">
            <h6 class="">Home 7</h6>

            <NuxtLink to="/shop/product">
              <button class="view__products-btn">MAKE RESERVATION</button>
            </NuxtLink>
          </div>
        </div>
        <div class="product__card card">
          <!-- <div class="out__of__stock"><small>OUT OF STOCK</small></div> -->
          <img src="~assets/images/ss.png" alt="" />
          <div class="category__name py-3 pl-2">
            <h6 class="">Home 10</h6>

            <NuxtLink to="/shop/product">
              <button class="view__products-btn">MAKE RESERVATION</button>
            </NuxtLink>
          </div>
        </div>
        <!-- <ProductCard v-for="x in 4" :key="x.id" /> -->
      </div>
    </div>

    <AppFooter class="mt-5" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Shop",
  data() {
    return {
      text: "VIEW ALL PRODUCTS",
    };
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["getComponent"]),
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
  /* font-size: 16px; */
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
  color: #2c2926;
  padding: 10px 35px;
  /* font-size: 17px; */
}

.products__container::-webkit-scrollbar {
  display: none !important;
}

@media (max-width: 528px) {
  .nav-pills .nav-link {
    padding: 6px 12px;
  }
  .nav__tabs {
    padding: 12px 12px 12px 12px;
  }
}

.hero__bg {
  min-height: max-content;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.473);
  background-position: center;
  color: #fff !important;
}

h1 {
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 3.5rem;
  font-weight: bolder;
}

.bg__one {
  background-image: url(~/assets/images/solar-panel.png);
  background-attachment: fixed;
  background-size: cover;
}
.bg__two {
  background-image: url(~/assets/images/cleanPower.jpg);
  background-color: rgba(0, 0, 0, 0.459);
}

.hero__text {
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 2rem 0; */
}

.muted__text {
  color: #bcbab7;
}

button {
  /* padding: 19.5px 60px; */
  width: 166px;
  height: 45px;
  background: transparent;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer !important;
}

.button__white {
  background-color: #fff;
}
.btn__border--white {
  border: 1px solid #fff;
  color: #fff;
}
img {
  cursor: pointer;
}
.carousel-item-next.carousel-item-left,
.carousel-item-prev.carousel-item-right {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.carousel-item-next,
.active.carousel-item-right {
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.carousel-item-prev,
.active.carousel-item-left {
  -webkit-transform: translate3d(0, 0%, 0);
  transform: translate3d(0, 0, 0);
}
.carousel-indicators li {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #efece9;
  opacity: 1;
}
.carousel-indicators {
  top: 40%;
  flex-direction: column;
  left: 4%;
  margin: 0;
  justify-content: revert;
  width: max-content;
}
.carousel-indicators .active {
  opacity: 1;
  width: 13px;
  height: 13px;
  background-color: #ff7e00;
}
.social__links img {
  width: 30px;
}

@media (max-width: 700px) {
  .carousel-indicators {
    top: 65%;
    display: none;
  }
  h1 {
    font-size: 2rem;
  }
  .muted__text {
    font-size: 1.2rem;
  }
}
@media (min-width: 700px) {
  .hero__text {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
p {
  color: #000;
  font-size: small;
}
.product__card img {
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
  bottom: -3.8rem;
  width: 100%;
  padding: 1rem !important;
}
.card:hover .category__name p {
  margin: 0.5rem 0 !important;
}

.card:hover .view__products-btn {
  position: relative;
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