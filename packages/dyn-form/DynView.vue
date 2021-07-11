<!--
DynView 组件
@creator pan
@date 2021-07-10
-->
<template>
  <div>
    {{ itemValue }}
  </div>
</template>

<script>
import DynFormItemMixin from './DynFormItemMixin'

export default {
  name: 'DynView',
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
