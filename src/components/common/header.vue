<template>
  <!--<van-nav-bar
    :title="$route.meta.title"
    :fixed="isFixed"
    left-arrow
    @click-left="goBack"
    v-bind:style="{backgroundColor: bgColor}"
  >
    <van-icon name="ellipsis" slot="right" />
  </van-nav-bar>-->
  <van-nav-bar
    :title="title"
  >
    <slot slot="left" name="left"></slot>
    <slot slot="right" name="right"></slot>
  </van-nav-bar>
</template>

<script>
  import router from "../../router/index"
  export default {
    name: "any-header",
    props: {
      title: {
        type: String,
        required: true
      }
    },
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
    .van-nav-bar__left {
      left: 10px;
    }
    .van-nav-bar__right {
      right: 10px;
    }
    .van-nav-bar__left,
    .van-nav-bar__right,
    .header-item {
      line-height: 46px;
    }
    .header-item {
      display: inline-block;
      padding: 0 3px;
    }
  }
</style>
