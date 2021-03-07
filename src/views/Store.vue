<template>
  <div>
  	<nav-panel/>
	  <div class="faker">
	    <img alt="Vue logo" src="../assets/logo.png">
	  </div>
	  <div class="container">
		  <div class="row">
			<storeList/>
		  </div>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreList from '@/components/StoreList.vue'
import NavPanel from '@/components/NavPanel.vue'
export default {
  name: 'Store',
  components: {StoreList, NavPanel}
}
</script>
