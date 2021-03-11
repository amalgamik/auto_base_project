<template>
  <form>
    <div class="row mb-3 justify-content-center">
      <label for="inputEmail3" class="col-sm-2 col-form-label" >Login</label>
      <div class="col-sm-4">
        <input @click="addLead()" type="email" class="form-control" id="inputEmail3">
      </div>
    </div>
    <div class="row mb-3 justify-content-center">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-4">
        <input @click="readBase()" type="password" class="form-control" id="inputPassword3">
      </div>
    </div>

    <button class="btn btn-primary"><a href="#/Home">Войти</a></button>
  </form>

</template>

<script>

import {db} from '@/firebase/index'
export default {
  name: 'loginPage',
  props: {
    msg: String
  },
  data () {
	  return {
	  }
  },
  methods: {
	addLead () {
		var clientEmail = document.getElementById('inputEmail3').value;
		var clientPass = document.getElementById('inputPassword3').value;
	
		var newClientKey = db.ref().child('users').push().key;
		db.ref('users/' + newClientKey + '/name').set(clientEmail);
		db.ref('users/' + newClientKey + '/pass').set(clientPass);
		console.log('i`m working')
	},
	readBase () {
		var users = db.ref('users');
		users.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		var childData = childSnapshot.val();
		console.log(childData);
		});
	})
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
	display: block;
	width: 100%;
	color: #fff;
	text-decoration: none!important;
}
</style>
