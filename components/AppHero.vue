<template>
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
        <!-- <li data-target="#heroCarousel" data-slide-to="2"></li>
        <li data-target="#heroCarousel" data-slide-to="3"></li> -->
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active hero__bg bg__one">
          <div class="px-2 px-md-5 py-4">
            <AppHeader />
            <div class="hero__text text-center">
              <div class="align-self-center">
                <h1 class="my-2">
                  CONSUMER
                  <span style="color: #ff7e00" class="d-none d-md-inline">
                    ▪</span
                  >
                  ENERGY
                  <span style="color: #ff7e00" class="d-none d-md-inline">
                    ▪</span
                  >
                  FINANCE
                </h1>
                <p class="muted__text">
                  We build remarkable digital product experience that deliver
                  smarter lifestyle, home, business and cities.
                </p>
                <p class="mt-5" v-if="this.$route.name == 'index'">
                  <NuxtLink to="/shop"
                    ><button class="button__white mr-2 mt-3 mt-md-0">
                      SHOP NOW
                    </button></NuxtLink
                  >
                  <NuxtLink to="/shop"
                    ><button class="btn__border--white mr-2 mt-3 mt-md-0">
                      JOIN US
                    </button></NuxtLink
                  >
                </p>
              </div>
            </div>
          </div>
          <div
            class="text-center"
            v-if="this.$route.name !== 'index'"
            style="position: relative; top: -2rem"
          >
            <img src="~assets/images/caret_down.png" alt="" />
          </div>
          <div
            v-else
            class="row px-2 px-md-5 py-3"
            style="position: absolute; width: 100%; bottom: 0"
          >
            <div class="col-md-6 text-center text-md-left">
              <NuxtLink to="/" class="text-white">Terms of use</NuxtLink>
              <NuxtLink to="/" class="text-white mx-3">Contact us</NuxtLink>
              <NuxtLink to="/" class="text-white">FAQ</NuxtLink>
            </div>
            <div
              class="
                col-md-6
                text-center
                mt-2 mt-md-0
                text-md-right
                social__links
                pr-0
              "
            >
              <img src="~assets/images/fb__icon.png" alt="" />
              <img src="~assets/images/wa__icon.png" alt="" />
              <img src="~assets/images/twitter__icon.png" alt="" />
              <img src="~assets/images/ig__icon.png" alt="" />
            </div>
          </div>
        </div>
        <div class="carousel-item hero__bg bg__two">
          <div class="px-2 px-md-5 py-4">
            <AppHeader />
            <div class="hero__text text-center">
              <div class="align-self-center">
                <h1 class="my-2">
                  CONSUMER <span style="color: #ff7e00"> ▪ </span> ENERGY
                  <span style="color: #ff7e00"> ▪</span> FINANCE.
                </h1>
                <p class="muted__text">
                  We build remarkable digital product experience that deliver
                  smarter lifestyle, home, business and cities.
                </p>
                <p class="mt-5" v-if="this.$route.name == 'index'">
                  <NuxtLink to="/shop"
                    ><button class="button__white mr-2 mt-3 mt-md-0">
                      SHOP NOW
                    </button></NuxtLink
                  >
                  <NuxtLink to="/shop">
                    <button class="btn__border--white mr-2 mt-3 mt-md-0">
                      JOIN US
                    </button></NuxtLink
                  >
                </p>
              </div>
            </div>
          </div>
          <div
            v-if="this.$route.name !== 'index'"
            class="text-center mb-4"
            style="position: relative; top: -2rem"
          >
            <img src="~assets/images/caret_down.png" alt="" />
          </div>
          <div
            v-else
            class="row px-2 px-md-5 py-3"
            style="position: absolute; width: 100%; bottom: 0"
          >
            <div class="col-md-6 text-center text-md-left">
              <NuxtLink to="/" class="text-white">Terms of use</NuxtLink>
              <NuxtLink to="/" class="text-white mx-3">Contact us</NuxtLink>
              <NuxtLink to="/" class="text-white">FAQ</NuxtLink>
            </div>
            <div
              class="
                col-md-6
                text-center
                mt-2 mt-md-0
                text-md-right
                social__links
                pr-0
              "
            >
              <img src="~assets/images/fb__icon.png" alt="" />
              <img src="~assets/images/wa__icon.png" alt="" />
              <img src="~assets/images/twitter__icon.png" alt="" />
              <img src="~assets/images/ig__icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    check() {
      alert(99);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
.shortHero {
  /* max-height: 350px; */
  overflow: hidden;
}

/* @media (min-width: 1640px) {
  .shortHero {
    max-height: 45vh;
  }
} */
</style>

<style scoped>
.hero__bg {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
  background-position: center;
  color: #fff !important;
}

h1 {
  font-family: "Open Sans", sans-serif;
  font-size: 4rem;
  font-weight: bolder;
  color: #fff;
}

p.text-muted {
  font-size: 1rem;
}

.bg__one {
  /* background-image: url(~/assets/images/lp1.jpg); */
  background-image: url(~/assets/images/home11.png);
}

.bg__two {
  /* background-image: url(~/assets/images/lp2.jpg); */
  background-image: url(~/assets/images/home22.jpg);
  background-color: rgba(0, 0, 0, 0.59);
}
.bg__three {
  background-image: url(~/assets/images/bg__three.png);
}
.bg__four {
  background-image: url(~/assets/images/bg__four.png);
}

.hero__text {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.muted__text {
  color: #bcbab7;
  font-size: 1.3rem;
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
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
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
</style>