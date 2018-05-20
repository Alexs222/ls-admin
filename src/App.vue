<template lang="pug">
  //- #app
  .admin
    .header
      app-header
    .tabs
      tabs
    .content
      router-view
</template>


<script>
import header from './components/header';
import tabs from './components/tabs';
import about from './components/about';

export default {
  components: {
    appHeader: header,
    tabs, about
  }
}
</script>

<style lang="scss">
  .content {
    background: url("~img/bg.jpg") center center / cover no-repeat;
  }
</style>
