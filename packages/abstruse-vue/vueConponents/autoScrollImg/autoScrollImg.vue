<template>
    <div class="imgAll">
        <div v-if="imgList.length > 4" class="leftIcon finger" @click="moveLeft"></div>
        <div v-if="imgList.length > 4" class="rightIcon finger" @click="moveRight"></div>
        <div class="bottomImg" id="bottomImg">
            <div v-for="item in imgList">
                <div class="title">{{item.name}}</div>
                <el-image
                    @click.native="handleClick"
                    style="width: 100%; height: 100%"
                    :src="item.value"
                    :preview-src-list="imgListUrls">
                </el-image>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "autoScrollImg.vue",
    data() {
        return {
            animationFlag: true,
            imgList: [
                {name:"人员力量",value:'data:image/jpeg;base64,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'},
                {name:"动物防控",value:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ffb6378175687.5e9603b1789d7.gif'},
                {name:"卡点环境",value:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/08289110776889.560eadbf24384.jpg'},
                {name:"防控设施",value:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/37875e122163855.60d4021cc4b16.jpg'},
                {name:"防控设施",value:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/37875e122163855.60d4021cc4b16.jpg'},
            ],
            imgListUrls: [

            ]
        }
    },
    methods: {
        handleClick() {
            console.log("###########################")
        },
        moveLeft() {
            const dom = document.getElementById("bottomImg")
            dom.style.left = (parseInt(dom.style.left) - 200) + "px"

        },
        moveRight() {
            const dom = document.getElementById("bottomImg")
            if (parseInt(dom.style.left) > 0) {

            } else {
                dom.style.left = (parseInt(dom.style.left) + 200) + "px"
            }
        },
        startAnimation() {
            const self = this
            const dom = document.getElementById("bottomImg")
            dom.style.left = "0px"
            setInterval(function () {
                if (parseInt(dom.style.left) < -40000) {
                    dom.style.left = "0px"
                } else {
                }
                if (self.animationFlag) {
                    dom.style.left = (parseInt(dom.style.left) - 1) + "px"
                }
            }, 10)
        },
        addEvent() {
            if (this.imgList.length > 4) {
                const dom = document.getElementById("bottomImg")
                const self = this
                dom.addEventListener("mouseover", function () {
                    self.animationFlag = false
                })
                dom.addEventListener("mouseout", function () {
                    self.animationFlag = true
                })

                function addArrToEnouth() {
                    let a = 100 / this.imgList.length
                    let newArr = []
                    for (let i = 0; i < a; i++) {
                        newArr.push(...this.imgList)
                    }
                    this.imgList = newArr
                }

                addArrToEnouth.bind(this)()

            }

        }

    },
    mounted() {
        this.startAnimation()
        this.addEvent()

        if (this.imgList.length <= 4) {
            this.animationFlag = false
        }

        this.imgList.forEach(item => {
            this.imgListUrls.push(item.value)
        })
    }
}
</script>

<style scoped lang="scss">
.imgAll {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    color: white;

    .leftIcon {
        background-image: url("./img/left.png");
        background-size: 100% 100%;
        position: absolute;
        left: 0px;
        top: 130px;
        width: 200px;
        height: 200px;
        z-index: 999;
    }

    .rightIcon {
        background-image: url("./img/right.png");
        background-size: 100% 100%;
        position: absolute;
        right: 0px;
        top: 130px;
        width: 200px;
        height: 200px;
        z-index: 999;

    }

    .bottomImg {
        width: 40000px;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        overflow-y: hidden;

        div {
            display: inline-block;
            margin: 30px;
            width: 400px;
            height: 350px;
        }
        .title {
            width: 100%;
            height: 20px;
            text-align: center;
            font-size: 20px;
        }


    }
}


</style>
