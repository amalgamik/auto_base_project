<template>
  <div class="col-12">
	  <ul>
		  <component :item="item" v-for="item in storeBase" :key="storeBase"></component>
	  </ul>
  </div>
  <button @click="readBase()"  class="btn btn-primary">Read Base</button>
</template>

<script>

import {db} from '@/firebase/index'
import component from '@/components/Component.vue'
export default {
  name: 'StoreList',
  components: { component },
  data () {
	  return {
		storeBase:[],
	  }
  },
  methods: {
	readBase () {
		console.log(this.storeBase);
		console.log(typeof(this.storeBase));
		let components = db.ref('components');
		components.once('value', (snapshot) => {
			snapshot.forEach((childSnapshot) => {
				let childData = childSnapshot.val();
			this.storeBase.push(childData);
			})
		})
			console.log(this.storeBase);
	// readBase () {
	// 	var components = db.ref('components');
	// 	components.on('value', function(snapshot) {
	// 	snapshot.forEach(function(childSnapshot) {
	// 	var childData = childSnapshot.val();
	// 	console.log(childData);
	// 	});
	// })
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
