<template>

    <div class="all">
        <div class="allTop">
                <ScrollTable></ScrollTable>

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
        ScrollTable,CodeBlock
    },
    data() {
        return {
            code: "<ScrollTable></ScrollTable>"
        }
    },
}
</script>

<style scoped>

</style>
