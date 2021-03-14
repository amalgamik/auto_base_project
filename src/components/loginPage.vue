<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="vue-tempalte">
          <form @submit.prevent="userLogin">
            <h3>Sign In</h3>

            <div class="form-group">
              <label>Email address</label>
              <input
                type="email"
                class="form-control form-control-lg"
                v-model="user.email"
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control form-control-lg"
                v-model="user.password"
              />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Sign In
            </button>

            <p class="forgot-password text-right mt-2 mb-4">
              <router-link to="/signup">Sign Up</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {firebase} from "@/firebase/index.js";

export default {
  name: 'loginPage',
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/store");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>