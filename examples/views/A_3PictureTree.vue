<template>

    <div class="all">
        <div class="allTop">
            <PictureTree></PictureTree>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>
        </div>
    </div>
</template>

<script>
// import PictureTree from "../packages/abstruse-vue/vueConponents/PictureTree/PictureTree";
import {PictureTree} from "../../lib/index.common.js";
import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_3PictureTree.vue",
    components: {
        PictureTree,CodeBlock
    },
    data() {
        return {
            code: "<PictureTree></PictureTree>"
        }
    },
}
</script>

<style scoped>

</style>
