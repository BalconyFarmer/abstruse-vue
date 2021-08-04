<template>

    <div class="all">
        <div class="allTop">
            <div style="width: 400px;height: 400px;">
                <fiveNumber></fiveNumber>
            </div>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>
        </div>
    </div>
</template>

<script>

// import fiveNumber from "../packages/abstruse-vue/vueConponents/fiveNumber/fiveNumber";
import {fiveNumber} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_5FiveNumber",
    components: {
        fiveNumber,CodeBlock
    },
    data() {
        return {
            code: "<fiveNumber></fiveNumber>"
        }
    },
}
</script>

<style scoped>

</style>
