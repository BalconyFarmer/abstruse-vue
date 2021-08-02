// 引入组件
import BarChart from './barChart';

// 提供 install 安装方法，供按需引入
BarChart.install = function (Vue) {
    //
    Vue.component(BarChart.name, BarChart)
}

export default BarChart
