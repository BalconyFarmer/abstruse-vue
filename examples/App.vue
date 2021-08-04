<template>
    <div id="app">
        <div class="mainFirst">
            <div class="left">
                <div class="leftList">
                    <div class="btns" @click="route = 0">初始化</div>
                    <div class="btns" @click="route = 1">WaterBall</div>
                    <div class="btns" @click="route = 2">barChart</div>
                    <div class="btns" @click="route = 7">PictureTree</div>
                    <div class="btns" @click="route = 8">ScrollTable</div>
                    <div class="btns" @click="route = 9">FiveNumber</div>
                    <div class="btns" @click="route = 10">ThreeNumInGrid</div>

                </div>
            </div>
            <div class="right">

                <div v-if="route == 0">
                    <A_0Init></A_0Init>
                </div>

                <div v-if="route == 1" class="rightMain ">
                    <A_1PictureTree></A_1PictureTree>
                </div>

                <div v-if="route == 2" class="rightMain ">
                    <A_2BarChart></A_2BarChart>
                </div>

                <div v-if="route == 7" class="rightMain ">
                    <A_3PictureTree></A_3PictureTree>
                </div>

                <div v-if="route == 8" class="rightMain ">
<!--                    <ScrollTable></ScrollTable>-->
                    <A_4ScrollTable></A_4ScrollTable>
                </div>

                <div v-if="route == 9" class="rightMain ">
                    <A_5FiveNumber></A_5FiveNumber>
                </div>

                <div v-if="route == 10" class="rightMain ">
<!--                    <ThreeNumInGrid></ThreeNumInGrid>-->
                    <A_6ThreeNumInGrid></A_6ThreeNumInGrid>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import A_0Init from "./views/A_0Init";

import "../lib/index.css";

import A_1PictureTree from "./views/A_1WaterBall";

// import ScrollTable from "../packages/abstruse-vue/vueConponents/ScrollTable/ScrollTable";
import {ScrollTable} from "../lib/index.common.js";

// import ThreeNumInGrid from "../packages/abstruse-vue/vueConponents/EchartInGrid/ThreeNumInGrid";
import {ThreeNumInGrid} from "../lib/index.common.js";

import A_2BarChart from "./views/A_2BarChart";
import A_3PictureTree from "./views/A_3PictureTree";
import A_4ScrollTable from "./views/A_4ScrollTable";
import A_5FiveNumber from "./views/A_5FiveNumber";
import A_6ThreeNumInGrid from "./views/A_6ThreeNumInGrid";

export default {
    components: {
        A_6ThreeNumInGrid,A_5FiveNumber,A_4ScrollTable,A_0Init, ThreeNumInGrid,  ScrollTable, A_1PictureTree, A_2BarChart,A_3PictureTree
    },
    data: function () {
        return {
            route: 8,
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
