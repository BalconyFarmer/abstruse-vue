<template>
    <div class="all">
        <div class="allTop">
            <poker :num="111" unit="人"></poker>
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
import poker from "../../packages/abstruse-vue/vueConponents/poker";

export default {
    name: "A_6ThreeNumInGrid",
    components: {
        CodeBlock, normal_table, naomalValueStrip,rollImg,poker
    },
    data() {
        return {

            // 设备数量排名
            table0Title: [
                {
                    cnt: 2209,
                    pm_count: 7650,
                    po_code: "001.001.053.008.007",
                    rate: 28.88,
                    region_name: "绥江县"
                },
                {
                    cnt: 2209,
                    pm_count: 7650,
                    po_code: "001.001.053.008.007",
                    rate: 28.88,
                    region_name: "绥江县"
                },
                {
                    cnt: 2209,
                    pm_count: 7650,
                    po_code: "001.001.053.008.007",
                    rate: 28.88,
                    region_name: "绥江县"
                },
            ],

            code: "<poker :num=\"111\" unit=\"人\"></poker>",
        }
    },
}
</script>

<style scoped lang="scss">

.allTop {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
