<template>

    <div class="all">
        <div class="allTop">
            <ThreeNumInGrid :dyjfOption = dyjfOption></ThreeNumInGrid>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>
        </div>
    </div>
</template>

<script>

import ThreeNumInGrid from "../../packages/abstruse-vue/vueConponents/EchartInGrid/ThreeNumInGrid";
// import {ThreeNumInGrid} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_6ThreeNumInGrid",
    components: {
        ThreeNumInGrid, CodeBlock
    },
    data() {
        return {
            code: "<ThreeNumInGrid :dyjfOption = dyjfOption></ThreeNumInGrid>\n" +
                "            dyjfOption: [\n" +
                "                {\n" +
                "                    MONTH: \"1\",\n" +
                "                    num_60: 110,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"2\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"3\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"4\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"5\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"6\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"7\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"8\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"9\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"10\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                }, {\n" +
                "                    MONTH: \"11\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "                {\n" +
                "                    MONTH: \"12\",\n" +
                "                    num_60: 10,\n" +
                "                    num_60_90: 10,\n" +
                "                    num_90: 10\n" +
                "                },\n" +
                "\n" +
                "            ]",
            dyjfOption: [
                {
                    MONTH: "1",
                    num_60: 110,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "2",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "3",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "4",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "5",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "6",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "7",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "8",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "9",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "10",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                }, {
                    MONTH: "11",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "12",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },

            ]
        }
    },
}
</script>

<style scoped>

</style>
