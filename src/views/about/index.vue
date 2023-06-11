<template>
	<div>about~~~~~{{ about }}~~~</div>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			about: '关于我们',
		}
	},
	created() {
		let a = 2
		console.log(a)
	},
}
</script>

<style scoped></style>
