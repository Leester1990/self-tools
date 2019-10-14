<template>
  <div class="container car-list-area">
    <van-grid
      :column-num="3"
    >
      <van-grid-item
        v-for="item in carList"
        :key="item.id"
        class="car-list"
        @click="viewImg(item)"
      >
        <img :src="item.logo" :alt="item.name">
        <p class="name">{{item.name}}</p>
      </van-grid-item>
    </van-grid>

    <van-image-preview
      v-model="show"
      :images="images"
    >
    </van-image-preview>
  </div>
</template>

<script>
  import axios from "axios"
  import carCate from "../../assets/js/car-cate"
  export default {
    name: "car",
    data () {
      return {
        carList: [],
        show: false,
        images: []
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      getList () {
        this.carList = carCate.carCate.result.branditems;
      },
      viewImg (item) {
        this.images = [];
        this.images.push(item.logo);
        this.show = true;
      }
    }
  }
</script>

<style scoped lang="less">
  .car-list {
    .name {
      font-size: 12px;
    }
    img {
      width: 60%;
    }
  }
</style>
