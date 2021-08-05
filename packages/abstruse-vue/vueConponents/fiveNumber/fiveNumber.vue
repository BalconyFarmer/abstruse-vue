<template>

    <div class="innerImg">
        <img class="org-structure" src="./imgs/ic_org_bg.png" alt="">
        <div class="org-item org-item-1">
            <div class="img-box">
                <img src="./imgs/ic_org_c.png" alt="">
                <div class="item-label">{{ fData[0] + "%" }}</div>
            </div>
            <p>离退休</p>
        </div>
        <div class="org-item org-item-2">
            <div class="img-box">
                <img class="routeImg" src="./imgs/ic_org_c.png" alt="">
                <div class="item-label">{{ fData[1] + "%" }}</div>
            </div>
            <p>男性</p>
        </div>
        <div class="org-item org-item-3">
            <div class="img-box">
                <img class="routeImg" src="./imgs/ic_org_c.png" alt="">
                <div class="item-label">{{ fData[2] + "%" }}</div>
            </div>
            <p>本科以上</p>
        </div>
        <div class="org-item org-item-4">
            <div class="img-box">
                <img class="routeImg" src="./imgs/ic_org_c.png" alt="">
                <div class="item-label">{{ fData[3] + "%" }}</div>
            </div>
            <p>少数民族</p>
        </div>
        <div class="org-item org-item-5">
            <div class="img-box">
                <img class="routeImg" src="./imgs/ic_org_c.png" alt="">
                <div class="item-label">{{ fData[4] + "%" }}</div>
            </div>
            <p>资深老党员</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "fiveNumber",
    props: ["fData"],

}
</script>

<style scoped lang="scss">

.innerImg {
    border: 1px solid gray;
    width: 100%;
    height: 100%;
    position: relative;

    .org-structure {
        width: 100%;
        height: 100%;
    }

    .org-item {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            color: #fff;
        }

        .img-box {
            //@include flex-center(center);
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 70px;
            height: 70px;
            position: relative;

            img {
                height: 100%;
                animation: rotateImg 5s linear infinite;
                position: absolute;
            }

            @keyframes rotateImg {
                0% {
                    -webkit-transform: rotate(0deg);
                }
                25% {
                    -webkit-transform: rotate(90deg);
                }
                50% {
                    -webkit-transform: rotate(180deg);
                }
                75% {
                    -webkit-transform: rotate(270deg);
                }
                100% {
                    -webkit-transform: rotate(360deg);
                }
            }

            .item-label {
                color: #158D3B;
                font-size: 20px;
                font-weight: bold;
                position: absolute;
                z-index: 2;
                margin-top: 20px;
            }
        }

        // 离退休
        &.org-item-1 {
            right: 20px;
            top: 250px;
        }

        // 男性
        &.org-item-2 {
            right: 20px;
            top: 100px;
        }

        // 本科以上
        &.org-item-3 {
            top: 10px;
            left: calc(50% - 30px);
        }

        // 少数民族
        &.org-item-4 {
            left: 20px;
            top: 100px;
        }

        // 资深老党员
        &.org-item-5 {
            left: 20px;
            top: 250px;
        }
    }
}
</style>
