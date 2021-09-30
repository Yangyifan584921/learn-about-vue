<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <el-tab-pane
      :key="item.name"
      v-for="item in editableTabs"
      :label="item.title"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: '',
      editableTabs: [{
        name: 'home',
        path: '/home/index'
      }, {
        name: 'list',
        path: '/list/index'
      }]
    }
  },
  methods: {
    handleTabsEdit() {

    },
  }
}
</script>

<style>

</style>