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
            注释注释注释
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
    }
}
</script>

<style scoped>

</style>
