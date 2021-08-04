<template>

    <div class="all">
        <div class="allTop">
            <ThreeNumInGrid></ThreeNumInGrid>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>
        </div>
    </div>
</template>

<script>

// import ThreeNumInGrid from "../../packages/abstruse-vue/vueConponents/EchartInGrid/ThreeNumInGrid";
import {ThreeNumInGrid} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_6ThreeNumInGrid",
    components: {
        ThreeNumInGrid, CodeBlock
    },
    data() {
        return {
            code: "<ThreeNumInGrid></ThreeNumInGrid>"
        }
    },
}
</script>

<style scoped>

</style>
