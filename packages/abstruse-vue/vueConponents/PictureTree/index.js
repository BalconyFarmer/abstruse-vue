// 引入组件
import PictureTree from './PictureTree';

// 提供 install 安装方法，供按需引入
PictureTree.install = function (Vue) {
    //
    Vue.component(PictureTree.name, PictureTree)
}

export default PictureTree
