// 引入组件
import WaterBall from './waterBall';

// 提供 install 安装方法，供按需引入
WaterBall.install = function (Vue) {
    //
    Vue.component(WaterBall.name, WaterBall)
}

export default WaterBall
