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
          <li data-target="#heroCarousel" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active hero__bg bg__one">
            <div class="px-2 px-md-5 py-4">
              <AppHeader />
              <div class="hero__text text-center">
                <div class="align-self-center">
                  <h1 class="my-2">It’s not just gas, it’s how it works</h1>
                  <p class="muted__text">
                    It’s not just gas, it’s how it
                    <NuxtLink to="/" class="text-white">works.</NuxtLink>
                  </p>
                  <p class="mt-5">
                    <NuxtLink to="/shop"
                      ><button class="button__white mr-2 mt-3 mt-md-0">
                        SHOP NOW
                      </button></NuxtLink
                    >
                    <NuxtLink to="/shop"
                      ><button class="btn__border--white mr-2 mt-3 mt-md-0">
                        PRE ORDER
                      </button></NuxtLink
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="text-center" style="position: relative; top: -2rem">
              <a href="#categories"
                ><img src="~assets/images/caret_down.png" alt=""
              /></a>
            </div>
          </div>
          <div class="carousel-item hero__bg bg__two">
            <div class="px-2 px-md-5 py-4">
              <AppHeader />
              <div class="hero__text text-center">
                <div class="align-self-center">
                  <h1 class="my-2">Making power available.</h1>
                  <p class="muted__text">
                    View other features of this product
                    <NuxtLink to="/" class="text-white">here.</NuxtLink>
                  </p>
                  <p class="mt-5">
                    <NuxtLink to="/shop"
                      ><button class="button__white mr-2 mt-3 mt-md-0">
                        SHOP NOW
                      </button></NuxtLink
                    >
                    <NuxtLink to="/shop">
                      <button class="btn__border--white mr-2 mt-3 mt-md-0">
                        PRE ORDER
                      </button></NuxtLink
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="text-center mb-4"
              style="position: relative; top: -2rem"
            >
              <img src="~assets/images/caret_down.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section container" id="categories">
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
            >Product Categoreis</a
          >
        </li>
        <!-- <li class="nav-item" role="presentation">
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
        </li> -->
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="products__container section px-3">
            <ProductCategory v-for="x in 4" :key="x.id" />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="products__container section px-3">
            <ProductCategory v-for="x in 4" :key="x.id" />
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
  /* font-size: 16px; */
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
  color: #2c2926;
  padding: 10px 35px;
  /* font-size: 17px; */
}
.products__container {
  display: grid;

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

.hero__bg {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.473);
  background-position: center;
  color: #fff !important;
}

h1 {
  color: #fff;
}

.bg__one {
  /* background-image: url(~/assets/images/home__slide2.jpg); */
  background-image: url(~/assets/images/one.png);
}
.bg__two {
  background-image: url(~/assets/images/clean__power.jpg);
  background-color: rgba(0, 0, 0, 0.459);
}

.hero__text {
  height: 80vh;
  display: flex;

  align-items: center;
  justify-content: center;
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
}
</style>