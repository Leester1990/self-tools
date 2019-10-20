<template>
  <div id="app">
    <!--<anyHeader></anyHeader>-->
    <router-view/>
  </div>
</template>

<script>
import anyHeader from '@com/common/header'
import "./assets/css/common.css"
import "../static/plus/plusReady"
export default {
  name: 'App',
  data () {
    return {
      commonMav: []
    }
  },
  mounted () {

  },
  components: {
    /*anyHeader*/
  },
  beforeRouteEnter (to, from, next) {
    console.log(to);
    console.log(from);
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
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
