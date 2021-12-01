<template>
  <div>
    <div class="product__details p-3">
      <h3>Solar</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae libero
        harum, nihil quod porro neque sequi ipsa maxime labore?
      </p>

      <div class="form-group mt-3">
        <label for="">Home address</label>
        <input
          type="email"
          class="form-control"
          name=""
          id=""
          aria-describedby="emailHelpId"
          placeholder="31, Sanusi Street, Idumota Lagos"
        />
      </div>
      <div class="form-group">
        <label for="">Average electric bill</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="$200"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append" style="background: transparent">
            <span
              class="input-group-text"
              style="background: transparent"
              id="basic-addon2"
              ><small>/ Month</small></span
            >
          </div>
        </div>
      </div>

      <div class="text-info mb-4">My home is new or being built</div>

      <button
        class="btn-place__order w-100"
        style="border-radius: 8px !important"
      >
        <small>NEXT</small>
      </button>
      <button
        class="btn-speak w-100 mt-4"
        style="border-radius: 8px !important"
      >
        <small>SPEAK TO AN AGENT</small>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product__details {
  position: absolute;
  left: 60%;
  margin-right: 10rem;
  top: 4rem;
}
.btn-place__order {
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
}
.btn-speak {
  background: #fff;
  color: #202020;
  border: 1px solid #202020;
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