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

            code: "            <normal_table :tableData='table0' :table0Title='table0Title'></normal_table>\n" +
                "            // 设备数量排名\n" +
                "            table0Title: [\n" +
                "                {name: '序号', name0: '地区', value: '设备数'},\n" +
                "            ],\n" +
                "            table0: [\n" +
                "                {name: '01', name0: '昭通市', value: 0, location: [103.717216, 27.336999]},\n" +
                "                {name: '02', name0: '昭阳区', value: 0, location: [103.706539, 27.320075]},\n" +
                "                {name: '03', name0: '鲁甸区', value: 0, location: [103.558042, 27.186659]},\n" +
                "                {name: '04', name0: '巧家县', value: 0, location: [102.930164, 26.908461]},\n" +
                "                {name: '05', name0: '盐津县', value: 0, location: [104.234442, 28.10871]},\n" +
                "                {name: '06', name0: '大关县', value: 0, location: [103.891146, 27.747978]},\n" +
                "                {name: '07', name0: '绥江县', value: 0, location: [103.968978, 28.5921]},\n" +
                "                {name: '08', name0: '镇雄县', value: 0, location: [104.873579, 27.441668]},\n" +
                "\n" +
                "            ],",
        }
    },
}
</script>

<style scoped>
    .all11 {
        width: 50%;
        height: 50%;
    }
</style>
