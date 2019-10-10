<template>
  <van-nav-bar :title="$route.meta.title" left-arrow>
    <van-icon name="ellipsis" slot="right" />
  </van-nav-bar>
</template>

<script>
  export default {
    name: "any-header",
    mounted() {
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/var";
  .van-nav-bar {
    background-color: @theme-main-color;
    .van-nav-bar__title {
      color: #fff;
      font-weight: bold;
    }
    i, span {
      color: #fff;
    }
  }
</style>
