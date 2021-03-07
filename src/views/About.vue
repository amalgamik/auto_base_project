<template>
  <div>
  	<nav-panel/>
	  <div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
	  </div>
	  <div class="about">
	    <h1>This is an about page</h1>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavPanel from '@/components/NavPanel.vue'

export default {
  name: 'about',
  components: {
    NavPanel,
  }
}
</script>
