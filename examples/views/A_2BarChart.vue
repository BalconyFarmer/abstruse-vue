<template>

    <div class="all">
        <div class="allTop">
            <BarChart :width="'400'" :height="'40'" :color="'#89e20d'" :value="0.9"></BarChart>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>

        </div>

    </div>
</template>

<script>
import BarChart from "../../packages/abstruse-vue/vueConponents/singleRate/barChart";
// import {BarChart} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_2BarChart.vue",
    components: {BarChart,CodeBlock},
    data() {
        return {
            code: "<BarChart :width=\"'400'\" :height=\"'40'\" :color=\"'#89e20d'\" :value=\"0.9\"></BarChart>"
        }
    },
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
