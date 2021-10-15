<template>
  <div class="formPage">
    <div class="steps">
      <barProg />
    </div>
    <formStepsComp  />
    {{this.stepOne}}
  </div>
</template>

<script>
// import the css (OPTIONAL - you can provide your own design)
import barProg from "@/components/barProg.vue";
import formStepsComp from "@/components/formStepsComp.vue";
//import { store } from '../store/index.js';
export default {
  name: "formPage",
  components: {
    barProg,
    formStepsComp,
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
    }
  }
};
</script>
<style scoped>
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

@media (max-width: 720px) {
  .formPage {
    min-height: 100%;
    width: 100%;
    background-color:white;
  }
}
</style>
