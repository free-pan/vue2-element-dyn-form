## 扩展表单项示例

```html
<!--
DynInput 组件
@creator pan
@date 2021-07-10
-->
<template>
  <el-input v-model="itemValue" v-bind="cusProps" v-on="cusEvents"></el-input>
</template>

<script>
import DynFormItemMixin from './DynFormItemMixin'

export default {
  name: 'DynInput',
  mixins: [DynFormItemMixin]
}
</script>
```

```html
<!--
DynSelect 组件
@creator pan
@date 2021-07-10
-->
<template>
  <el-select v-bind="cusProps" v-on="cusEvents" v-model="itemValue">
    <el-option
      v-for="item in cusData"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
import DynFormItemMixin from './DynFormItemMixin'

export default {
  name: 'DynSelect',
  mixins: [DynFormItemMixin],
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {
    console.log('DynSelect created')
  },
  updated() {
    console.log('DynSelect updated')
  },
  watch: {},
  methods: {}
}
</script>
```
## 使用示例

### 简单使用

```[import](../examples/views/BasicDemo.vue)
Text typed here will be entirely ignored. You can use it to describe the example imported for maintenance purposes
```

### 查看模式与编辑模式

```[import](../examples/views/WatchModelDemo.vue)
Text typed here will be entirely ignored. You can use it to describe the example imported for maintenance purposes
```

### 级联操作

```[import](../examples/views/CascadeOperateDemo.vue)
Text typed here will be entirely ignored. You can use it to describe the example imported for maintenance purposes
```
