<template>
    <div class="base-item">
        <img src="./img/person-total1.png" alt="">
        <span class="num num-1">{{ data.num1 }}</span>
        <span class="unit">{{ data.num2 }}</span>
        <p>{{ data.num3 }}</p>
    </div>
</template>

<script>
export default {
    name: "BreathNumber.vue",
    props: ["data"]
}
</script>

<style scoped lang="scss">
@keyframes scaleImg {
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.1)
    }
    100% {
        transform: scale(1)
    }
}

.base-item {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    p {
        font-size: 15px;
        color: #fff;
        font-weight: bold;
        position: absolute;
        top: 204px;
    }

    .num {
        font-size: 25px;
        font-weight: bold;
        position: absolute;
        top: 55px;
        letter-spacing: 3px;

        &.num-1 {
            color: #75e2ff;
        }

        &.num-2 {
            color: #60bbff;
        }

        &.num-3 {
            color: #acc4ff;
        }
    }

    .unit {
        font-size: 15px;
        color: #fff;
        position: absolute;
        top: 100px;
    }

    img {
        height: 90%;
        animation: scaleImg 2s linear infinite;
    }
}
</style>
