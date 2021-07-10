<template>
  <div>
    <el-button @click="handleSetFormValue">设置表单值</el-button>
    <el-button @click="handleSetErrorMessage">手动设置错误信息</el-button>
    <el-button @click="handleFormValidate">表单验证</el-button>
    <el-button @click="handleClearErrorMessage">清除表单错误信息</el-button>
    <p>
      {{ formData }}
    </p>
    <p>
      {{ validateResult }}
    </p>
    <dyn-form
      :value="formData"
      :form-item-arr-config="formItemConfig"
      :ref="dynFormRef"
    ></dyn-form>
  </div>
</template>

<script>
export default {
  name: 'BasicDemo',
  components: {},
  data() {
    return {
      formData: {
        name: '黑子',
        addr: '',
        hobby: 1,
        country: 3
      },
      dynFormRef: 'dynFormRef',
      /**
       * 可选爱好列表
       */
      hobbyList: [],
      /**
       * 可选国籍
       */
      countryList: [],
      validateResult: null
    }
  },
  computed: {
    formItemConfig() {
      return [
        {
          prop: 'name',
          compName: 'DynInput',
          label: '姓名'
        },
        {
          prop: 'addr',
          compName: 'DynInput',
          label: '住址',
          rules: [{ required: true, message: '住址必填!' }]
        },
        {
          prop: 'hobby',
          compName: 'dyn-select',
          label: '爱好',
          cusProps: {
            clearable: true
          },
          cusData: this.hobbyList
        },
        {
          prop: 'country',
          compName: 'dyn-select',
          label: '国家',
          cusProps: {
            clearable: true
          },
          cusData: this.countryList
        }
      ]
    }
  },
  methods: {
    handleSetErrorMessage() {
      this.$refs[this.dynFormRef].setFieldErrorMsg(
        'name',
        '这是手动设置的错误信息!'
      )
    },
    handleSetFormValue() {
      this.formData.name = '张三'
      this.formData.addr = '故宫'
    },
    handleClearErrorMessage() {
      this.$refs[this.dynFormRef].clearValidate('name')
    },
    async handleFormValidate() {
      this.validateResult = await this.$refs[this.dynFormRef].validate()
    }
  },
  created() {
    setTimeout(() => {
      // 模拟网络请求
      this.hobbyList = [
        {
          label: '篮球',
          value: 1
        },
        {
          label: '足球',
          value: 2
        },
        {
          label: '乒乓球',
          value: 3
        }
      ]
    }, 2000)
    setTimeout(() => {
      // 模拟网络请求
      this.countryList = [
        {
          label: '中国',
          value: 1
        },
        {
          label: '韩国',
          value: 2
        },
        {
          label: '日本',
          value: 3
        }
      ]
    }, 4000)
  }
}
</script>
