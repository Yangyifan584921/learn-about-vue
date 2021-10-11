// HashHistory 和 BrowserHistory，他们均继承自路由的公共逻辑处理 History 类

class History {
  constructor(router) {
    // 存储子类传入的路由
    this.router = router
  }
  // 根据路径进行路由匹配，并配置路径改变的监听事件
  transtionTo(loaction, onComplete) {
    onComplete && onComplete()
  }
}

export { History }