<template>
  <div class="startPage">
    <img alt="Vue logo" src="../assets/logo.png" />
    <loginPage> </loginPage>
  </div>
</template>

<script>
// @ is an alias to /src
import loginPage from "@/components/loginPage.vue";

export default {
  name: "startPage",
  components: {
    loginPage,
  },
};
</script>
