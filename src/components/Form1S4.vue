<template>
  <div>
    <div id="s4">
      <h3>Wybierz kierunek</h3>
      <div
        v-for="i in this.kierunki"
        :key="i.id"
        class="inner"
        v-on:click="getDirection()"
      >
        <itemBar :name="i.text" />
      </div>
    </div>
  </div>
</template>
<script>
import itemBar from "@/components/itemBar.vue";
export default {
  name: "Form1S4",
  //props: ["tab", "destination"],
  components: {
    itemBar,
  },
  methods: {
    stepOneInc: function () {
      this.$store.commit("stepOneInc");
    },
    myFun() {
      console.log("click back");
    },
    getDirection(val) {
      this.direction = val;
      this.stepOneInc();
      console.log(this.direction);
    },
  },
  computed:{
direction(){
  return this.$store.state.faculity;
},
stepOne() {
      return this.$store.state.stepOne;
    },
kierunki() {
      return this.$store.state.kierunki;
    },
},
  data() {
    return {
      tab: [{ text: "II" }, { text: "IT" }, { text: "ISM" }],
      tryby: [{ text: "Stacjonarny" }, { text: "Niestacjonarny" }],
      stopnie: [{ text: "I" }, { text: "II" }],
      //direction: "",
    };
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
