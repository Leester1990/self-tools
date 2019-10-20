<template>
    <div class="container">
      <comHeader :title="'首页'"></comHeader>
      <van-cell-group>
        <van-cell
          v-for="item in menu"
          :key="item.code"
          :title="item.name"
          is-link
          @click="jumpPage(item.url)"
        />
      </van-cell-group>
    </div>
</template>

<script>
  import comHeader from "../common/header"
  export default {
    name: "home",
    data () {
      return {
        menu: []
      }
    },
    components: {
      comHeader
    },
    mounted() {
      const menu = [
        {
          id: 1,
          name: "身体质量指数",
          url: "/bmi",
          code: "ANY_BMI"
        },
        {
          id: 2,
          name: "车牌名称",
          url: "/car",
          code: "ANY_CAR"
        }
      ];
      this.menu = menu;
    },
    methods: {
      jumpPage (url) {
        this.$router.push({path: url})
      }
    }
  }
</script>

<style scoped lang="less">
  .van-cell-group {
    .van-cell__right-icon {
      color: #ddd;
    }
  }
</style>
