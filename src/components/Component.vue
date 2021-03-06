<template>
	<li class="row">
		<div class="col-2"> {{ item.name }} </div>
		<div class="col-2"> {{ item.addDate }} </div>
		<div class="col-2"> {{ item.amount }} </div>
		<div class="col-2"> {{ item.cost }} </div>
		<div class="col-2"> {{ item.article }} </div>
		<div class="col-2"> {{ item.manager_id }} </div>
	</li>
</template>

<script>
export default {
  name: 'Component',
  props: ['item'],
  data () {
	  return {
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: flex;
  flex-wrap: nowrap;
  margin: 10px;
  padding-bottom: 15px;
}
li div {

}
</style>
