
import install from './install'
// import createMatcher from './create-match'
class VueRouter {
  // 在外部初始话VueRouter的时候会传入配置对象
  constructor(options) {
    console.log('---options', options)
  }
  /**
   * 路由 初始化, 供install的时候调用
   * @param {*} app 根组件实例，在处理根组件的时候被调用
   */
  init(app) {
    console.log('init-app', app)
  }
}
// 当vue.use的时候，会自动执行插件上的install方法
VueRouter.install = install
export default VueRouter