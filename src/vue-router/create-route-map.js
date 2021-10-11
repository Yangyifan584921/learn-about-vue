/**
 * 功能：路由配置扁平化处理
 * @param {*} routes 路由实例中的路由配置
 * @param {*} oldPathMap 路由规则映射表
 * @returns 新的路由映射规则
 */
export default function createRouteMap(routes, oldPathMap) {
  // 拿到旧的路由映射表
  let pathMap = oldPathMap || Object.create(null)
  routes.forEach(route => {
    addRouteRecord(route, pathMap)
  })
  return {
    pathMap
  }
}

/**
 * 添加一个路由记录(递归当前的树形路由配置)
 * 深度遍历：先放入当前的路由，在递归他的子级
 * @param {*} route 原始路由记录
 * @param {*} pathMap 路由规则的扁平化规则
 * @param {*} parent 当前路由所属的父级路由对象
 */
function addRouteRecord(route, pathMap, parent) {
  // 处理子路由的时候，需要做路由地址的拼接
  let path = parent ? (parent.path + '/' + route.path) : route.path
  // 构造路由记录对象(还包括：meta，name, props, refirect...)
  let record = {
    path,
    component: route.component,
    parent // 表示当前路由的父级路由对象
  }
  // 查重：路由定义不能重复，否则就使用第一个
  if(!pathMap[path]) {
    // 将当前的路由映射关系保存起来
    pathMap[path] = record
  }
  // 递归处理当前路由的子路由
  if(route.children) {
    route.children.forEach(child => {
      addRouteRecord(child, pathMap, record)
    })
  }
}