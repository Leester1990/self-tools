<template>
  <div id="app">
    <anyHeader></anyHeader>
    <router-view/>
  </div>
</template>

<script>
import anyHeader from '@com/common/header'
import "./assets/css/common.css"
export default {
  name: 'App',
  data () {
    return {
      commonMav: []
    }
  },
  components: {
    anyHeader
  }
}
</script>

<style lang="less">
@import "assets/css/var";
body {
  background-color: @theme-f9;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @theme-black;
}
</style>
