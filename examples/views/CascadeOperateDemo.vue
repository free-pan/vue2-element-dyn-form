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
  name: 'CascadeOperateDemo',
  components: {},
  data() {
    return {
      formData: {
        name: '黑子',
        addr: '',
        province: null,
        city: null
      },
      dynFormRef: 'dynFormRef',
      // 是否为查看模式
      watchModel: false,
      // 当前省份的城市列表
      cityList: [],
      provinceList: [
        {
          label: '湖南省',
          value: 1,
          cityList: [
            { label: '长沙', value: 1 },
            { label: '岳阳', value: 2 }
          ]
        },
        {
          label: '广东省',
          value: 2,
          cityList: [
            { label: '广州', value: 3 },
            { label: '深圳', value: 4 }
          ]
        }
      ]
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
          prop: 'province',
          compName: this.watchModel ? 'DynView' : 'dyn-select',
          label: '省份',
          cusData: this.provinceList,
          cusProps: {
            clearable: true
          },
          cusEvents: {
            change: (selectedValue) => {
              this.formData.city = null
              const selectedProvince = this.provinceList.find(
                (item) => item.value === selectedValue
              )
              if (selectedProvince) {
                this.cityList = selectedProvince.cityList
              }
            }
          }
        },
        {
          prop: 'city',
          compName: this.watchModel ? 'DynView' : 'dyn-select',
          label: '城市',
          show: () => this.formData.province,
          cusData: this.cityList
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
