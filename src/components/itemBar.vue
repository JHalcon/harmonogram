  <template>
  <div class="itemBar">
      <h3>{{this.name}}</h3>
  </div>
</template>

<script>
export default {
  name: "itemBar",
  props:["name"],
  components: {
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
<style  scoped>
.itemBar{
    width:100%;
    height:50px;
    background-color: rgb(200, 199, 199);
    margin-top:10px;
       margin-bottom:10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>