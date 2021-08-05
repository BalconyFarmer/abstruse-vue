<template>

    <div class="all">
        <div class="allTop">
            <div style="width: 100%;height: 90%">
                <ScrollTable :activeList=tableData></ScrollTable>

            </div>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>
        </div>
    </div>
</template>

<script>

import ScrollTable from "../../packages/abstruse-vue/vueConponents/ScrollTable/ScrollTable";
// import {ScrollTable} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_4ScrollTable.vue",
    components: {
        ScrollTable, CodeBlock
    },
    data() {
        return {
            code: "<ScrollTable :activeList=tableData></ScrollTable>\n " +
                "            tableData: [\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "                {pm_name: \"xxx支部\", po_name: 'xxxxx', po_full_name: \"110\"},\n" +
                "            ]",
            tableData: [
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部", po_name: 'xxxxx', po_full_name: "110"},
            ]
        }
    },
}
</script>

<style scoped>

</style>
