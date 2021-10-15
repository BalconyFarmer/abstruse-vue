<template>

    <div class="all">
        <div class="allTop">
            <naomalValueStrip class="all11" :data11="table0Title"></naomalValueStrip>
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

export default {
    name: "A_6ThreeNumInGrid",
    components: {
        CodeBlock, normal_table, naomalValueStrip
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

            code: "<naomalValueStrip class=\"all11\" :data11=\"table0Title\"></naomalValueStrip>" +
                "            // 设备数量排名\n" +
                "            table0Title: [\n" +
                "                {\n" +
                "                    cnt: 2209,\n" +
                "                    pm_count: 7650,\n" +
                "                    po_code: \"001.001.053.008.007\",\n" +
                "                    rate: 28.88,\n" +
                "                    region_name: \"绥江县\"\n" +
                "                },\n" +
                "                {\n" +
                "                    cnt: 2209,\n" +
                "                    pm_count: 7650,\n" +
                "                    po_code: \"001.001.053.008.007\",\n" +
                "                    rate: 28.88,\n" +
                "                    region_name: \"绥江县\"\n" +
                "                },\n" +
                "                {\n" +
                "                    cnt: 2209,\n" +
                "                    pm_count: 7650,\n" +
                "                    po_code: \"001.001.053.008.007\",\n" +
                "                    rate: 28.88,\n" +
                "                    region_name: \"绥江县\"\n" +
                "                },\n" +
                "            ],",
        }
    },
}
</script>

<style scoped>
    .all11 {
        width: 100%;
        height: 100%;
    }
</style>
