<template>
  <div>
    <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)">
      <AppHeader />
    </div>

    <div class="login__section">
      <form>
        <h5>Sign in</h5>
        <div class="form-group my-4">
          <label for="">Email address</label>
          <input
            type="email"
            class="form-control"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder=""
          />
          <small id="emailHelpId" class="form-text text-muted"></small>
        </div>

        <div class="form-group">
          <label for="">Password</label>
          <input
            type="password"
            class="form-control"
            name=""
            id=""
            placeholder=""
          />
        </div>

        <div class="row mt-2 mb-5">
          <div class="col-md-6 order-2 order-md-2">
            <div class="form-check">
              <label class="container"
                ><small style="font-size: small">Remember me</small>
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="col-md-6 text-right blue order-0 order-md-3">
            <NuxtLink to="/reset_password" class="blue"
              >Forgot password</NuxtLink
            >
          </div>
        </div>
        <input type="submit" value="SIGN IN" />

        <p class="mt-3">
          If you don’t have an account,
          <NuxtLink to="/register" class="blue">Register</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login__section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
label {
  font-weight: bold;
  color: #2c2926;
}
form {
  background: #f8f8f8;
  padding: 2rem;
  min-width: 35%;
  margin: 3rem auto;
  color: #2c2926;
  border-radius: 12px;
}

input[type="email"],
input[type="password"] {
  height: 45px;
  border-radius: 6px;
  background: transparent !important;
  font-size: SMALL;
}
input[type="submit"] {
  width: 100%;
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  border-color: #c5c5c5;
}
.blue {
  color: #2050fd;
  cursor: pointer;
}

/*  */
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0.5rem;
  left: -1rem;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2c2926;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

@media (max-width: 568px) {
  form {
    margin: 0;
    margin-top: 4rem;
  }
  .login__section {
    display: block;
    background: #f8f8f8;
    min-height: max-content;
  }
}
</style>