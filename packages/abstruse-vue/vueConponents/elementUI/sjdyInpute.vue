<template>
    <div class="pxb-input">
        <el-autocomplete
            v-model="inputStr"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
        ></el-autocomplete>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    name: "sjdyInpute.vue",
    data() {
        return {
            restaurants: [],
            inputStr: null
        };
    },
    computed: {
        ...mapGetters({
            test: "sjdys/test",
            videoRegionCode: "sjdys/videoRegionCode"
        })
    },
    watch: {
        inputStr: {
            async handler() {
                // if (this.videoRegionCode && this.inputStr) {
                //     const res = await sjdyMap(this.videoRegionCode, this.inputStr);
                //     if (res.data) {
                //         let res11 = res.data
                //         this.restaurants = []
                //         res.data.forEach(item => {
                //             if (item.dev_name && item.po_code) {
                //                 this.restaurants.push({
                //                     value: item.dev_name,
                //                     address: item.po_code,
                //                     allData: item
                //                 })
                //             }
                //         })
                //     }
                // } else if (this.inputStr == "") {
                //     this.changenowPoint("")
                // }
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        ...mapMutations({
            changenowPoint: "sjdys/changenowPoint"
        }),
        querySearch(queryString, cb) {
            let restaurants = this.restaurants;
            let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            this.changenowPoint(item.allData);
        },
        loadAll() {
            return [];
        }
    },
    mounted() {
        this.restaurants = this.loadAll();
    }
};
</script>

<style lang="scss">
input[type=text], input[type=date] {
    background: rgba(13, 58, 147, 0.3);
    padding: 0.375rem 0.75rem;
}

.el-input__inner {
    background-color: rgba(13, 58, 147, 0.3);
    border: 1px solid #1244AF;
    color: white;
}

.el-autocomplete-suggestion li:hover {
    background-color: rgba(13, 58, 147, 0.3);
    color: white;
}

.el-autocomplete-suggestion li:hover {
    background-color: rgba(13, 58, 147, 0.3);
    color: white;
}

.inAll {
    width: 100%;
}

</style>
