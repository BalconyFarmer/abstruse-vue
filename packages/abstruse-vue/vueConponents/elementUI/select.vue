<template>

    <div>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    name: "select.vue",
    data() {
        return {
            options: [{
                value: "一级党委",
                label: "一级党委"
            }, {
                value: "二级党委",
                label: "二级党委"
            }],
            value: "一级党委",
        };
    },
}
</script>

<style lang="scss">
.el-scrollbar__wrap {
    background-color: #001D56 !important;
}

.el-select-dropdown__item {
    span {
        color: #B9BEC8 !important;
    }
}

.el-input--suffix .el-input__inner {
    background-color: #001D56 !important;
}

.el-select-dropdown__list {
    background-color: #001D56 !important;
}

.el-input--suffix .el-input__inner {
    color: white;
}
</style>
