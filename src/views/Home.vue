<template>
	<div>
		<nav-panel/>
		<div class="home">
			<img alt="Vue logo" src="../assets/logo.png">
		</div>
		<div class="vue-tempalte">
        <h3>Welcome</h3>
           <!-- <p>{{user.displayName}}</p>
           <p>{{user.email}}</p> -->
        
        <button 
        type="submit" 
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()">
            Log out
        </button>
        
			<router-link to="/store">
				<button 
				class="btn btn-dark btn-lg btn-block"
				>
					Go ahead
				</button>
			</router-link>
        
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import NavPanel from '@/components/NavPanel.vue'
import {firebase} from "@/firebase/index.js";

export default {
  name: "Home",
  components: {
	  NavPanel, 
  },
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.replace('/')
        })
      })
    }
  }
};
</script>

