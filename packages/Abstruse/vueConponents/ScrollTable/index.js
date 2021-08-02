// 引入组件
import ScrollTable from './ScrollTable';

// 提供 install 安装方法，供按需引入
ScrollTable.install = function (Vue) {
    //
    Vue.component(ScrollTable.name, ScrollTable)
}

export default ScrollTable
