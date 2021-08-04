<template>

    <div class="all">
        <div class="allTop">
            <PictureTree :picData = picData></PictureTree>
        </div>
        <div class="allBottom">
            <CodeBlock :codeStr="code"></CodeBlock>
        </div>
    </div>
</template>

<script>
import PictureTree from "../../packages/abstruse-vue/vueConponents/PictureTree/PictureTree";
// import {PictureTree} from "../../lib/index.common.js";

import CodeBlock from "./commonComponents/CodeBlock";

export default {
    name: "A_3PictureTree.vue",
    components: {
        PictureTree,CodeBlock
    },
    data() {
        return {
            picData:{
                data1: [{
                    name: "xxx",
                    age: 100,
                    edu: "lll",
                    img: "http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg"
                }],
                data2: [{
                    name: "xxx",
                    age: 100,
                    edu: "lll",
                    img: "http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg"
                }, {
                    name: "xxx",
                    age: 100,
                    edu: "lll",
                    img: "http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg"
                }],
                data3: [{
                    name: "xxx",
                    age: 100,
                    edu: "lll",
                    img: "http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg"
                }, {
                    name: "xxx",
                    age: 100,
                    edu: "lll",
                    img: "http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg"
                }, {
                    name: "xxx",
                    age: 100,
                    edu: "lll",
                    img: "http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg"
                }],
            },
            code: "<PictureTree :picData = picData></PictureTree>\n" +
                "            picData:{\n" +
                "                data1: [{\n" +
                "                    name: \"xxx\",\n" +
                "                    age: 100,\n" +
                "                    edu: \"lll\",\n" +
                "                    img: \"http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg\"\n" +
                "                }],\n" +
                "                data2: [{\n" +
                "                    name: \"xxx\",\n" +
                "                    age: 100,\n" +
                "                    edu: \"lll\",\n" +
                "                    img: \"http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg\"\n" +
                "                }, {\n" +
                "                    name: \"xxx\",\n" +
                "                    age: 100,\n" +
                "                    edu: \"lll\",\n" +
                "                    img: \"http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg\"\n" +
                "                }],\n" +
                "                data3: [{\n" +
                "                    name: \"xxx\",\n" +
                "                    age: 100,\n" +
                "                    edu: \"lll\",\n" +
                "                    img: \"http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg\"\n" +
                "                }, {\n" +
                "                    name: \"xxx\",\n" +
                "                    age: 100,\n" +
                "                    edu: \"lll\",\n" +
                "                    img: \"http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg\"\n" +
                "                }, {\n" +
                "                    name: \"xxx\",\n" +
                "                    age: 100,\n" +
                "                    edu: \"lll\",\n" +
                "                    img: \"http://zt.psns.1237125.cn/uploads/2020/Photos/11/27/202011271009365345.jpg\"\n" +
                "                }],\n" +
                "            },"
        }
    },
}
</script>

<style scoped>

</style>
