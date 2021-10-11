import { History } from './base'
// hash模式下，路径会默认携带'/'，在HashHistory初始化的时候进行配置
function ensureSlash() {
  if(window.location.hash) {
    return
  }
  window.location.hash = '/'
}
class HashHistory extends History {
  constructor(router) {
    // 调用父类的构造函数并传入router实例
    super(router)
    // 存储实例
    this.router = router
    ensureSlash()
  }
  getCurrentLoction() {
    // 获取路由的hash值
    return getHash()
  }
  setupListener() {
    // 当路径的hash值发生变化时候，改变hash值，并且对路由进行重新匹配
    window.addEventListener('hashchange', () => {
      this.transtionTo(getHash())
    })
  }
}

export default HashHistory