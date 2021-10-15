<template>
    <div class="all">
        <div class="allTop">
            <BreathNumber :data="data"></BreathNumber>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>
        </div>
    </div>
</template>

<script>

import normal_table from "../../packages/abstruse-vue/vueConponents/table/normal-table-bug";

import CodeBlock from "./commonComponents/CodeBlock";
import naomalValueStrip from "../../packages/abstruse-vue/vueConponents/normal-valueStrip"
import rollImg from '../../packages/abstruse-vue/vueConponents/rollImg'
import BreathNumber from "../../packages/abstruse-vue/vueConponents/BreathNumber/BreathNumber";

export default {
    name: "A_11",
    components: {
        CodeBlock, normal_table, naomalValueStrip, rollImg, BreathNumber
    },
    data() {
        return {

            data: {
                num1: 12,
                num2: 333,
                num3: "人",
            },

            code: "<BreathNumber :data=\"data\"></BreathNumber> \n",
        }
    },
}
</script>

<style scoped lang="scss">


</style>
