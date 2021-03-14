<template>
  <div class="storeContainer">
    <div class="col-12">
      <div class="tableHead list-group-item list-group-item-info">
        <div class="id">Id</div>
        <div class="name">Component</div>
        <div class="addDate">Add date</div>
        <div class="quantity">Avaliable quantity</div>
        <div>Price</div>
        <div>Article</div>
        <div>Responsible manager</div>
      </div>
      <ul class="row">
        {{
          perPage()
        }}
        <componentBase
          :lineClass="index"
          :item="item"
          :manager="managerBase[item.manager_id - 1]"
          v-for="(item, index) in arr"
          :key="item"
        ></componentBase>
		<modal v-if="showModal">
			<!--
			you can use custom content here to overwrite default content
			-->
			<template v-slot:header>
			<h3>custom header</h3>
			</template>
		</modal>
      </ul>
    </div>
    <div class="col-12">
      <div class="row justify-content-center">
        <div class="col-3">
          <button class="btn btn-primary"><a href="#/store/addComponent">Add component</a></button>
          <button @click="perPage()"
		  class="btn btn-primary">Get List</button>
        </div>
        <div class="col-6">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            v-model="selectedOptionLocal"
            @change="getSelection(selectedOptionLocal)"
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
          @selectPage_="onSelectPage($event)"
          :page="page"
          v-for="page in pages"
          :key="page"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import ComponentBase from "@/components/ComponentBase.vue";
import PagesList from "@/components/PagesList.vue";
import Modal from "@/components/Modal.vue";
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: "StoreList",
  components: { ComponentBase, PagesList, Modal },
  data() {
    return {
		selectedOptionLocal: "",
    };
  },
  created () {
	  
	  
  },
  methods: {
	  ...mapMutations ([
		  'getSelection',
		  'onSelectPage',
		  'perPage',
	  ]),
	  ...mapActions ([
	  ]),
  },
  
  computed: {
	  ...mapGetters([
		  'managerBase',
		  'storeBase',
		  'storeBaseKey',
		  'arr',
		  'lineNumber',
		  'selectedPage',
		  'pages',
		  'showModal'
	  ]),
	  ...mapActions ([
	  ]),
  },
};
</script>

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
a {
	display: block;
	width: 100%;
	color: #fff;
	text-decoration: none!important;
}

.tableHead  {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 15px;
  padding: 0;
  justify-content: flex-start;
}
.tableHead div {
	display: flex;
	justify-content: flex-start;
	width: 15%;
}
.id {
	width: 5%!important;
	justify-content: center!important;

}
.name {
	width: 13%!important;
	font-size: 16px;
}
.storeContainer {
	padding: 0;
}
.quantity {
	width: 14%!important;
}
.addDate {
	justify-content: center!important;
}
</style>
