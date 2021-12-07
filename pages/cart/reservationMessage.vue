<template>
  <div>
      <div style="background: rgb(0, 0, 0)" class="px-3"><AppHeader /></div>
    <div class="message__container d-flex align-items-center justify-content-center"><h2>Congrats! Your reservation has been made.</h2></div>
  </div>
</template>

<script>
export default {
  name: "Message",
};
</script>

<style scoped>
.message__container{
    min-height: 80vh;
}
</style>