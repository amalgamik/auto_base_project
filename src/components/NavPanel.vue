<template>
  <nav id="nav" class="nav nav-pills nav-fill">
    <router-link class="nav-link" to="/home">Home</router-link> |
    <router-link class="nav-link" to="/about">About</router-link> |
    <router-link class="nav-link" to="/Store">Store</router-link> |
    <router-link class="nav-link" to="/faker">Faker</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavPanel",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.exact-active {
  background-color: #42b983;
}
.active {
  flex: 10 0 60%;
  transition-duration: 2s;
  transition-property: flex;
  transition-delay: 2s;
}
</style>
