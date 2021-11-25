<template>
  <div class="row item">
    <div class="col-md-3">
      <!-- <img src="~assets/images/solar.png" alt="" /> -->
      <div class="box"></div>
    </div>
    <div class="col-md-9">
      <div class="d-flex justify-content-between w-100 w-md-75 pt-3">
        <div>
          <h6 style="font-weight: bold">Item name</h6>

          <p class="text-muted w-100 w-md-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.
          </p>
        </div>
        <div>$7,000</div>
      </div>
      <div class="d-flex justify-content-between w-100 w-md-75">
        <p class="add__btn">
          <button>&plus;</button>
          <span>2</span>
          <button>&minus;</button>
        </p>
        <a style="color: #2050fd">Remove</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
.box {
  width: 100%;
  height: 70%;
  background: #e6e6e6;
  border-radius: 15px;
}
img {
  height: 100px;
  width: 100%;
}
.add__btn {
  width: max-content;
  background-color: #e5e5e5;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  border-radius: 8px;
}
.add__btn button {
  outline: none;
  border: none;
  background-color: transparent;
}

.add__btn span {
  background-color: #fff;
  font-weight: bold;
  padding: 0.7rem;
}

@media (max-width: 991px) {
  .item {
    margin: 0.5px 0.3rem;
    box-shadow: 0 0.3rem 0.6rem rgb(0 0 0 / 15%) !important;
    padding: 1rem 0;
    border-radius: 5px;
  }
}
</style>