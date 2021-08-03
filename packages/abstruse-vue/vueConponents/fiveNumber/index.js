// 引入组件
import fiveNumber from './fiveNumber';

// 提供 install 安装方法，供按需引入
fiveNumber.install = function (Vue) {
    //
    Vue.component(fiveNumber.name, fiveNumber)
}

export default fiveNumber
