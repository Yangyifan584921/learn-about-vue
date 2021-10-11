import createRouteMap from "./create-route-map";
/**
 * @param {*} routes 
 * 功能：创建路由匹配函数
 * 
 * 1. 创建路由匹配器createeMatcher处理路由配置；将嵌套数组处理为扁平对象，便于路由匹配操作
 * 2. 创建match方法，用于通过路由规则匹配到对应的组件
 * 3. 创建addRoutes方法，用于动态添加路由匹配规则
 */
export default function createMatcher(routes) {
  // 路由配置的扁平化处理
  let { pathMap } = createRouteMap(routes)
  console.log('pathMap', pathMap)

  // 根据路径进行路由匹配
  function match(location) {
    let record = pathMap[location]
    console.log('record', record)
  }

  // 动态添加路由匹配规则
  function addRoute(routes) {
    createRouteMap(routes, pathMap)
  }

  return {
    addRoute, // 添加路由
    match // 匹配路径
  }
}