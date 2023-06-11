<template>
	<div class="app">
		<div>
			<router-link to="/">首页</router-link>
			<router-link to="/about">关于我们</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style scoped>
.app {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
