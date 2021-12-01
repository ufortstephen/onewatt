<template>
  <div>
    <div class="product__details p-3" v-if="one">
      <h2>Home 3</h2>
      <p>
        A premium roof with integrated solar and battery storage that gives you
        energy security, outage protection and peace of mind
      </p>
      <div v-if="home">
        <div class="form-group mt-5">
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
          <div class="input-group mb-5">
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
        <div class="text-info mb-4" style="cursor: pointer" @click="toggleHome">
          My home is new or being built
        </div>
      </div>

      <div v-if="built">
        <div class="form-check">
          <label class="check">
            <small style="font-weight: bold">My home is new</small> <br />
            <small style="font-size: small; position: relative; top: -1rem"
              >The structure is complete</small
            >
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>

          <label class="check">
            <small style="font-weight: bold">My home is being built</small>
            <br />
            <small style="font-size: small; position: relative; top: -1rem"
              >Construction is underway , or will start in the nexy year.</small
            >
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="check">
            <small style="font-weight: bold"
              >I am planning on building a new home</small
            >
            <br />
            <small style="font-size: small; position: relative; top: -1rem"
              >Construction won't start for at least a year.</small
            >
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div class="form-group mt-5">
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
          <label for="">Home square footage</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="600"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append" style="background: transparent">
              <span
                class="input-group-text"
                style="background: transparent"
                id="basic-addon2"
                ><small>/ sq &nbsp; ft</small></span
              >
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Number of stories</label>
          <div class="input-group mb-5">
            <input
              type="text"
              class="form-control"
              placeholder="One storey"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append" style="background: transparent">
              <span
                class="input-group-text"
                style="background: transparent"
                id="basic-addon2"
                ><small> &nbsp; </small></span
              >
            </div>
          </div>
        </div>

        <div class="text-info mb-4" style="cursor: pointer" @click="toggleHome">
          I've lived in my house for over a year.
        </div>
      </div>

      <button
        class="btn-place__order w-100"
        style="border-radius: 8px !important"
        @click="threeShow"
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
    <productStepThree v-if="three" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      one: true,
      home: true,
      built: false,
      three: false,
    };
  },
  methods: {
    toggleHome() {
      this.home = !this.home;
      this.built = !this.built;
    },
    threeShow() {
      this.one = false;
      this.home = false;
      this.built = false;
      this.three = true;
    },
  },
};
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

.form-check-label input {
  display: block;
  height: 45px;
  border-radius: 6px;
  background: transparent !important;
  font-size: SMALL;
  margin-top: 1rem;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 0px;
}

/* The check */
.check {
  display: block;
  position: relative;
  padding-left: 3.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* border: 1px solid #c4c5c5; */
  border-radius: 10px;
}

/* Hide the browser's default radio button */
.check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 1rem;
  left: 1rem;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.check:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.check input:checked ~ .checkmark {
  background-color: #2c2926;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.check input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.check .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>