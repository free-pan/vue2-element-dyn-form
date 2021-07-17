<template>
  <el-form v-bind="elFormConfig" :ref="elFormRef" :model="value">
    <template v-for="(item, idx) in formItemArrConfig">
      <el-form-item
        :class="item.prop + '-' + item.compName"
        v-if="itemShow(item)"
        :label="item.label"
        :prop="item.prop"
        :key="item.prop + '-' + idx + '-' + item.compName"
        :rules="item.rules"
      >
        <component :is="item.compName" :item="item" :form-data="value" />
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import CommUtil from 'panzy-comm-js'
import DynInput from './DynInput'
import DynSelect from './DynSelect'
import DynView from './DynView'

/**
 * 基于 Element UI 2.x 的动态表单组件
 * @requires ./DynInput.vue
 * @requires ./DynSelect.vue
 * @requires ./DynView.vue
 * @example ../../styleguide-docs/DynForm.md
 */
export default {
  name: 'DynForm',
  components: {
    DynInput,
    DynSelect,
    DynView
  },
  props: {
    /**
     * 表单数据
     */
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    /**
     * 表单配置.支持element ui表单的所有配置
     */
    elFormConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    /**
     表单项配置
     <pre>
     [
     {
          prop:string, // 必填.该值将用于el-form-item的props和key
          compName:string, // 必填.组件名称
          label:string, // 可选.该值将用于el-form-item的label
          rules:array,  // 可选.验证规则
          show:boolean|function, // 默认为true, 表示当前表单项是否显示
          cusData:any, // 可选.存放组件需要的额外数据, 如: select的下拉选项值
          cusProps:object, // 可选.用于配置自定义组件额外的prop(如果直接使用的element-ui组件,那么请将element-ui组件支持的prop写在该对象)
          cusEvents:object, // 可选.用于配置自定义组件额外的event事件监听(如果直接使用的element-ui组件,那么请将element-ui组件支持的event写在该对象)
      }
     ]
     </pre>
     */
    formItemArrConfig: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      elFormRef: 'jsonForm'
    }
  },
  created() {},
  updated() {},
  methods: {
    /**
     * 判断当前表单项是否需要显示
     * @param {object} item 配置项
     * @return {*}
     */
    itemShow(item) {
      if (typeof item.show === 'function') {
        return item.show(item, this.value)
      } else if (typeof item.show === 'boolean') {
        return item.show
      } else {
        return true
      }
    },
    /**
     * 执行表单验证
     * @example
     * 调用示例: const ret = await $refs.dynForm.validate()
     * @public
     * @return Promise 表单验证结果
     */
    validate() {
      const formInstance = this.getElFormInstance()
      const validateResult = {
        // 表单验证是否通过
        valid: false,
        // 校验未通过字段
        errorFields: null
      }
      return new Promise((resolve) => {
        formInstance.validate((valid, errorFields) => {
          if (valid) {
            validateResult.valid = valid
            resolve(validateResult)
          } else {
            validateResult.errorFields = errorFields
            resolve(validateResult)
            return false
          }
        })
      })
    },
    /**
     * 清除表单错误信息
     * @public
     * @param {string | Array| undefind} props 表单项的prop值. 不传则清空所有表单项的错误信息
     */
    clearValidate(props) {
      const formInstance = this.getElFormInstance()
      if (props) {
        formInstance.clearValidate()
      } else {
        formInstance.clearValidate(props)
      }
    },
    /**
     * 获取表单数据(该数据是deep clone之后的结果, 修改该数据, 不会影响表单数据)
     * @example
     * 调用示例: const formData = await $refs.dynForm.getData()
     * @public
     * @return obj deep clone之后的表单数据
     */
    getData() {
      // 避免外部修改该表单返回数据时, 影响内部的表单数据
      return CommUtil.deepClone(this.value)
    },
    /**
     * 手动给表单项设置自定义错误提示信息
     * @public
     * @param {string} prop 表单字段(与表单配置的prop对应)
     * @param {string} errorMsg 错误提示信息
     */
    setFieldErrorMsg(prop, errorMsg) {
      const fieldsArr = this.getElFormInstance().fields
      if (fieldsArr && fieldsArr.length > 0) {
        let fieldInfo = null
        for (let i = 0; i < fieldsArr.length; i++) {
          fieldInfo = fieldsArr[i]
          if (fieldInfo.prop === prop) {
            fieldInfo.validateState = 'error'
            fieldInfo.validateMessage = errorMsg
            break
          }
        }
      }
    },
    /**
     * 获取element ui的表单实例
     * @example
     * 调用示例: const instance = $refs.dynForm.getElFormInstance()
     * @public
     * @return {Vue | Element | (Vue | Element)[] | undefined}
     */
    getElFormInstance() {
      return this.$refs[this.elFormRef]
    }
  }
}
</script>
