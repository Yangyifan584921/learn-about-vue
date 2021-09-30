<template>
  <el-container>
    <el-main>
      <TopSide/>
      <router-view></router-view>
    </el-main>
  </el-container>
  
</template>

<script>
import TopSide from './topSide.vue'
export default {
  components: {
    TopSide
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  width: 80%;
  height: 100vh;
}
</style>