<template>
    <div class="pictrueTreeAll">
        <div class="first">
            <div class="item" v-for="item in picData.data1">
                <img @click="onClick(item.img)" :src="item.img"/>
                <div class="text">书记: {{ item.name }}</div>
                <div class="text">{{ item.age }}岁</div>
                <div class="text">{{ item.edu }}</div>
            </div>
        </div>
        <div class="first">
            <div class="item" v-for="item in picData.data2">
                <img @click="onClick(item.img)" :src="item.img"/>
                <div class="text">副书记: {{ item.name }}</div>
                <div class="text">{{ item.age }}岁</div>
                <div class="text">{{ item.edu }}</div>
            </div>
        </div>
        <div class="third">
            <div class="item" v-for="item in picData.data3">
                <img @click="onClick(item.img)" :src="item.img"/>
                <div class="text">平民: {{ item.name }}</div>
                <div class="text">{{ item.age }}岁</div>
                <div class="text">{{ item.edu }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PictureTree",
    props: ["picData"],
    data() {
        return {

        }
    },
    methods: {
        onClick(params) {
            this.$emit("toMain",params);
        },
    }

};
</script>

<style scoped lang="scss">
.pictrueTreeAll {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .text {
        font-size: 10px;
    }

    .item {
        width: 90px;
        height: 160px;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .headIcon {
            width: 90px;
            height: 120px;
            background-image: url("./imgs/manAvatar.jpg");
            background-size: cover;
        }

        img {
            width: 50px;
            height: 60px;
        }
    }

    .first {
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .third {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

}
</style>
