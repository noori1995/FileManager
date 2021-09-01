<template>
  <file-manager />
</template>

<script>
import FileManager from './components/Layout/FileManager.vue'

export default {
  name: 'App',
  components: {
    FileManager
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

html{
  height: 100%;
body{
  height: inherit;
  margin: 0;
#app{
  height: inherit;
  }
}
}

</style>
