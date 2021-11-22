<template>
  <div class="city">
    <span>{{this.city.name}}</span>
    <div class="weather">
      <span>{{Math.round(this.city.main.temp)}}&deg;</span>
      <span>{{this.city.weather[0].main}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"city",
  props:["city"],
}
</script>

<style scoped>
.city{
  display:flex;
  position:relativ;
  flex-direction: column;
  padding:20px;
  flex-basis: 50%;
  color:#fff;
  box-shadow: 0px 1px 2px 0px black;
}
.city span{
  z-index:1;
  text-transform: capitalize;
  display: block;
  font-size: 25px;
  font-weight: 400;
}
</style>