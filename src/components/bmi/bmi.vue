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

    <div class="container" v-if="progress.per > 0">
      <van-progress
        :percentage="progress.per"
        :pivot-text="progress.text"
        :pivot-color="progress.pColor"
        :color="progress.color"
      />
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
        bmi: 0,
        progress: {
          per: 0,
          text: "",
          pColor: "",
          color: ""
        }
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
        this.getBmiLevel(Number(this.bmi));
      },
      getBmiLevel (num) {
        console.log(num);
        if(num <= 18.4) {
          this.progress.per = 25;
          this.progress.text = "偏瘦";
          this.progress.pColor = "#00b7ff";
          this.progress.color = "linear-gradient(to right, #05CBFF, #00b7ff)";
        } else if (num >= 18.5 && num <= 23.9) {
          this.progress.per = 50;
          this.progress.text = "正常";
          this.progress.pColor = "#07C160";
          this.progress.color = "linear-gradient(to right, #19C156, #07C160)";
        } else if (num >= 24 && num <= 27.9) {
          this.progress.per = 75;
          this.progress.text = "过重";
          this.progress.pColor = "#FFBF43";
          this.progress.color = "linear-gradient(to right, #FFCE33, #FFBF43)";
        } else if (num >= 28) {
          this.progress.per = 100;
          this.progress.text = "肥胖";
          this.progress.pColor = "#F61D1D";
          this.progress.color = "linear-gradient(to right, #F64418, #F61D1D)";
        }
        console.log(JSON.stringify(this.progress));
      }
    }
  }
</script>

<style scoped lang="less">
  .btn-area {
    padding: .8rem;
    button {
      width: 100%;
    }
  }
</style>
