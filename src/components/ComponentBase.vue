<template>
  <li class="col-12">
    <div
      :class="[
        lineClass % 2 === 0
          ? 'list-group-item-info'
          : 'list-group-item-dark',
        'list-group-item',
      ]"
    >
      <div>{{ item.name }}</div>
      <div>{{ item.addDate }}</div>
      <div>{{ item.amount }}</div>
      <div>{{ item.cost }}</div>
      <div>{{ item.article }}</div>
      <div>{{ manager.name }}</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "ComponentBase",
  props: ["item", "lineClass", "manager"],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li div {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 15px;
  justify-content: space-evenly;
}
li div {
}
</style>
