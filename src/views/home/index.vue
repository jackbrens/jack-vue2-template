<template>
	<div class="home"><hello-word /></div>
</template>

<script>
import HelloWord from '@/components/HelloWord'
export default {
	name: 'Home',
	components: { HelloWord },

	data() {
		return {
			name: 'jack',
		}
	},
	created() {
		console.log('hello home')
	},
}
</script>

<style scoped></style>
