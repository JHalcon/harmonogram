<template>
  <div class="formPage">
    <div class="steps">
      <barProg />
    </div>
  <div id="mainDiv">
    <h2 v-show="stepOne==1">Pobierz plan ze strony</h2>
    <router-link to="/FP/oneS"  style="text-decoration: none; color: inherit">
    <button v-on:click="stepOneInc" class="blueBTN" v-show="stepOne==1">
      Rozpocznij</button>
      </router-link>
   <router-view class="Form1">

   </router-view>
   </div>
   <!-- <formStepsComp  /> -->
    {{this.stepOne}}
  </div>
</template>

<script>
// import the css (OPTIONAL - you can provide your own design)
import barProg from "@/components/barProg.vue";
//import formStepsComp from "@/components/formStepsComp.vue";
//import { store } from '../store/index.js';
export default {
  name: "formPage",
  components: {
    barProg,
  //  formStepsComp,
  },
  computed: {
    stepOne () {
      return this.$store.state.stepOne;
    }},
    methods:{
      stepOneInc: function(){
        this.$store.commit('stepOneInc');
      }
    },
  data(){
    return{
      step:1,
       tab: [{ text: "II" }, { text: "IT" }, { text: "ISM" }],
      tryby: [{ text: "Stacjonarny" }, { text: "Niestacjonarny" }],
      stopnie: [{ text: "I" }, { text: "II" }],
      kierunki: [{ text: "Informatyka" }, { text: "Matematyka" },{text:"Fizyka"}],
    }
  }
};
</script>
<style scoped>
.Form1{
    grid-area: content;
}
router-link{
  text-decoration: none;
}
.blueBTN{
  height:70px;
  width:150px;
  background-color: cornflowerblue;
  font-family: Roboto;
}
.formPage {
  display: flex;
  flex-direction: column;

  align-items: center;
  width:100%;
}
.steps {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/*2 comp*/
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


@media (max-width: 720px) {
  .formPage {
    min-height: 100%;
    width: 100%;
    background-color:white;
  }
}
</style>
