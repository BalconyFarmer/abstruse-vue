<template>
    <ul class="height-full overflow-auto x-table-body pos-rel" ref="tableBody" @mouseover="pauseScroll()" @mouseout="startScroll()">
        <slot></slot>
        <li class="no-data" v-if="scrollShow">暂无数据</li>
    </ul>
</template>

<script>
export default {
    name: "scroll-ul",
    data() {
        return {
            scrollTimer: null,
            scrollHeight: null,
            scrollLength: null,
            tableLoading: false
        };
    },
    props: ["list"],
    computed: {
        scrollShow() {
            return !this.list;
        }
    },
    methods: {
        autoScrollTable() {
            this.scrollHeight = document.querySelector(".x-table-body").scrollHeight - document.querySelector(".x-table-body").offsetHeight;
            this.scrollLength = document.querySelector(".x-table-body").scrollTop;

            console.log(this.scrollHeight, 'this.scrollHeight')
            // debugger
            if (this.scrollHeight > 0) {
                this.scrollTimer = setInterval(() => {
                    this.scrollLength++;
                    if (this.scrollLength >= this.scrollHeight) {
                        this.scrollLength = 0;
                    }
                    document.querySelector(".x-table-body").scrollTop = this.scrollLength;
                }, 50);
            }
        },
        pauseScroll() {
            clearInterval(this.scrollTimer);
        },
        startScroll() {

            this.autoScrollTable();
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.startScroll();
        });
    },
    beforeDestroy() {
        clearInterval(this.scrollTimer);
    }
};
</script>

<style scoped lang="scss">
.x-table-body {
    padding: 0px !important;
}

.pos-rel {
    position: relative;
}

.overflow-auto {
    overflow: auto;
}

.no-data {
    color: #ccc;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.height-full {
    height: 100%;
}

</style>
