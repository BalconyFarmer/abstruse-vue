<template>

    <div class="all">
        <div class="allTop">
            <div style="width: 400px; height: 400px; display: inline-block">
                <WaterBall :data="0.7" :special="true"></WaterBall>
            </div>
            <div style="width: 400px; height: 400px; display: inline-block">
                <WaterBall :data="0.7" :special="false"></WaterBall>
            </div>
        </div>
        <div class="allBottom">
            <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers></prism-editor>
        </div>
    </div>
</template>

<script>
// import WaterBall from "../packages/abstruse-vue/vueConponents/WaterBall/waterBall";
import {WaterBall} from "../../lib/index.common.js";

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

export default {
    name: "A_1PictureTree.vue",
    components: {
        WaterBall
    },
    data() {
        return {
            code: "<WaterBall :data=\"0.7\" :special=\"true\"></WaterBall>\n" +
                  "<WaterBall :data=\"0.7\" :special=\"false\"></WaterBall> ",
        }
    },
    methods: {
        highlighter(code) {
            return highlight(code, languages.js); // languages.<insert language> to return html with markup
        },
    },
}
</script>

<style scoped>

</style>
