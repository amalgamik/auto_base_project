<template>
	<div>
		<nav-panel/>
		<div class="home">
			<img alt="Vue logo" src="../assets/logo.png">
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import loginPage from '@/components/loginPage.vue'
import NavPanel from '@/components/NavPanel.vue'

export default {
  name: 'Home',
  components: {
    loginPage, NavPanel
  }
}
</script>

