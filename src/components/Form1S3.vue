<template>
  <div>
    <div id="s3">
      <h3>Wybierz stopień studiów</h3>
      <router-link to="/FP/fourS" style="text-decoration: none; color: inherit">
        <div
          v-for="i in this.stopnie"
          :key="i.id"
          class="inner"
           v-on:click="getDegree(i.text)"
        >
          <itemBar :name="i.text" />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import itemBar from "@/components/itemBar.vue";
export default {
  name: "Form1S3",
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
       getDegree(val){
        this.degree = val;
        this.stepOneInc();
        console.log(this.degree)
    },
  },
  computed:{
degree(){
  return this.$store.state.faculity;
},
stepOne() {
      return this.$store.state.stepOne;
    },
   stopnie() {
      return this.$store.state.stopnie;
    },
},
  data() {
    return {
      tab: [{ text: "II" }, { text: "IT" }, { text: "ISM" }],
      tryby: [{ text: "Stacjonarny" }, { text: "Niestacjonarny" }],
      kierunki: [
        { text: "Informatyka" },
        { text: "Matematyka" },
        { text: "Fizyka" },
      ],
     // degree: "",
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
