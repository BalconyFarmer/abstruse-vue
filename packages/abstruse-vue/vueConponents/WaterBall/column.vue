
<template>
  <div class="ballContainer">
    <charts style="width: 100%;height: 100%" :options="mockWaterBall" class="liquidBall" v-if="mockWaterBall.series" ref="mapChart"></charts>
    <img class="imgMy" :src="url">
  </div>
</template>

<script>
import Charts from "../charts";
import 'echarts-liquidfill'

export default {
  name: "water-ball",
  components: {Charts},
  props: ["data", "special"],
  data() {
    return {
      mockWaterBall: {
        series: [{
          type: "liquidFill",
          // radius: '88%', // 水球大小
          shape: "rect",
          center: ['50%', '70%'],
          fontSize: 16,
          data: [0.1, 0.08],
          color: ["#7de5e9", "#57CEE1"],
          outline: {
            show: false
          },
          name: "Liquid Fill",
          backgroundStyle: {
            color: "rgba(0, 0, 0, 0.1)"
          }
        }],
        tooltip: {
          show: false
        }
      },
      url: require("./imgs/81/1.png")
    };
  },
  methods: {
    init() {
      this.mockWaterBall.series[0].data = [this.data, this.data + 0.01];
    }
  },
  watch: {
    data: {
      handler(value, oldValue) {
        this.init();
      },
      deep: true
    }
  },
  mounted() {
    this.init();
    if (this.special) {
      this.url = require("./imgs/82/1.png");
      this.mockWaterBall.series[0].color = ["#6FD09F", "#62C9C4"];
    }
  }
};
</script>

<style scoped lang="scss">
.ballContainer {
  position: relative;
  width: 100%;
  height: 100%;

  .liquidBall {
    width: 100%;
    height: 100%;
  }

  .imgMy {
    position: absolute;
    left: -25px;
    top: 0px;
    width: 110%;
    height: 100%;
  }

  .name {
    position: absolute;
    top: 273px;
    left: 112px;
  }
}
</style>
