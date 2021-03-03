<template>
  <form>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Login</label>
      <div class="col-sm-4">
        <input type="email" class="form-control" id="inputEmail3">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-4">
        <input type="password" class="form-control" id="inputPassword3">
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Войти</button>
  </form>

</template>

<script>
export default {
  name: 'loginPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
