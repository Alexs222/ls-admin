<template lang="pug">
  //- #app
  .admin
    .header
      app-header
    .tabs
    .content
</template>


<script>
import header from './components/header';
export default {
  components: {
    appHeader: header
  }
}
</script>

<style lang="scss">
</style>
