<template>
  <form>
    <div class="row mb-3">
      <div class="offset-2 col-9 centre-top">
        <input type="text" class="form-control" id="name" :placeholder="name" />
        <input type="text" class="form-control" id="cost" :placeholder="cost" />
        <input type="text" class="form-control" id="date" :placeholder="date" />
      </div>
    </div>

    <button @click="faker()" class="btn btn-primary">Сгенерировать</button>
    <button @click="fillBase()" class="btn btn-primary">Заполнить базу</button>
    <button @click="fillManager()" class="btn btn-primary">
      Заполнить Манагеров
    </button>
  </form>
</template>

<script>
// import {fakers} from '@/components/Faker.js'
import { db } from "@/firebase/index";
export default {
  name: "Faker",
  data() {
    return {
      id: 0,
      name: "",
      addDate: 0,
      amount: 0,
      price: 0,
      article: 0,
      manager_id: "",
    };
  },
  methods: {
    faker() {
      var faker = require("faker");
      var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        timezone: "UTC",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      // this.name = faker.random.number({min: 1, max: 5});
      // this.cost = faker.commerce.price();
      // this.cost = faker.
      this.addDate = faker.date.past();

      console.log(this.addDate.toLocaleString("ru", options));
    },
    fillBase() {
      var faker = require("faker");
      var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        timezone: "UTC",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      for (let i = 1; i <= 500; i++) {
		let componentskey = db.ref().child('components').push().key;
        this.name = faker.vehicle.model();
        this.addDate = faker.date.past();
        this.addDate = this.addDate.toLocaleString("ru", options);
        this.amount = faker.random.number({ min: 1, max: 99 });
        this.cost = faker.commerce.price();
        this.article = faker.random.number({ min: 100001, max: 999999 });
        this.manager_id = faker.random.number({ min: 1, max: 7 });

        db.ref("components/" + componentskey + "/id").set(i);
        db.ref("components/" + componentskey + "/name").set(this.name);
        db.ref("components/" + componentskey + "/addDate").set(this.addDate);
        db.ref("components/" + componentskey + "/amount").set(this.amount);
        db.ref("components/" + componentskey + "/cost").set(this.cost);
        db.ref("components/" + componentskey + "/article").set(this.article);
        db.ref("components/" + componentskey + "/manager_id").set(this.manager_id);
        console.log(i);
      }
    },
    fillManager() {
      var faker = require("faker");

      for (let i = 1; i <= 7; i++) {
        let name = faker.name.findName();

		db.ref("managers/" + i + "/name").set(name);

		// запись в бд через ключ
        // db.ref().child("managers").push({
        //   id: i,
        //   name: name,
        // });


		// генерация ключа
		// let userkey = db.ref().child('users').push().key;


		// Получение ключа
		// let components = db.ref("managers");
		// components.on("value", (snapshot) => {
        // snapshot.forEach((childSnapshot) => {
        //   let childkey = childSnapshot.key;
		// 	console.log(childkey);
		// 	});
		// });

		
      }
    },
  },
};
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
