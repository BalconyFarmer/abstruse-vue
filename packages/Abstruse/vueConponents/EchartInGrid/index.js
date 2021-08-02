// 引入组件
import ThreeNumInGrid from './ThreeNumInGrid';

// 提供 install 安装方法，供按需引入
ThreeNumInGrid.install = function (Vue) {
    //
    Vue.component(ThreeNumInGrid.name, ThreeNumInGrid)
}

export default ThreeNumInGrid
