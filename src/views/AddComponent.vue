<template>
  <div>
    <nav-panel />
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="input-group mb-3">
            <form class="row">
              <div class="col-4">
                <span class="input-group-text" id="inputGroup-sizing-default"
                  >Name</span
                >
                <input
                  type="text"
                  :class="[classValidName, 'form-control']"
                  class="form-control is-valid"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  id="validationServerUsername"
                  v-model="name"
                />
              </div>
              <div class="col-4">
                <span class="input-group-text" id="inputGroup-sizing-default"
                  >Amount</span
                >
                <input
                  type="number"
                  min="0"
                  :class="[classValidAmount, 'form-control']"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  id="Amount"
                  v-model="amount"
                />
              </div>
              <div class="col-4">
                <span class="input-group-text" id="inputGroup-sizing-default"
                  >Price</span
                >
                <input
                  type="text"
                  :class="[classValidPrice, 'form-control']"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  id="Price"
                  v-model="price"
                />
              </div>
              <div class="offset-4 col-4">
                <span class="input-group-text" id="inputGroup-sizing-default"
                  >Manager</span
                >
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="selectedManager"
                  id="Manager"
                >
                  <managers
                    :manager="manager"
                    :index="index"
                    v-for="(manager, index) in managerBase.slice(1)"
                    :key="manager"
                    >Select line</managers
                  >
                </select>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12">
          <router-link class="nav-link" to="/Store">
            <button
              class="btn btn-primary"
              @click="sendToDB()"
              :disabled="state"
            >
              Add to base
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavPanel from "@/components/NavPanel.vue";
import Managers from "@/components/Managers.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddComponent",
  components: {
    NavPanel,
    Managers,
  },
  data() {
    return {
      name: "",
      addDate: 0,
      amount: 0,
      price: 0,
      article: 0,
      manager_id: "",
      classValidName: "is-invalid",
      classValidAmount: "is-invalid",
      classValidPrice: "is-invalid",
      state: true,
      selectedManager: 0,
    };
  },
  created() {
    this.readManagerBase();
  },
  methods: {
    ...mapActions(["readManagerBase"]),
    sendToDB() {
      this.$store.dispatch("sendToDB", {
        name: this.name,
        amount: this.amount,
        price: this.price,
        selectedManager: this.selectedManager,
      });
    },
  },
  computed: {
    ...mapGetters(["managerBase"]),
    btnstate() {
      console.log(
        this.classValidName,
        this.classValidAmount,
        this.classValidPrice
      );
      if (
        this.classValidName == "is-valid" &&
        this.classValidAmount == "is-valid" &&
        this.classValidPrice == "is-valid" &&
        this.selectedManager > 0
      ) {
        console.log("true" + this.state);
        this.state = false;
      } else {
        console.log("false" + this.state);
        this.state = true;
      }
    },
  },
  watch: {
    name() {
      if (this.name.length > 2) {
        this.classValidName = "is-valid";
        this.btnstate;
      } else {
        this.classValidName = "is-invalid";
      }
    },
    amount() {
      if (this.amount % 1 == 0 && +this.amount && this.amount > 0) {
        this.classValidAmount = "is-valid";
        this.btnstate;
      } else {
        this.classValidAmount = "is-invalid";
      }
    },
    price() {
      if (+this.price && this.price > 0) {
        this.classValidPrice = "is-valid";
        this.btnstate;
      } else {
        this.classValidPrice = "is-invalid";
      }
    },
    selectedManager() {
      if (this.selectedManager > 0) {
        this.btnstate;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
