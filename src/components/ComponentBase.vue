<template>
  <li class="col-12">
    <div
      :class="[
        lineClass % 2 === 0 ? 'list-group-item-info' : 'list-group-item-dark',
        'list-group-item',
      ]"
    >
      <div class="id">{{ item.id }}</div>
      <div class="name">{{ item.name }}</div>
      <div>{{ item.addDate }}</div>
      <div class="amount">{{ item.amount }}</div>
      <div>{{ item.cost }}</div>
      <div>{{ item.article }}</div>
      <div>{{ manager.name }}</div>

      <div>
      	<button @click="visibility = !visibility">Add to reserv</button>
	    <button id="show-modal" @click="setShowModal({show: true})">Delete</button>
		<modal :key="lineClass" :keyDB='$store.state.storeBaseKey[lineClass]' :indexDB="lineClass" v-if="showModal" @close="setShowModal({show: false})">
			<!--
			you can use custom content here to overwrite default content
			-->
			<template v-slot:header>
			<h3>custom header</h3>
			</template>
		</modal>
	  </div>
    </div>
    <form v-if="visibility">
      <div>Set quantity</div>
      <input
        v-model="quantity"
        type="number"
        min="0"
        :max="item.amount"
        name="quantity"
        id="quantity"
      />
      <button @click="addToReserv($event)">Add</button>
    </form>
  </li>
</template>

<script>
import Modal from '@/components/Modal'
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: "ComponentBase",
  components: { Modal },
  props: ["item", "lineClass", "manager"],
  data() {
    return {
      visibility: false,
      quantity: 0,
	  keyDB: '',
	  indexDB: 0,
    };
  },
  methods: {
    addToReserv(event) {
      event.preventDefault();
        // this.visibility = false
    },
	...mapMutations ([
		'setShowModal'
	])
  },
  computed: {
	  ...mapGetters ([
		  'showModal'
	  ])
  },
};
</script>

<style scoped>
li div {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 15px;
  justify-content: space-between;
}
li div div {
  width: 13%;
}
.id {
  width: 5% !important;
}
.name {
  width: 10% !important;
}
.amount {
  justify-content: center;
}
button {
  justify-content: flex-end;
}
</style>
