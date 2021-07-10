/**
 * 扩展自定义表单项所需的Mixin
 * @example ../../docs/DynFormItemMixin.md
 */
export default {
  props: {
    /**
     * 表单项配置信息
     */
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    /**
     * 表单数据
     */
    formData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    /**
     * 表获取表单项的自定prop配置
     * @return {any}
     */
    cusProps() {
      return this.item.cusProps
    },
    /**
     * 获取表单项的自定义event配置
     * @return {any}
     */
    cusEvents() {
      return this.item.cusEvents
    },
    /**
     * 获取表单项的值
     */
    itemValue: {
      set(newValue) {
        this.formData[this.item.prop] = newValue
      },
      get() {
        return this.formData[this.item.prop]
      }
    },
    /**
     * 获取表单项所需的其他数据
     * @return {any}
     */
    cusData() {
      return this.item.cusData
    }
  }
}
