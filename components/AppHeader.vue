<template>
  <div>
    <!-- <hero /> -->
    <nav
      class="navbar navbar-expand-lg navbar-light px-0 navbar_top"
      id="navbar_top"
    >
      <a class="navbar-brand" href="#"
        ><img src="~assets/images/orange__logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="">
          <img src="~assets/images/menu__icon.png" alt=""
        /></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <button
          class="navbar-toggler d-lg-none close_nav--btn"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="text-white">&times;</span>
        </button>

        <ul class="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
          <li
            class="nav-item"
            :class="this.$route.name == 'index' ? 'active' : ''"
          >
            <NuxtLink class="nav-link" to="/"
              >Home <span class="sr-only">(current)</span></NuxtLink
            >
          </li>

          <li
            class="nav-item"
            :class="this.$route.name == 'shop' ? 'active' : ''"
          >
            <NuxtLink class="nav-link" to="/shop">Shop</NuxtLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Energy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mobility</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Data & Payments</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Accessories</a>
          </li>
        </ul>
        <div class="header__icons" style="gap: 2rem">
          <span><img src="~assets/images/search_icon.png" alt="" /></span>
          <NuxtLink to="/cart" class="cart"
            ><img src="~assets/images/cart.png" alt="" class="mx-3"
          /></NuxtLink>
          <span><img src="~assets/images/avatar.png" alt="" /></span>
          <span
            ><img src="~assets/images/caret_down.png" alt="" class="mx-3"
          /></span>
        </div>
      </div>
    </nav>
    <!-- END nav -->
  </div>
</template>

<script>
// import hero from "./appHero";
export default {
  components: {
    // hero,
  },
  data() {
    return {};
  },

  methods: {
    gotoHomePage() {
      this.$router.push("/");
    },
    goToContactPage() {
      this.$router.push("/contact");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToEnagicPage() {
      this.$router.push("/enagic");
    },
    goToBenefitsPage() {
      this.$router.push("/benefits");
    },
  },
};
</script>

<style scoped>
button:focus {
  outline: none;
  border: none;
}
img {
  /* width: 20.04px; */
  cursor: pointer;
}
.cart {
  position: relative;
}

.cart::after {
  content: "";
  text-align: center;
  font-size: xx-small;
  padding-top: 0.15rem;
  position: absolute;
  right: 9px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: orange;
  top: -5px;
  color: #fff;
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: transparent;
}
.close_nav--btn {
  position: absolute;
  top: 0.4rem;
  right: 1rem;
  font-size: larger;
}
</style>