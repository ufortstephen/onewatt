<template>
  <div class="">
    <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)">
      <AppHeader />
    </div>

    <div class="products">
      <div class="product__image px-3"></div>
      <!-- <productStepOne /> -->
      <productStepThree v-if="true" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
p,
a {
  font-size: small;
  color: #000;
}
</style>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 60% 1fr;
  min-height: 93vh;
}
.product__image {
  background: #c5c5c5;
  position: fixed;
  width: 60%;
  height: 100%;
  top: 3.8rem;
  background-image: url(~/assets/images/home-overlay.jpg);
  background-attachment: fixed;
  background-size: cover;
  padding-top: 4rem;
}
.product__details {
  position: absolute;
  left: 60%;
  margin-right: 10rem;
  top: 4rem;
}
.bg__one {
  background-image: url(~/assets/images/solar-panel.png);
  background-attachment: fixed;
  background-size: cover;
}
.btn-place__order {
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
}

label {
  color: #2c2926;
  font-size: medium;
}

.input-group input {
  border-right: none;
}
.nav-link {
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: small;
  color: #000;
  border: 1px solid #000;
  margin: 0px;
}
.battery .nav-link {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: small;
  color: #000;
  border: 1px solid #000;
  margin: 0px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #303030;
}
input:focus {
  box-shadow: none;
  border-color: #ced4da;
}

@media (max-width: 1520px) {
  .product__details {
    margin-right: 2rem;
  }
}
@media (max-width: 570px) {
  .products {
    grid-template-columns: 1fr;
  }
  .product__image {
    background: #c5c5c5;
    position: relative;
    width: 100%;
  }

  .product__details {
    position: relative;
    left: 0%;
    top: 4rem;
  }
  .product__details {
    margin-right: 0rem;
  }
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 700px;
    margin: 1.75rem auto;
  }
}
</style>