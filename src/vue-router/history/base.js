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
  // 根据路径进行路由匹配，并配置路径改变的监听事件
  transtionTo(loaction, onComplete) {
    onComplete && onComplete()
  }
}

export { History }