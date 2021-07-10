import _DynFormItemMixin from './DynFormItemMixin'
// 导入组件，组件必须声明 name
import DynForm from './DynForm.vue'

// 为组件提供 install 安装方法，供按需引入
DynForm.install = function (Vue) {
  Vue.component(DynForm.name, DynForm)
}

// 默认导出组件
export default DynForm
export const DynFormItemMixin = _DynFormItemMixin
