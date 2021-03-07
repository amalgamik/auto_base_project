<template>
  <div>
  	<nav-panel/>
	  <div class="faker">
	    <img alt="Vue logo" src="../assets/logo.png">
	    <faker> </faker>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import faker from '@/components/Faker.vue'
import NavPanel from '@/components/NavPanel.vue'

export default {
  name: 'FakerBase',
  components: {
    faker,
    NavPanel,
  }
}
</script>
