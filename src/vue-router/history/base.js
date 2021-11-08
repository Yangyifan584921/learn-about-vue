// HashHistory 和 BrowserHistory，他们均继承自路由的公共逻辑处理 History 类

/**
 * 通过路由记录，逐层进行路由匹配
 * @param {*} record 路由记录
 * @param {*} location 路径
 * @returns 逐层匹配后的全部匹配结果
 */
export function createRoute(record, location) {
  let res = []
  if(record) {
    while(record) {
      res.unshift(record)
      record = record.parent
    }
  }
  return {
    ...location,
    matches: res
  }
}
class History {
  constructor(router) {
    // 存储子类传入的路由
    this.router = router
    this.current = createRoute(null, {
      path: '/'
    })
  }
  /**
   * 根据路径进行路由匹配，并配置路径改变的监听事件
   * 路由跳转的方式：
   * 每次都需要知道from,to
   * 响应式：当路径发生变化的时候，更新视图
   */
  transtionTo(loaction, onComplete) {
    // 根据路径进行路由匹配
    let route = this.matcher.match(location)
    // 如果两次的路径一样，则不需要继续向下运行,切路由匹配的结果相等
    if(location === this.current.path && route.matched.length === this.current.matched.length) {
      return
    }
    this.updateRoute(route)
    onComplete && onComplete()
  }
  listen(cb) {
    this.cb = cb
  }
  /**
   * 路由变化时的相关操作：
   *  1，更新 current;
   *  2，触发_route的响应式更新;
   * @param {*} route 当前匹配到的路由结果
   */
  updateRoute(route) {
    // 每次切换路由的时候都要更改当前的current值
    this.current = route
    this.cb && this.cb(route)
  }
}

export { History }