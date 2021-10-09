// https://xie.infoq.cn/article/afb4889fc2c1fd64c07e9b835?source=app_share

import install from './install'
class VueRouter {
  // 在外部初始话VueRouter的时候会传入配置对象
  constructor(options) {
    console.log('---options', options)
  }
}
// 当vue.use的时候，会自动执行插件上的install方法
VueRouter.install = install
export default VueRouter