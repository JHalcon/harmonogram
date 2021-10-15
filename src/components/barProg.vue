<template>
  <div class="container">
    <ul class="progressbar">
      <liItem :id="1" />
      <liItem :id="2" />
      <liItem :id="3" />
      <liItem :id="4" />
      <liItem :id="5" />
      <liItem :id="6" />
      <liItem :id="7" />
      <liItem :id="8" />
      <liItem :id="9" />
      <!--
      <li id="1" :class="this.id==this.stepOne?'Active':''" >
      class="active">
      </li>
      <li id="2"></li>
      <li id="3"></li>
      <li id="4"></li>
      <li id="5"></li>
      <li id="6"></li>
      <li id="7"></li>
      <li id="8"></li>
      <li id="9"></li>
      -->
    </ul>
  </div>
</template>
<script>
import liItem from "@/components/liItem.vue";
export default {
  name: "barProg",
  components: {
    liItem,
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
};
</script>
<style scoped>
.container {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.progressbar {
  counter-reset: step;
  width: 100%;
  display: flex;
  justify-content: center;
}
.progressbar li {
  list-style-type: none;
  float: left;
  width: 10.33%;
  position: relative;
  text-align: center;
}

.progressbar li:before {
content: '';
/*counter(step);*/
  background-color: black;
  border:3px solid grey;
 /* counter-increment: step;*/
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: white;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.active {
  color: green;
}
.progressbar li.active :before {
  border-color: green;
}
.progressbar li.activeli:after {
  background-color: green;
}
@media (max-width: 720px) {
  .progressbar li:before {
    width: 5px;
    z-index: 2;
    height: 5px;
    line-height: 5px;
    position: inherit;
    font-size:15px;
    /*background-color: black;*/
    border:3px solid grey;
    margin-top:5px;
  }
    .progressbar li.active:before {
    width: 10px;
    z-index: 2;
    height: 10px;
    line-height: 10px;
    position: inherit;
    font-size:15px;
    background-color: black;
    border:3px solid grey;
    margin-top:2px;
  }
  .progressbar li:after {
   top: 8px;
height: 3px;
    z-index: 1;
  }
}
</style>
