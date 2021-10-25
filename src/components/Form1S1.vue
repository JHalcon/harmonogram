<template>
  <div>
    <h3>Wybierz jednostkę</h3>
    <router-link to="/FP/twoS" style="text-decoration: none; color: inherit">
      <div
        v-for="i in this.instytuty"
        :key="i.id"
        class="inner"
        value="i.text"
        v-on:click="getFaculity(i.text)"
      >
        <itemBar :name="i.text" />
      </div>
    </router-link>
  </div>
</template>
<script>
import itemBar from "@/components/itemBar.vue";
export default {
  name: "Form1S1",
  //props: ["tab", "destination"],
  components: {
    itemBar,
  },
  methods: {
    getAnswer() {
      //axios
      // .then(response=>this.tryby = response());
    },
    stepOneInc: function () {
      this.$store.commit("stepOneInc");
    },
    myFun() {
      console.log("click back");
    },
    getFaculity(val) {
      this.faculity = val;
      this.stepOneInc();
      console.log(this.faculity);
    },
    postFaculity() {
      //axios post z this.faculity
    },
    getForm() {
      //axios get z this.forms
    },
  },
  data() {
    return {};
  },
  computed: {
    faculity() {
      return this.$store.state.faculity;
    },
    stepOne() {
      return this.$store.state.stepOne;
    },
    tryby() {
      return this.$store.state.tryby;
    },
    instytuty() {
      return this.$store.state.instytuty;
    },
  },
};
</script>
<style scoped>
div#mainDiv {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
}
div.inner {
  width: 100%;
}
h3 {
  margin: 10px;
}
</style>
