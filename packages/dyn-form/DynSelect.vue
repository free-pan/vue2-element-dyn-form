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
  created() {},
  updated() {},
  watch: {},
  methods: {}
}
</script>
