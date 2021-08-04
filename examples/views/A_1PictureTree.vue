<template>
    <div class="all">
        <div class="allTop">
            <div style="width: 400px; height: 400px; display: inline-block">
                <WaterBall :data="0.7" :special="true"></WaterBall>
            </div>
            <div style="width: 400px; height: 400px; display: inline-block">
                <WaterBall :data="0.7" :special="false"></WaterBall>
            </div>
        </div>
        <CodeBlock :codeStr="code"></CodeBlock>
    </div>
</template>

<script>
// import WaterBall from "../packages/abstruse-vue/vueConponents/WaterBall/waterBall";
import {WaterBall} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_1PictureTree.vue",
    components: {
        WaterBall,CodeBlock
    },
    data() {
        return {
            code: "<WaterBall :data=\"0.7\" :special=\"true\"></WaterBall>\n" +
                  "<WaterBall :data=\"0.7\" :special=\"false\"></WaterBall> ",
        }
    },
    methods: {

    },
}
</script>

<style scoped>

</style>
