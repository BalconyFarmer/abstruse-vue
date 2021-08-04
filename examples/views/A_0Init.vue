<template>
    <div>
        <CodeBlock :codeStr="code"></CodeBlock>
    </div>
</template>

<script>
import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_0Init.vue",
    components: {
        CodeBlock
    },
    data() {
        return {
            str: "<PictureTree></PictureTree>",
            code: "cnpm install abstruse-vue --save\n" +
                "import {PictureTree, ScrollTable} from 'abstruse-vue';\n" +
                "import 'abstruse-vue/lib/index.css'\n" +
                "Vue.use(PictureTree)\n" +
                "Vue.use(ScrollTable)\n" +
                "<PictureTree></PictureTree> \n" +
                "....\n"
        }
    }
}
</script>

<style scoped lang="scss">
div {
    color: white;
    text-align: left;
}

</style>
