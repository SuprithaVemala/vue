<template>
  <div>
    <span>Current Location -</span>
    <span>{{ city }}</span>
    <div>
      <span>{{ Math.round(temp) }}&deg;</span>
      <span>{{ weather }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "currentLocation",
  props: ["APIkey"],
  data() {
    return {
      lat: 0,
      long: 0,
      city: "",
      temp: "",
      weather: "",
    };
  },
  created() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      const response = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.APIkey}`
      );
      this.city = response.data.name;
      this.temp = response.data.main.temp;
      this.weather = response.data.weather[0].main;
      console.log(this.city)
      console.log(this.temp)
      console.log(this.weather)
    });
  },
};
</script>

<style>
.city {
  display: flex;
  position: relativ;
  flex-direction: column;
  padding: 20px;
  flex-basis: 50%;
  color: #fff;
  box-shadow: 0px 1px 2px 0px black;
}
.city span {
  z-index: 1;
  text-transform: capitalize;
  display: block;
  font-size: 25px;
  font-weight: 400;
}
</style>
