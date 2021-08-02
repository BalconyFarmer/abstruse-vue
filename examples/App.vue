<template>
    <div id="app">
        <div class="mainFirst">
            <div class="left">
                <div class="leftList">
                    <div class="btns" @click="route = 7">头像Tree</div>
                    <div class="btns" @click="route = 8">ScrollTable滚动列表</div>
                    <div class="btns" @click="route = 9">FiveNumber</div>
                    <div class="btns" @click="route = 10">ThreeNumInGrid</div>
                    <div class="btns" @click="route = 1">WaterBall</div>
                </div>
            </div>
            <div class="right">


                <div v-if="route == 7" class="rightMain ">
                    <PictureTree></PictureTree>
                </div>

                <div v-if="route == 8" class="rightMain ">
                    <ScrollTable></ScrollTable>
                </div>

                <div v-if="route == 9" class="rightMain ">
                    <fiveNumber></fiveNumber>
                </div>

                <div v-if="route == 10" class="rightMain ">
                    <ThreeNumInGrid></ThreeNumInGrid>
                </div>

                <div v-if="route == 1" class="rightMain ">
                    <div>111</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import "../lib/index.css";

// import PictureTree from "../packages/Abstruse/vueConponents/PictureTree/PictureTree";
import {PictureTree} from "../lib/index.common.js";

// import ScrollTable from "../packages/Abstruse/vueConponents/ScrollTable/ScrollTable";
import {ScrollTable} from "../lib/index.common.js";


// import fiveNumber from "../packages/Abstruse/vueConponents/fiveNumber/fiveNumber";
import {fiveNumber} from "../lib/index.common.js";

// import ThreeNumInGrid from "../packages/Abstruse/vueConponents/EchartInGrid/ThreeNumInGrid";
import {ThreeNumInGrid} from "../lib/index.common.js";



export default {
    components: {
        ThreeNumInGrid, PictureTree, ScrollTable, fiveNumber
    },
    data: function () {
        return {
            route: 7,
        }
    },
    watch: {
        route() {
            this.switchClass()
        }
    },
    methods: {
        changeRoute(num) {
            const self = this
            this.route = 0
            setTimeout(() => {
                self.route = num
            }, 50)
        },
        switchClass() {
            switch (this.route) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
            }
        },
    },
    mounted() {
        this.switchClass()
    },
    destroy() {
    }
}
</script>

<style lang="scss">

body, html, #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    margin: 0px;
    overflow: hidden;
}

.mainFirst {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left {
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;
        cursor: pointer;

        .btns {
            border-bottom: 2px solid gray;
            margin-top: 30px;
            margin-left: 30px;
        }
    }

    .right {
        display: flex;
        flex: 1;
        width: 0;
        height: 100%;
        overflow-y: auto;
        overflow-x: auto;
        background-color: #05114B;

        .rightMain {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

        }
    }
}

</style>
