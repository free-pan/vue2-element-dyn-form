<template>
  <div>
    <el-button @click="watchModel = !watchModel"
      >{{ watchModel ? '切换到编辑模式' : '切换到查看模式' }}
    </el-button>
    <el-button @click="handleSetFormValue">设置表单值</el-button>
    <el-button @click="handleSetErrorMessage">手动设置错误信息</el-button>
    <el-button @click="handleClearErrorMessage">清除表单错误信息</el-button>
    <p>
      {{ formData }}
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
  name: 'WatchModelDemo',
  components: {},
  data() {
    return {
      formData: {
        name: '黑子',
        addr: '',
        hobby: 1
      },
      dynFormRef: 'dynFormRef',
      // 是否为查看模式
      watchModel: false
    }
  },
  computed: {
    formItemConfig() {
      return [
        {
          prop: 'name',
          compName: this.watchModel ? 'DynView' : 'DynInput',
          label: '姓名'
        },
        {
          prop: 'addr',
          compName: this.watchModel ? 'DynView' : 'DynInput',
          label: '住址'
        },
        {
          prop: 'hobby',
          compName: this.watchModel ? 'DynView' : 'dyn-select',
          label: '爱好',
          cusData: [
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
    }
  }
}
</script>
