<template>
  <div>
    <div class="col-12">
      <ul class="row">
        <componentBase
          :lineClass="index"
          :item="item"
		  :manager = "managerBase[item.manager_id]"
          v-for="(item, index) in storeBase"
          :key="storeBase"
        ></componentBase>
      </ul>
    </div>
    <button @click="readBase()" class="btn btn-primary">Read Base</button>
    <button @click="readManager()" class="btn btn-primary">Read Manager</button>
  </div>
</template>

<script>
import { db } from "@/firebase/index";
import componentBase from "@/components/ComponentBase.vue";
export default {
  name: "StoreList",
  components: { componentBase },
  data() {
    return {
      storeBase: [],
      managerBase: [],
    };
  },
  methods: {
    readBase() {
      this.storeBase.length = 0;
      console.log(this.storeBase);
      console.log(typeof this.storeBase);
      let components = db.ref("components");
      components.on("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          let childData = childSnapshot.val();
          this.storeBase.push(childData);
        });
      });
      console.log("111111");
    },
    readManager() {
      this.managerBase.length = 0;
      console.log(this.managerBase);
      console.log(typeof this.managerBase);
      let components = db.ref("managers");
      components.on("value", (snapshot) => {
        let Data = snapshot.val();
        this.managerBase = Data;
      });
      console.log("222222");
      console.log(this.managerBase);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
