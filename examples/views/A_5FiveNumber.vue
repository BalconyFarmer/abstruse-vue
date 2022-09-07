<template>
    <div class="all">
        <div class="allTop">
            <div style="width: 400px;height: 400px;">
                <fiveNumber :fData=fData></fiveNumber>
            </div>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>
        </div>
    </div>
</template>

<script>

import fiveNumber from "../../packages/abstruse-vue/vueConponents/fiveNumber/fiveNumber";
// import {fiveNumber} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_5FiveNumber",
    components: {
        fiveNumber, CodeBlock
    },
    data() {
        return {
            code: "<fiveNumber :fData = fData></fiveNumber>\n " +
                "fData: [1,2,3,4,5]",
            fData: [1, 2, 3, 4, 5]
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
