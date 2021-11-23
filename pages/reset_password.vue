<template>
  <div>
    <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)">
      <AppHeader />
    </div>

    <div class="login__section">
      <form>
        <h5>Reset password</h5>
        <div class="form-group my-5">
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

        <input type="submit" value="SEND" />

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