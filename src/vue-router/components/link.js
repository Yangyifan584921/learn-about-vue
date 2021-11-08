/**
 * 每次点击<router-link>组件时，都会进行 hash 值的切换；
 * <router-link>组件可以接收来自外部的传参；
 * <router-link>组件渲染后返回的内容包括：元素标签 + 点击跳转事件 + 插槽等；
 */
export default {
  name: 'routerLink',
  props: {
    to: {
      type: String,
      require: true
    }
  },
  render() {
    return <a></a>
  }
}