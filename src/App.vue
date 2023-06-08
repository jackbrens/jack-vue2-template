<template>
<div>
  hello word
  <router-link to="/">首页</router-link>
  <router-link to="/about">关于我</router-link>
  <router-view />
</div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>

</style>