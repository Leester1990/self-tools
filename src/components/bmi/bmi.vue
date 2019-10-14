<template>
  <div class="container">
    <van-cell-group>
      <van-field
        v-model="height"
        type="number"
        label="身高"
        placeholder="请输入身高"
      />

      <van-field
        v-model="weight"
        type="number"
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
      <div class="container tips" :style="{color: `${progress.pColor}`}">{{progress.tips}}</div>
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
          color: "",
          tips: ""
        }
      }
    },
    methods: {
      cfm () {
        if(this.height === "") return Toast('身高不能为空');
        if(this.weight === "") return Toast('体重不能为空');
        let hei = this.height / 100,
          bmi = 0;
        bmi = this.weight / (hei * hei);
        this.bmi = bmi.toFixed(1);
        this.getBmiLevel(Number(this.bmi));
      },
      getBmiLevel (num) {
        if(num <= 18.4) {
          this.progress.per = 25;
          this.progress.text = "偏瘦";
          this.progress.pColor = "#00b7ff";
          this.progress.color = "linear-gradient(to right, #05CBFF, #00b7ff)";
          this.progress.tips = "体重指数小于18.4就偏瘦哦。所以亲，你太瘦了"
        } else if (num >= 18.5 && num <= 23.9) {
          this.progress.per = 50;
          this.progress.text = "正常";
          this.progress.pColor = "#07C160";
          this.progress.color = "linear-gradient(to right, #19C156, #07C160)";
          this.progress.tips = "体重指数在18.5~23.9为正常。所以亲，你很正常哦，请继续保持"
        } else if (num >= 24 && num <= 27.9) {
          this.progress.per = 75;
          this.progress.text = "过重";
          this.progress.pColor = "#FFBF43";
          this.progress.color = "linear-gradient(to right, #FFCE33, #FFBF43)";
          this.progress.tips = "体重指数在24~27.9为过重。所以亲，多锻炼一下身体哦"
        } else if (num >= 28) {
          this.progress.per = 100;
          this.progress.text = "肥胖";
          this.progress.pColor = "#F61D1D";
          this.progress.color = "linear-gradient(to right, #F64418, #F61D1D)";
          this.progress.tips = "体重指数大于28为肥胖。所以亲，迈开腿多锻炼吧"
        }
        Toast(`您的体重指数为：${this.bmi}`);
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/var";
  .btn-area {
    padding: .8rem;
    button {
      width: 100%;
    }
  }
  .tips {
    padding: 1.3rem .8rem;
    font-size: .8rem;
  }
</style>
