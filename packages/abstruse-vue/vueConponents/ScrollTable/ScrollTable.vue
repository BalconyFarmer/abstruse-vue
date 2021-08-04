<template>
    <div style="width: 100%;height: 100%;color: white">
        <div class="rank-head rank-row">
            <div class="rank">名次</div>
            <div class="pm-name">党组织</div>
            <div class="po-name">先锋指数</div>
        </div>
        <div class="rank-body">
            <scroll-ul :list="activeList.length" v-if="activeList.length">
                <li class="rank-row" v-for="(item, index) in activeList" @click=""
                    :key="index">
                    <div class="rank">NO.{{ index + 1 }}</div>
                    <div class="pm-name">{{ item.po_name }}</div>
                    <div class="po-name">{{ item.po_full_name}}
                    </div>
                </li>
            </scroll-ul>
        </div>
    </div>
</template>

<script>
import ScrollUl from './scroll-ul'
export default {
    name: "ScrollTable",
    components: {ScrollUl},
    data() {
        return {
            activeList: [
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
                {pm_name: "xxx支部",po_name: 'xxxxx', po_full_name: "110"},
            ],
        }
    }
}
</script>

<style scoped lang="scss">
.rank-row {
    display: flex;
    align-items: center;
    color: #a2a3a6;
    font-size: 18px;

    &.rank-head {
        height: 50px;
    }

    .rank {
        width: 20%;
    }

    .pm-name {
        width: 60%;
    }

    .po-name {
        width: 20%;
    }
}
.rank-body {
    height: calc(100% - 40px);
    overflow: hidden;
}
</style>
