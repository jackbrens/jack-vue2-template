
module.exports = {
  root: true,
  env: {
    node: true, // 启动 node 中全局变量
    browser: true // 启动浏览器中全局变量
  },
  // 继承 eslint 的规则
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2021,
    sourceType: "module"
  },
  rules: {
    // 不允许使用var变量
    "no-var": 2,
    // 必须使用全等
    eqeqeq: 2,
  }
};