<template>
    <div class="item-info">
        <div class="item-label">{{ data.num1 }}</div>
        <div class="item-count">{{ data.num2 }}</div>
        <div class="item-label">{{ data.num3 }}</div>
        <img class="item-img" :src="require(`./img/ic_hx-1.png`)" alt="">
    </div>
</template>

<script>
export default {
    name: "rollImg",
    props: ["data"]
}
</script>

<style scoped lang="scss">
.item-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    color: #fff;
    .item-label {
        font-size: 14px;
    }

    .item-count {
        font-size: 30px;
    }

    .item-img {
        width: 200px;
        height: 200px;
        position: absolute;
        z-index: 8999;
        animation: rotateImg 5s linear infinite;
    }


    @keyframes rotateImg {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
}

</style>
