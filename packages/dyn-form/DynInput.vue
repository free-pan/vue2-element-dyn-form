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
