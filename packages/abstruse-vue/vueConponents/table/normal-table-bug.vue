<template>
    <div v-if="tableData" class="real-all">
        <!-- 标题-->
        <div class="header-table">
            <div>{{table0Title[0].name}}</div>
            <div>{{table0Title[0].name0}}</div>
            <div>{{table0Title[0].value}}</div>
            <div v-if="table0Title[0].count">{{table0Title[0].count}}</div>
        </div>

        <!--内容-->
        <div class="all-table">
            <div v-for="(item,index) in tableData" class="all-table-item">
                <div>{{ index+1 }}</div>
                <div>{{ item.name0 }}</div>
                <div>{{ item.value }}</div>
                <div v-if="item.count">{{ item.count }}</div>
            </div>
        </div>

    </div>


</template>

<script>
    export default {
        name: 'normal_table',
        props: ["tableData","table0Title"],
        data() {
            return {
                titleData: [],
                titleDataUnder: []
            }
        },
        watch: {
            tableData: {
                handler(newV) {
                    this.titleData = newV[0]
                    this.titleDataUnder = newV
                },
                deep: true
            }
        },
    }

</script>

<style lang="scss">
    $width0: 150px;
    $width: 200px;
    $marginLeft: 5px;

    .real-all {
        height: 100%;
        width: 100%;
        font-size: 20px;

        .header-table {

            color: white !important;

            div {
                display: inline-block;
                margin-left: $marginLeft;
                margin-top: $marginLeft;

            }

            :nth-child(1) {
                width: $width0;
                margin-left: 15px;
                font-weight: bold !important;
                color: white !important;
            }

            :nth-child(2) {
                width: $width;
                margin-left: 10px;
                font-weight: bold !important;
                color: white !important;
            }

            :nth-child(3) {
                width: 60px;
                margin-left: 10px;
                font-weight: bold !important;
                color: white !important;
            }

            :nth-child(4) {
                width: 60px;
                margin-left: 45px;
                font-weight: bold !important;
                color: white !important;
            }
        }

        .all-table {
            height: 100%;
            width: 100%;
            overflow: auto;
            color: #9DB6D3;
            margin-top: 10px;
            font-size: 20px;

            .all-table-item {
                margin-top: 10px;

                div {
                    display: inline-block;
                    margin-left: $marginLeft;
                    margin-top: $marginLeft;
                }

                :nth-child(1) {
                    width: $width0;
                    margin-left: 15px;
                }

                :nth-child(2) {
                    width: $width;
                }

                :nth-child(3) {
                    width: 60px;
                }

                :nth-child(4) {
                    margin-left: 60px;
                    width: 60px;
                }
            }
        }
    }


</style>
