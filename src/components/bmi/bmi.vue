<template>
  <div class="container">
    <van-cell-group>
      <van-field
        v-model="height"
        label="身高"
        placeholder="请输入身高"
      />

      <van-field
        v-model="weight"
        label="体重"
        placeholder="请输入体重"
      />
    </van-cell-group>

    <div class="container btn-area">
      <van-button type="info" @click="cfm">确定</van-button>
    </div>
  </div>
</template>

<script>
  import { Toast } from "vant"
  export default {
    name: "bmi",
    data () {
      return {
        height: "",
        weight: "",
        bmi: 0
      }
    },
    methods: {
      cfm () {
        if(this.height === "") Toast('身高不能为空');
        if(this.weight === "") Toast('体重不能为空');
        let hei = this.height / 100,
          bmi = 0;
        bmi = this.weight / (hei * hei);
        this.bmi = bmi.toFixed(1);
      }
    }
  }
</script>

<style scoped lang="less">
  .btn-area {
    button {
      width: 100%;
    }
  }
</style>
