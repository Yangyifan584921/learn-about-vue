<template>
  <el-container>
    <LeftSilde/>
    <MainContainer/>
  </el-container>
</template>

<script>
import LeftSilde from './components/leftSlide.vue'
import MainContainer from './components/main/index.vue'
export default {
  components: {
    LeftSilde,
    MainContainer
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  display: flex;
}
</style>