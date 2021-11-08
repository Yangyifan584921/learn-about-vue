# vue-router-pro

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 1.
参考链接：https://xie.infoq.cn/article/afb4889fc2c1fd64c07e9b835?source=app_share
- 创建vue-router目录结构
- 插件引入入口index.js逻辑实现
- 插件安装入口install.js逻辑实现
- 为所有组件混入router实现

### 2. 
参考链接：https://xie.infoq.cn/article/b18475963f60b95880cfce362?source=app_share
- 路由安装的初始化：init 方法；
- 路由初始化：constructor 构造函数逻辑；
- 创建路由匹配器：createMatcher；
- match 方法 和 addRoutes 方法的实现；

### 3.
参考链接：https://xie.infoq.cn/article/01c4fe7c4400e3e774dcf7ec4?source=app_share
- 创建两种路由模式类；
- 父类和子类继承方法的设计；
-路由初始化 init 处理逻辑；

### 4.
参考链接：https://xie.infoq.cn/article/df4e3a07efc04650ceadcda6d?source=app_share
- 实现路由匹配
#### 路由匹配分析
- 通过路由匹配器对路由配置进行扁平化处理
```
{'/': Record1, '/user': Record2, '/user/info': Record3 }
```
- 接下来，进行路由匹配，如果访问的路径是：/user/info，那么路由匹配的结果将是两条记录：
```
// 先匹配到 /user 之后，才能匹配到 /user/info；
matches:[Record2, Record3]
```
> 所以，一个路由可能会命中多个匹配规则

### 5.
参考链接：https://xie.infoq.cn/article/afb07cac24e06fce275018ca2?source=app_share
- 更新当前路由的匹配结果；
- 路由更新前的查重；
- 路由的响应式实现；

### 6.
参考链接：https://xie.infoq.cn/article/87ac77b11a2114e82661590d5
- 介绍了$route、$router 与 router-link 组件的实现，主要涉及以下内容：
  - 定义原型方法 $route 和 $router；
  - <router-link>组件的功能和实现；
