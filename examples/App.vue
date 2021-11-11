<template>
    <div id="app">
        <div class="mainFirst">
            <div class="left">
                <div class="leftList">
                    <div class="btns" @click="route = 0">初始化</div>
                    <div class="btns" @click="route = 15">rollImg</div>
                    <div class="btns" @click="route = 13">BreathNumber</div>
                    <div class="btns" @click="route = 1">WaterBall</div>
                    <div class="btns" @click="route = 2">barChart</div>
                    <div class="btns" @click="route = 7">PictureTree</div>
                    <div class="btns" @click="route = 8">ScrollTable</div>
                    <div class="btns" @click="route = 9">FiveNumber</div>
                    <div class="btns" @click="route = 10">ThreeNumInGrid</div>
                    <div class="btns" @click="route = 11">table</div>
                    <div class="btns" @click="route = 14">valueStrip</div>
                    <div class="btns" @click="route = 16">poker</div>
                    <div class="btns" @click="route = 12">autoScrollImg</div>
                    <div class="btns" @click="route = 17">Elementui</div>

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
                    <A_4ScrollTable></A_4ScrollTable>
                </div>

                <div v-if="route == 9" class="rightMain ">
                    <A_5FiveNumber></A_5FiveNumber>
                </div>

                <div v-if="route == 10" class="rightMain ">
                    <!--                    <ThreeNumInGrid></ThreeNumInGrid>-->
                    <A_6ThreeNumInGrid></A_6ThreeNumInGrid>
                </div>

                <div v-if="route == 11" class="rightMain ">
                    <A_7Table></A_7Table>
                </div>

                <div v-if="route == 12" class="rightMain ">
                    <autoScrollImg></autoScrollImg>
                </div>

                <div v-if="route == 13" class="rightMain ">
                    <A_11BreathNumber></A_11BreathNumber>
                </div>

                <div v-if="route == 14" class="rightMain ">
                    <A_8valueStrip></A_8valueStrip>
                </div>

                <div v-if="route == 15" class="rightMain ">
                    <A_9rollImg></A_9rollImg>
                </div>

                <div v-if="route == 16" class="rightMain ">
                    <A_10Poker></A_10Poker>
                </div>

                <div v-if="route == 17" class="rightMain ">
                    <A_12ElementUI></A_12ElementUI>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import A_0Init from "./views/A_0Init";

import "../lib/index.css";

import A_1PictureTree from "./views/A_1WaterBall";
import A_11BreathNumber from "./views/A_11BreathNumber";
import {ThreeNumInGrid} from "../lib/index.common.js";

import A_2BarChart from "./views/A_2BarChart";
import A_3PictureTree from "./views/A_3PictureTree";
import A_4ScrollTable from "./views/A_4ScrollTable";
import A_5FiveNumber from "./views/A_5FiveNumber";
import A_6ThreeNumInGrid from "./views/A_6ThreeNumInGrid";
import A_7Table from "./views/A_7Table";
import autoScrollImg from "../packages/abstruse-vue/vueConponents/autoScrollImg/autoScrollImg";
import BreathNumber from "../packages/abstruse-vue/vueConponents/BreathNumber/BreathNumber";
import A_8valueStrip from "./views/A_8valueStrip";
import A_9rollImg from "./views/A_9rollImg";
import A_10Poker from "./views/A_10Poker";
import A_12ElementUI from "./views/A_12ElementUI";

export default {
    components: {
        A_12ElementUI,
        A_11BreathNumber,
        A_10Poker,
        A_9rollImg,
        A_8valueStrip,
        BreathNumber,
        A_7Table,
        A_6ThreeNumInGrid,
        A_5FiveNumber,
        A_4ScrollTable,
        A_0Init,
        ThreeNumInGrid,
        A_1PictureTree,
        A_2BarChart,
        A_3PictureTree,
        autoScrollImg
    },
    data: function () {
        return {
            route: 17,
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
