<template>
  <div id="app">
    <div class="mainFirst">
      <div class="left">
        <div class="leftList">
          <div class="btns" @click="route = 0">初始化</div>
          <div class="btns" @click="route = 1">WaterBall</div>
          <div class="btns" @click="route = 2">barChart</div>
          <div class="btns" @click="route = 7">PictureTree</div>
          <div class="btns" @click="route = 8">ScrollTable</div>
          <div class="btns" @click="route = 9">FiveNumber</div>
          <div class="btns" @click="route = 10">ThreeNumInGrid</div>

        </div>
      </div>
      <div class="right">

        <div v-if="route == 0">
          <A_0Init></A_0Init>
        </div>

        <div v-if="route == 1" class="rightMain ">
          <!--            <WaterBall></WaterBall>-->
          <A_1PictureTree></A_1PictureTree>
        </div>

        <div v-if="route == 2" class="rightMain ">
          <div style="width: 400px;height: 400px">
            <BarChart :width="'400'" :height="'40'" :color="'#89e20d'" :value="0.9"></BarChart>
          </div>
        </div>

        <div v-if="route == 7" class="rightMain ">
          <PictureTree></PictureTree>
        </div>

        <div v-if="route == 8" class="rightMain ">
          <ScrollTable></ScrollTable>
        </div>

        <div v-if="route == 9" class="rightMain ">
          <fiveNumber></fiveNumber>
        </div>

        <div v-if="route == 10" class="rightMain ">
          <ThreeNumInGrid></ThreeNumInGrid>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import A_0Init from "./views/A_0Init";

import "../lib/index.css";

// import WaterBall from "../packages/abstruse-vue/vueConponents/WaterBall/waterBall";
import {WaterBall} from "../lib/index.common.js";
import A_1PictureTree from "./views/A_1PictureTree";

// import PictureTree from "../packages/abstruse-vue/vueConponents/PictureTree/PictureTree";
import {PictureTree} from "../lib/index.common.js";

// import ScrollTable from "../packages/abstruse-vue/vueConponents/ScrollTable/ScrollTable";
import {ScrollTable} from "../lib/index.common.js";


// import fiveNumber from "../packages/abstruse-vue/vueConponents/fiveNumber/fiveNumber";
import {fiveNumber} from "../lib/index.common.js";

// import ThreeNumInGrid from "../packages/abstruse-vue/vueConponents/EchartInGrid/ThreeNumInGrid";
import {ThreeNumInGrid} from "../lib/index.common.js";


// import barChart from "../packages/abstruse-vue/vueConponents/singleRate/barChart";
import {BarChart} from "../lib/index.common.js";


export default {
  components: {
    A_0Init, ThreeNumInGrid, PictureTree, ScrollTable, fiveNumber, WaterBall, BarChart, A_1PictureTree
  },
  data: function () {
    return {
      route: 0,
    }
  },
  watch: {
    route() {
      this.switchClass()
    }
  },
  methods: {
    changeRoute(num) {
      const self = this
      this.route = 0
      setTimeout(() => {
        self.route = num
      }, 50)
    },
    switchClass() {
      switch (this.route) {
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
      }
    },
  },
  mounted() {
    this.switchClass()
  },
  destroy() {
  }
}
</script>

<style lang="scss">

body, html, #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0px;
  overflow: hidden;
}

.mainFirst {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .left {
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    cursor: pointer;

    .btns {
      border-bottom: 2px solid gray;
      margin-top: 30px;
      margin-left: 30px;
    }
  }

  .right {
    display: flex;
    flex: 1;
    width: 0;
    height: 100%;
    overflow-y: auto;
    overflow-x: auto;
    background-color: #05114B;

    .rightMain {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

    }
  }
}

</style>
