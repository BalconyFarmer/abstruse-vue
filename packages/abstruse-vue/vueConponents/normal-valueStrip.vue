<template>
    <div class="_all">
        <div class="value-strip" v-for="item in value">
            <div class="name">{{ item.name }}</div>
            <div class="backgroud">
                <div class="value" :style="{width: item.rate * 8 + 'px'}">{{ item.rate }}%</div>
            </div>
            <div class="value1">{{ item.cnt }}/{{ item.pm_count }}</div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'naomalValueStrip',
    data() {
        return {
            value: []
        }
    },
    props: {
        data11: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        data11: {
            handler(newV) {


                if (newV) {
                    this.value = this.data11.map(item => {
                        return {
                            name: item.region_name, rate: item.rate, cnt: item.cnt, pm_count: item.pm_count
                        }
                    })
                }

            },
            deep: true,
            immediate: true

        }
    },
    mounted() {

    }
}

</script>

<style lang="scss" scoped>

._all {
    width: 100%;
    height: 100%;
    color: white;
    border: 4px solid yellow;

}

.value-strip {
    margin-top: 38px;

    .name {
        display: inline-block;
        color: white;
        font-size: 20px;
        margin-right: 25px;
        height: 28px;
        position: relative;
        top: -8px;
        left: 0px;
    }

    .value1 {
        display: inline-block;
        margin-left: 25px;
        color: white;
        font-size: 20px;
        height: 28px;
        position: relative;
        top: -8px;
        left: 0px;
    }

    .backgroud {
        background-color: rgba(49, 134, 162, 0.5);
        width: 800px;
        height: 28px;
        display: inline-block;
        border-radius: 14px;

        .value {
            //background-color: rgba(82, 242, 234, 0.9);
            background-image: linear-gradient(to right, rgba(71, 134, 247, 1), rgba(255, 255, 255, 0.7));
            width: 50px;
            height: 28px;
            border-radius: 14px;
            display: inline-block;
            text-align: right;
            color: #fef37e;
            font-size: 24px;
        }
    }

}
</style>
