<template>
  <div class="faker">
    <img alt="Vue logo" src="../assets/logo.png">
    <faker> </faker>
  </div>
</template>

<script>
// @ is an alias to /src
import faker from '@/components/Faker.vue'

export default {
  name: 'FakerBase',
  components: {
    faker,
  }
}
</script>
