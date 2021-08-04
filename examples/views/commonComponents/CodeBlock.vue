<template>

    <div class="CodeS">
        <prism-editor class="my-editor" v-model="codeStr" :highlight="highlighter" line-numbers></prism-editor>
    </div>
</template>

<script>
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

export default {
    name: "CodeBlock",
    props: ["codeStr"],
    methods: {
        highlighter(code) {
            return highlight(code, languages.js); // languages.<insert language> to return html with markup
        },
    },
}
</script>

<style scoped>
.CodeS{
    width: 100%;
    height: 100%;
}

</style>
