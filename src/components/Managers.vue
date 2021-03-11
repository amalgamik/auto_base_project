<template>
  <option :value="index + 1">
    <div>
      {{ manager.name }}
    </div>
  </option>
</template>

<script>
export default {
  name: "Managers",
  props: ["manager", "index"],
  data() {
    return {};
  },
  methods: {
	  show () {
		  console.log(manager);
	  }
  },
};
</script>

<style scoped>
</style>
