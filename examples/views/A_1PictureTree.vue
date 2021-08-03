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
            {{str}}
        </div>
    </div>
</template>

<script>

// import WaterBall from "../packages/abstruse-vue/vueConponents/WaterBall/waterBall";
import {WaterBall} from "../../lib/index.common.js";

export default {
    name: "A_1PictureTree.vue",
    components: {
        WaterBall
    },
    data() {
        return {
            str: "<WaterBall :data=\"0.7\" :special=\"true\"></WaterBall>" +
                "<WaterBall :data=\"0.7\" :special=\"false\"></WaterBall>"
        }
    }
}
</script>

<style scoped>

</style>
