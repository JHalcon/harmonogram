<template>
  <div id="mainDiv">
   <router-view name="Form1">

   </router-view>
    <!--<div id="s1" v-if="this.stepOne == 1">
      <h3>Wybierz jednostkę</h3>
      <div
        v-for="i in this.tab"
        :key="i.id"
        class="inner"
        v-on:click="stepOneInc()"
      >
        <itemBar :name="i.text" />
      </div>
    </div>
    <div id="s2" v-if="this.stepOne == 2">
      <h3>Wybierz tryb studiów</h3>
      <div
        v-for="i in this.tryby"
        :key="i.id"
        class="inner"
        v-on:click="stepOneInc()"
      >
        <itemBar :name="i.text" />
      </div>
    </div>
    <div id="s3" v-if="this.stepOne == 3">
      <h3>Wybierz stopień studiów</h3>
      <div
        v-for="i in this.stopnie"
        :key="i.id"
        class="inner"
        v-on:click="stepOneInc()"
      >
        <itemBar :name="i.text" />
      </div>
    </div>
     <div id="s4" v-if="this.stepOne == 4">
      <h3>Wybierz kierunek</h3>
      <div
        v-for="i in this.kierunki"
        :key="i.id"
        class="inner"
        v-on:click="stepOneInc()"
      >
        <itemBar :name="i.text" />
      </div>
    </div>
    -->
  </div>
</template>

<script>
//import itemBar from "@/components/itemBar.vue";
export default {
  name: "formStepsDiv",
  /*components: {
    itemBar,
  },*/
  computed: {
    stepOne() {
      return this.$store.state.stepOne;
    },
  },
  methods: {
    stepOneInc: function () {
      this.$store.commit("stepOneInc");
    },
    myFun(){
      console.log("click back");
    }
  },
    mounted () {
    document.addEventListener("backbutton", this.myFun, false);
  },
  beforeDestroy () {
    document.removeEventListener("backbutton", this.myFun);
  },
  data() {
    return {
      tab: [{ text: "II" }, { text: "IT" }, { text: "ISM" }],
      tryby: [{ text: "Stacjonarny" }, { text: "Niestacjonarny" }],
      stopnie: [{ text: "I" }, { text: "II" }],
      kierunki: [{ text: "Informatyka" }, { text: "Matematyka" },{text:"Fizyka"}],
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
