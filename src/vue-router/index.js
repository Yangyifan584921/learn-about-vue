import HashHistory from './history/hash'
import BrowserHistory from './history/history'
import install from './install'
import createMatcher from './create-match'

/**
 * 父类和子类的方法设计：
 * base.js
 *  transtionTo:根据路由进行匹配跳转
 * hash.js
 *  getCurrentLocation:获取当前路径的hash值
 *  setUpListener:监听路径的hashchange事件
 * history.js
 *  getCurrentLocation:获取当前路径的path值
 *  setupListener:监听路径的papstate事件
 */

class VueRouter {
  // 在外部初始话VueRouter的时候会传入配置对象
  constructor(options) {
    // 创建路由匹配函数
    this.matcher = createMatcher(options.routes) || {}
    // 默认是hash
    options.mode = options.mode || 'hash'
    // 不同的路由模式
    /**
     * 无论是那种类型，都需要获取当前路径进行路由匹配和跳转
     * 路径获取：hash模式获取当前路径的哈希值，history模式获取当前路径的path
     * 路由监听：hash模式监听hashchange事件，history模式监听popstate事件
     */
    switch(options.mode) {
      case 'hash':
        this.history = new HashHistory(this)
        break;
      case 'history':
        this.hostory = new BrowserHistory(this)
        break;
    }
  }
  /**
   * 路由 初始化, 供install的时候调用
   * @param {*} app 根组件实例，在处理根组件的时候被调用
   */
  init(app) {
    console.log('app', app)
    // 监听路由的变化，跳转到对应的路径上
    const history = this.history
    // 设置监听器，内部是不同的实现
    const setUpListener = () => {
      history.setupListener()
    }
    // 初始化的时候，获取当前的hash值进行跳转，并设置监听器
    history.transtionTo(history.getCurrentLoction(), setUpListener)
  }
  /**
   * 根据路径匹配到路由映射表matcher中进行路由匹配
   * @param {*} location 
   * @returns 匹配结果数组
   * 
   * 备注：根据类的封装性设计原则，再History类中，不能直接访问matcher，需要通过类方法match对外提供数据访问
   */
  match(location) {
    return this.matcher.macth(location)
  }
}
// 当vue.use的时候，会自动执行插件上的install方法
VueRouter.install = install
export default VueRouter