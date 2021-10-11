import { History } from './base'
class BoswerHistory extends History {
  constructor(router) {
    // 调用父类的构造函数并传入router实例
    super(router)
    // 存储实例
    this.router = router
  }
  setupListener() {
    window.addEventListener('popState', () => {
      // 当路径发生改变的时候，重新匹配路由
      this.transtionTo(getHash())
    })
  }
}
export default BoswerHistory