<template>
  <div>
    <div class="col-12">
      <div class="tableHead list-group-item list-group-item-info">
        <div>Component</div>
        <div>Add date</div>
        <div>Avaliable quantity</div>
        <div>Price</div>
        <div>Article</div>
        <div>Responsible manager</div>
      </div>
      <ul class="row">
        {{
          readManagerBase_
        }}
        {{
          readComponentBase_
        }}
        {{
          perPage_
        }}
        <componentBase
          :lineClass="index"
          :item="item"
          :manager="$store.state.managerBase[item.manager_id]"
          v-for="(item, index) in $store.state.arr"
          :key="$store.state.storeBaseKey[index]"
        ></componentBase>
      </ul>
    </div>
    <div class="col-12">
      <div class="row justify-content-center">
        <div class="col-3">
          <button @click="readBase()" class="btn btn-primary">Read Base</button>
        </div>
        <div class="col-6">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            v-model="$store.state.selectedOption"
            @change="getSelection_()"
          >
            <option disabled value="">Select line</option>
            <option value="10">10 line</option>
            <option value="20">20 line</option>
            <option value="30">30 line</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <ul class="pages">
        <pages-list
          @selectPage_="onSelectPage_($event)"
          :page="page"
          v-for="page in $store.state.pages"
          :key="$store.state.pages"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import componentBase from "@/components/ComponentBase.vue";
import PagesList from "@/components/pagesList.vue";
export default {
  name: "StoreList",
  components: { componentBase, PagesList },
  data() {
    return {
    //   storeBase: [],
    //   storeBaseKey: [],
    //   managerBase: [],
    //   selectedOption: "",
    //   pages: 0,
    //   arr: [],
    //   selectedPage: 1,
    //   lineNumber: "",
    };
  },
  methods: {
    getSelection_() {
	  this.$store.commit("getSelection"); 
    },
    onSelectPage_(data) {
	  this.$store.commit("onSelectPage", data); 
    },
    
  },
  computed: {
	  readManagerBase_() {
      this.$store.commit("readManagerBase");
    },
    readComponentBase_() {
      this.$store.commit("readComponentBase");
    },
    perPage_() {
      this.$store.commit("perPage");
    },
    // readManagerBase() {
    //   //Получаем список менеджеров
    //   this.managerBase.length = 0;
    //   let manager = db.ref("managers");
    //   manager.on("value", (snapshot) => {
    //     let Data = snapshot.val();
    //     this.managerBase = Data;
    //   });
    // },
    // readComponentBase() {
    //   //Получаем список деталей
    //   this.storeBase.length = 0;
    //   let components = db.ref("components");
    //   components.on("value", (snapshot) => {
    //     snapshot.forEach((childSnapshot) => {
    //       let childData = childSnapshot.val();
    // 	  this.storeBaseKey.push(childSnapshot.key);
    //       this.storeBase.push(childData);
    //     });
    //   });
    // },
    // perPage() {
    //пагинация
    //   this.lineNumber == "" ? (this.lineNumber = 5) : this.lineNumber;
    //   let startPoint = (this.selectedPage - 1 ) * +this.lineNumber;
    //   this.arr = this.storeBase.slice(
    //     startPoint,
    //     (startPoint + +this.lineNumber)
    //   );
    //   this.pages = Math.ceil(this.storeBase.length / this.lineNumber);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tableHead {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 15px;
  justify-content: space-evenly;
}
ul {
  list-style-type: none;
  padding: 0;
}
.pages {
  display: flex;
  flex-wrap: wrap;
}
</style>
