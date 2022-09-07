<template>
    <div class="all">
        <div class="allTop">
            <rollImg :data="data"></rollImg>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>
        </div>
    </div>
</template>

<script>

import normal_table from "../../packages/abstruse-vue/vueConponents/table/normal-table-bug";
// import {ThreeNumInGrid} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";
import naomalValueStrip from "../../packages/abstruse-vue/vueConponents/normal-valueStrip"
import rollImg from '../../packages/abstruse-vue/vueConponents/rollImg'

export default {
    name: "A_6ThreeNumInGrid",
    components: {
        CodeBlock, normal_table, naomalValueStrip, rollImg
    },
    data() {
        return {

            data: {
                num1: 12,
                num2: 333,
                num3: "人",
            },

            code: "<rollImg :data=\"data\"></rollImg> \n" +
                "            data: {\n" +
                "                num1: 11,\n" +
                "                num2: 11,\n" +
                "                num3: \"人\",\n" +
                "            },",
        }
    },
}
</script>

<style scoped lang="scss">

.allTop {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}

</style>
