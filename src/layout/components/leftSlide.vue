<template>
  <el-aside class="aside">
    <!-- default-active是显示高亮必须的属性 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      unique-opened
      @open="handleOpen">
      <el-submenu 
        v-for="(item, index) in routers" 
        :key="index" 
        :index="item.path">
        <template slot="title">
          <i class="el-icon-platform-eleme"></i>
          <span>{{item.zhName}} {{item.path}}</span>
        </template>
        <!-- index是必须存在的，没有的话子菜单不可以点击，且index的值要与default-active的值一样 -->
        <el-menu-item
         v-for="(childItem, childIndex) in item.children" 
         :key="childIndex" 
         :index="item.path + '/' + childItem.path" 
         @click="handleOpen(item.path + '/' + childItem.path)">
          <span slot="title">{{childItem.zhName}} {{item.path + '/' + childItem.path}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
</template>

<script>
import { routers } from '@/router/index.js'
export default {
  data() {
    return {
      routers
    }
  },
  methods: {
    handleOpen(key) {
      console.log(key)
      this.$router.push(key)
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  height: 100%;
}
.el-menu-vertical-demo {
  text-align: left;
}
</style>