<template>
  <div>
    <div id="s2">
      <h3>Wybierz tryb studiów</h3>
      <router-link
        to="/FP/threeS"
        style="text-decoration: none; color: inherit"
      >
        <div
          v-for="i in this.tryby"
          :key="i.id"
          class="inner"
          v-on:click="getForm(i.text)"
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
  name: "Form1S2",
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
    getForm(val) {
      this.form = val;
      this.stepOneInc();
      console.log(this.form);
    },
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
    stepOne() {
      return this.$store.state.stepOne;
    },
    tryby() {
      return this.$store.state.tryby;
    },
  },
  data() {
    return {
      stopnie: [{ text: "I" }, { text: "II" }],
      kierunki: [
        { text: "Informatyka" },
        { text: "Matematyka" },
        { text: "Fizyka" },
      ],
      // form:"",
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
