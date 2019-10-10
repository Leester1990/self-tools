<template>
    <div class="container">
      <van-cell-group>
        <van-cell title="单元格" is-link :to="{path: '/bmi'}" />
        <van-cell title="单元格" is-link />
        <van-cell title="单元格" is-link />
      </van-cell-group>
    </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped lang="less">
  .van-cell-group {
    .van-cell__right-icon {
      color: #ddd;
    }
  }
</style>
