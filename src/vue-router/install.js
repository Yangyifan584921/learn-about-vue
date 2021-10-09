// install.js最终会导出一个符合Vue插件机制的函数

export let _Vue
/**
 * 插件安装入口逻辑
 * @param {*} Vue Vue的构造函数
 * @param {*} options 插件的选项
 */
export default function install(Vue) {
  _Vue = Vue

  // 目标：使每一个组件的实例都能拿到根组件的router路由实例，即：路由实例向所有的组件共享
  // 实现方案：通过Vue.mixin为每一个组件如果根组件的router的实例
  Vue.mixin({
    // 在每个组件创建前，为其混入beforeCreate生命周期函数，绑定router实例，实现router实例在所有的组件上的共享
    beforeCreate () {
      // 这样，所有的组件都能通过this._routerRoot._router获取到同一个router实例
      // 这里的this指向当前组件实例
      if(this.$options.router) { // 根组件才有router，因为只在main.js的new Vue中注册了router
        console.log('根节点', this)

        // 为根组件添加$_routerRoot属性并指向根组件
        this._routerRoot = this
        // 为根组件添加_router属性并指向this.$options.router
        this._router = this.$options.router

      } else { // 子组件
        console.log('子组件', this)

        // 将父组件的_routerRoot传递给子组件
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
    }
  })

  // 在Vue全局上注册两个组件
  Vue.component('router-link', {
    render: h => h('a', {}, '')
  })
  Vue.component('router-view', {
    render: h => h('div', {}, '')
  })
  // 在Vue原型上添加两个属性
  Vue.prototype.$route = {}
  Vue.prototype.$router = {}
}