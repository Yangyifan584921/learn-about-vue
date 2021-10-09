<template>
  <ul class="list">
    <li v-for="(item, index) in list" :key="index">{{item.name}}</li>
  </ul>
</template>

<script>
export default {
  name: 'list-component',
  data() {
    return {
      list: [
        {
          name: '苹果'
        },
        {
          name: '香蕉'
        },
        {
          name: '帅哥'
        }
      ]
    }
  }
}
</script>

<style>

</style>