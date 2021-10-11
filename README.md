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