<template>
    <div class="all">
        <div class="allInner">
            <div class="shyk-tips">
                <div class="tips-item"><i class="integral-icon integral-icon-one"></i><i>60分</i>
                </div>
                <div class="tips-item"><i class="integral-icon integral-icon-two"></i><i>60分~90分</i>
                </div>
                <div class="tips-item"><i class="integral-icon integral-icon-three"></i><i> 90分</i>
                </div>
            </div>
            <div class="border-title-wrapper flex-item-1 pos-rel overflow-hidden">
                <div class=" dy-part height-full pos-rel">
                    <div class="border1 dy-item-1 around dyjf-box" v-for="(item,index) in dyjfOption"
                         :key="index">
                        <p class="month-p ">{{ `${item.MONTH}月` }}</p>
                        <i class="integral-icon integral-icon-one integral-icon-box dyjf-mouth-box">{{ item.num_60 }}</i>
                        <!--党课-->
                        <i class="integral-icon integral-icon-two integral-icon-box dyjf-mouth-box">{{ item.num_60_90 }}</i>
                        <!--党员大会-->
                        <i class="integral-icon integral-icon-three integral-icon-box dyjf-mouth-box">{{ item.num_90 }}</i>
                        <!--支委会-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThreeNumInGrid",
    data() {
        return {
            dyjfOption: [
                {
                    MONTH: "1",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "2",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "3",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "4",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "5",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "6",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "7",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "8",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "9",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "10",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                }, {
                    MONTH: "11",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },
                {
                    MONTH: "12",
                    num_60: 10,
                    num_60_90: 10,
                    num_90: 10
                },

            ]
        }
    }
}
</script>

<style scoped lang="scss">


.all {
    width: 100%;
    height: 100%;
    .allInner {
        width: 90%;
        height: 90%;
    }
}
.border1 {
    border: 0.1px solid #ffffff;
    box-sizing: border-box;
}
.shyk-tips {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 15px;

    .tips-item {
        display: flex;
        align-items: center;
        color: #fff;

        i:first-child {
            margin-right: 10px;
        }

        &:not(:last-child) {
            margin-right: 20px;
        }
    }
}

.shyk-i {
    font-size: 24px;
    cursor: pointer;

    &.iconkecheng- {
        color: #ca7369;
    }

    &.iconhuiyi {
        color: #e7d393;
    }

    &.iconcunweihui {
        color: #4cd2da;
    }
}

.iconfont {
    font-size: 30px;
    color: #ccc;
}

.border-title-wrapper {
    width: 100%;
    height: 100%;
    margin: 40px;
}

.flex-item-1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.pos-rel { position: relative; }
.overflow-hidden { overflow:hidden; }
.integral-icon {
    display: inline-block;
    margin-right: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;

    &-box {
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        font-style: normal;
    }

    &-one {
        background-color: #666;
    }

    &-two {
        background-color: #333;
    }

    &-three {
        background-color: #000;
    }
}

.dyjf-mouth-box {
    margin-top: 20px
}

.dy-part {

    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: #fff;


    &:last-child {
    }

    .dy-item {
        flex: 1;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &:last-child {
        }

        .dot-box {
            position: absolute;
        }

        .month-label {
            position: absolute;
            top: -30px;
            left: 0;
            font-size: 13px;
            white-space: nowrap;
        }
    }

    .dy-item-1 {
        width: 25%;
        height: 33.3333%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &.around {
            justify-content: space-around;
        }

        &:nth-child(4n) {
        }

        &:nth-child(9) {
        }

        &:nth-child(10) {
        }

        &:nth-child(11) {
        }

        &:nth-child(12) {
        }

        .month-p {
            position: absolute;
            top: 3px;
            left: 3px;
        }
    }
}
.height-full { height: 100%; }
.dyjf-box i:first-child {
    margin-left: 10px;
}

</style>