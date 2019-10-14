<template>
  <van-nav-bar
    :title="$route.meta.title"
    :fixed="isFixed"
    left-arrow
    @click-left="goBack"
    v-bind:style="{backgroundColor: bgColor}"
  >
    <van-icon name="ellipsis" slot="right" />
  </van-nav-bar>
</template>

<script>
  import router from "../../router/index"
  export default {
    name: "any-header",
    data () {
      return {
        bgColor: "#0081FF",
        isFixed: true
      }
    },
    mounted() {
      router.beforeEach((to,from,next)=>{
        /*if(to.path === "/bmi") {
          this.bgColor = "#e66"
        } else {
          this.bgColor = "#0081FF"
        }*/
        next();
      });
    },
    methods: {
      goBack () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/var";
  .van-nav-bar {
    background-color: @theme-main-color;
    z-index: 10 !important;
    .van-nav-bar__title {
      color: #fff;
      font-weight: bold;
    }
    i, span {
      color: #fff;
    }
  }
</style>
