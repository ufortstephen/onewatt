<template>
  <div>
    <div style="background: rgb(0, 0, 0)" class="px-3"><AppHeader /></div>

    <div class="items section container px-3">
      <div>
        <h5 class="text-center text-md-left my-3">Items in Cart</h5>
        <CartItem v-for="x in 5" :key="x.id" class="mb-3" />
      </div>
      <div>
        <div class="order__summary rounded">
          <h5>Order Summary</h5>
          <div
            class="d-flex justify-content-between border-bottom"
            style="font-weight: bold"
          >
            <p>Sutotal</p>
            <p>$18,400</p>
          </div>
          <div class="d-flex justify-content-between border-bottom">
            <p>Shopping</p>
            <p>$18,400</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>
              <span style="font-weight: bolder; color: #000">Total</span>
              (Inclusive of tax)
            </p>
            <p style="font-weight: bold">$18,400</p>
          </div>
          <button class="btn-place__order w-100 my-4">CHECKOUT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.items {
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-gap: 4rem;
}
.order__summary {
  background: #f8f8f8;
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
}
.btn-place__order {
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
  border-radius: 4px;
  font-size: 14px;
}
h6,
p {
  color: #000;
}

@media (max-width: 991px) {
  .items {
    grid-template-columns: 1fr;
  }
}
</style>