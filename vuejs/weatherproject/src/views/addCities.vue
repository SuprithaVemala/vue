<template>
  <div class="grid">
    <div class="city-link" v-for="(city,index) in cities" v-bind:key="index">
      <City v-bind:city="city"/>
    </div>
  </div>
</template>
<script>
import City from "../components/city.vue"
export default{
  name:"addCity",
  components:{
    City
  },
  props:["cities"]
}
</script>
<style>
.grid{
  display:grid;
  padding-top:81px;
  background-color: #31363f;
  width:100%;
  min-height:100vh;
  grid-auto-rows: 200px;
  @media (min-width:400px){
    grid-template-columns:repeat(3,1fr);
  }
}
</style>