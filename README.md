# jack-vue2-template



# 项目介绍

- 本项目基于 `webpack5` 从 0 到 1 搭建 `vue2` 项目。
- 你可以使用此项目搭建拓展属于你的项目。
- 觉得有用的，欢迎 `star`，十分感谢！！！



# 使用方式：

```shell
# 克隆项目
git clone https://github.com/jackbrens/jack-baby-cli.git

# 安装依赖
npm install

# 启动项目
npm run dev
```





# 踩坑合集



## vue2 和 vue-template-compiler 的版本号必须要一致，否则报错

报错内容：

```
Cannot read property ‘parseComponent‘ of undefined
```

正确安装如下：

```js
// 例如
"vue": "2.6.12" 
// 对应
"vue-template-compiler": "2.6.12"
```



## 解决 history 模式下刷新 404 问题

```js
devServer: {
    host: 'localhost',
    port: 8080,

    // 解决 history 模式下刷新 404 问题
    historyApiFallback: {
      index: '/index.html'
    }
  },
```





# 接下来的计划



## 整合成 create 项目创建新的脚手架，类似 vue-cli



## 可以选择是否安装eslint和pretter，或者可以选择vue2和vue3两个版本等等



## 将husky、eslint、pretter、commitlint、editorConfig整合成插件，上传到npm

