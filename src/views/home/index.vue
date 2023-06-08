<template>
  <div class="home">Home {{ name }}</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: 'jack'
    }
  },
  created() {
    console.log('hello home')
  }
}
</script>

<style scoped>
.home {
  width: 500px;
  height: 500px;
  background: url("../../assets/images/223819.jpg") no-repeat;
  background-size: cover;
}
</style>