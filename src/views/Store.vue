<template>
  <div class="faker">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <div class="container">
	  <div class="row">
		<storeList/>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreList from '@/components/StoreList.vue'
export default {
  name: 'Store',
  components: {StoreList}
}
</script>
