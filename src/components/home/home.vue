<template>
    <div class="container">
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
  export default {
    name: "home",
    data () {
      return {
        menu: []
      }
    },
    mounted() {
      const menu = [
        {
          id: 1,
          name: "身体质量指数",
          url: "/bmi",
          code: "ANY_BMI"
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
