<template>
  <li>
    <div @click="selectPage()">
      {{ page }}
    </div>
  </li>
</template>

<script>
export default {
  name: "pageList",
  props: ["page"],
  data() {
    return {};
  },
  methods: {
    selectPage() {
      this.$emit("selectPage_", { data: this.page });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin: 10px;
}
li div {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 15px;
  justify-content: flex-start;
  cursor: pointer;
}
</style>
