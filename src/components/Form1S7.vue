<template>
  <div>
    <div id="s4">
      <h3>Wybierz rok studiów</h3>
      <div
        v-for="i in this.lata"
        :key="i.id"
        class="inner"
        v-on:click="getYear()"
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
    getYear(val) {
      this.year = val;
      this.stepOneInc();
      console.log(this.year);
    },
  },
  computed:{
year(){
  return this.$store.state.year;
},
stepOne() {
      return this.$store.state.stepOne;
    },
    lata() {
      return this.$store.state.lata;
    },
},
  data() {
    return {
      tab: [{ text: "II" }, { text: "IT" }, { text: "ISM" }],
      tryby: [{ text: "Stacjonarny" }, { text: "Niestacjonarny" }],
      stopnie: [{ text: "I" }, { text: "II" }],
      kierunki: [
        { text: "Informatyka" },
        { text: "Matematyka" },
        { text: "Fizyka" },
      ],
    //  year: "",
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
