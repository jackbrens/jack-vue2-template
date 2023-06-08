<template>
  <div class="hello">
    <img
        style="margin-top: 50px;border-radius: 50%"
        width="300"
        height="300"
        src="https://p1.itc.cn/images01/20210825/639327c671ae4d7b9c5867005fc7b15c.jpeg"
        alt=""
    />
    <h1>Welcome to Your Vue.js App</h1>
    <p>你好，我是
      <b style="color: #41B883"><a style="color: #41B883" href="https://github.com/jackbrens" target="_blank">罐头先生</a></b>
      ，本项目是基于 webpack5 从 0 到 1 搭建 vue2 项目。
    </p>
    <p>你可以使用此项目搭建拓展属于你的项目。</p>
    <p>觉得有用的，欢迎 star，十分感谢！！！</p>
    <p>
      <a style="color: #41B883" href="https://github.com/jackbrens/jack-vue2-template" target="_blank">
        https://github.com/jackbrens/jack-vue2-template
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWord"
}
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>