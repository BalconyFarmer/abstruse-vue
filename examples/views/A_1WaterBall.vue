<template>
  <div class="all">
    <div class="allTop">
      <div style="width: 400px; height: 400px; display: inline-block">
        <WaterBall :data="0.7" :special="true"></WaterBall>
      </div>
      <div style="width: 400px; height: 400px; display: inline-block">
        <WaterBall :data="0.7" :special="false"></WaterBall>
      </div>
      <div style="width: 400px; height: 400px; display: inline-block">
        <column :data="1" :special="false"></column>
      </div>
    </div>
    <div class="allBottom">
      <CodeBlock :codeStr="code"></CodeBlock>
    </div>
  </div>
</template>

<script>
// import WaterBall from "../packages/abstruse-vue/vueConponents/WaterBall/waterBall";
import {WaterBall} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";
import column from "../../packages/abstruse-vue/vueConponents/WaterBall/column";

export default {
  name: "A_1PictureTree.vue",
  components: {
    WaterBall, CodeBlock, column
  },
  data() {
    return {
      code: "<WaterBall :data=\"0.7\" :special=\"true\"></WaterBall>\n" +
          "<WaterBall :data=\"0.7\" :special=\"false\"></WaterBall> ",
    }
  },
  methods: {},
}
</script>

<style scoped>
.allTop {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
