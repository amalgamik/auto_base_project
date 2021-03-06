<template>
  <form>
    <div class="row mb-3">
      <div class="offset-2 col-9 centre-top">
        <input type="text" class="form-control" id="name" :placeholder="name">
        <input type="text" class="form-control" id="cost" :placeholder="cost">
        <input type="text" class="form-control" id="date" :placeholder="date">
      </div>
    </div>
   

    <button @click="faker()"  class="btn btn-primary">Сгенерировать</button>
    <button @click="fillBase()"  class="btn btn-primary">Заполнить базу</button>
  </form>

</template>

<script>

// import {fakers} from '@/components/Faker.js'
import {db} from '@/firebase/index'
export default {
  name: 'Faker',
  data () {
	  return {
		  id: 0,
		  name: '',
		  addDate: 0,
		  amount: 0,
		  price: 0,
		  article:0,
		  manager_id:''
	  }
  },
  methods: {
	addLead() {
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
	},
	faker () {
		var faker = require('faker');
		var options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			timezone: 'UTC',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
			};
		// this.name = faker.random.number({min: 1, max: 5});
		// this.cost = faker.commerce.price();
		// this.cost = faker.
		this.addDate = faker.date.past();

		console.log(this.addDate.toLocaleString("ru", options));
	},
	fillBase () {
		var faker = require('faker');
		var options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			timezone: 'UTC',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		};
		for (let i = 1; i<=500; i++){

		this.name = faker.vehicle.model();
		this.addDate = faker.date.past();
		this.addDate = this.addDate.toLocaleString("ru", options)
		this.amount = faker.finance.amount();
		this.cost = faker.commerce.price();
		this.article = faker.random.number({min: 100001, max: 999999});
		this.manager_id = faker.random.number({min: 1, max: 7});

		db.ref('components/' + i + '/name').set(this.name);
		db.ref('components/' + i + '/addDate').set(this.addDate);
		db.ref('components/' + i + '/amount').set(this.amount);
		db.ref('components/' + i + '/cost').set(this.cost);
		db.ref('components/' + i + '/article').set(this.article);
		db.ref('components/' + i + '/manager_id').set(this.manager_id);
		console.log(i);
		}
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
  color: #42b983;
}
</style>
