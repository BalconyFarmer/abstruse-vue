<template>
    <div class="x-poker-num" v-if="countl.length">
        <template></template>
        <div class="x-poker-item" :style="{ 'background-color': backgroundColor }" :class="{ dot : item === '.' }"
             v-for="(item, index) in countl" :key="index">
            <div class="digital-wrapper" :class="'count-' + item" v-if="item !== '.'">
                <div class="digital" v-for="p in count">{{ p }}</div>
            </div>
            <div v-else>.</div>
        </div>
        <div class="x-unit" :style="{ fontSize: unitSize + 'px' }">{{ unitName }}</div>
    </div>
</template>

<script>

/**
 * @function 把数字切分成数组,不够的前面加0
 * @param { 需要处理的数字 } num
 * */
export function dealNumber(num, total) {
    let arr = num.toString().split("");
    let len = total - arr.length;
    for(let i = 0; i < len; i++) {
        arr.unshift(0);
    }
    return arr;
}


export default {
    name: "Poker",
    data() {
        return {
            count: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            countl: []
        };
    },
    props: {
        num: {type: Number, default: () => 0},
        unit: {type: String, default: () => "个"},
        backgroundColor: {type: String, default: () => "#014C9C"},
        unitSize: {type: String, default: () => "14"}
    },
    watch: {
        num: {
            handler() {
                this.init();
            },
            immediate: true
        }
    },
    computed: {
        unitName() {
            return this.unit || "个";
        }
    },
    methods: {
        init() {
            setTimeout(() => {
                if (this.num) {
                    this.countl = dealNumber(this.num, this.num.length);
                } else {
                    this.countl = [0];
                }
            }, 700);
        }
    },
    mounted() {
        let _this = this;
        this.$nextTick(() => {
            if (this.num) {
                for (let i = 0; i < this.num.toString().length; i++) {
                    _this.countl.push(0);
                }
                ;
            } else {
                _this.countl = [0];
            }
        });
    }
};
</script>

<style scoped lang="scss">
.digital-wrapper {
    text-align: center; /*transform: translateY(-20px);*/
    @for $i from 0 through 9 {
        &.count-#{$i} {
            transform: translateY(-50 * $i - 1px);
        }
        transition: all 1s ease-in-out;
    }

    .digital {
        font-size: 40px;
        background: #014C9C;
        -webkit-background-clip: text;
        text-shadow: 3px 3px 5px rgba(#666, 0.4);
    }
}

//卡牌数字
.x-poker-num {
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    .x-poker-item {
        float: left;
        width: 40px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin: 0 3px;
        background-size: 100% 100%;
        background: #c0cd11;

        &.dot {
            height: 5px;
            width: 5px;
        }

        span {
            font-size: 20px;
            background: #014C9C;
            -webkit-background-clip: text;
            text-shadow: 3px 3px 5px rgba(#666, 0.4);
        }
    }

    .x-unit {
        margin-left: 5px;
        float: left;
        white-space: nowrap;
    }
}
</style>
