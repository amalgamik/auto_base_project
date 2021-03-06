<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <loginPage> </loginPage>
  </div>
</template>

<script>
// @ is an alias to /src
import loginPage from '@/components/loginPage.vue'

export default {
  name: 'Home',
  components: {
    loginPage,
  }
}
</script>
