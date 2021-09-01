<template>
  <div class="main-container">
  <the-header></the-header>
  <the-main></the-main>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue'
import TheMain from './TheMain.vue'
export default {
  components: { TheMain, TheHeader },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/_variables.scss";

.main-container{
  min-width: 20rem;
  max-width: 100%;
  height: 100%;
 }
.main-header{
  width: 100%;
}
.main-body{
  width: 100%;
}

</style>