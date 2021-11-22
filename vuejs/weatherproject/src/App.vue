<template>
  <div id="app">
    <navigation v-on:add-city="toggleModal" v-on:read-current-location="readLocation"/>
    <modal v-if="modalOpen" v-on:close-modal="toggleModal"/>
    <current-location v-if="currentLoc" v-bind:APIkey="apiKey"/>
    <router-view v-bind:cities="cities"/>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "./firebase/firebaseinit";
import { collection, getDocs } from "firebase/firestore";
import navigation from "./components/navigation.vue"
import modal from "./components/modal.vue";
import CurrentLocation from './components/currentLocation.vue';
export default {
  name: "Home",
  components:{
    navigation,
    modal,
    "current-location":CurrentLocation,
  },
  data() {
    return {
      cities: [],
      modalOpen:false,
      apiKey: "741c00d85d3e7a1d2ad317f5059ee736",
      currentLoc:false
    };
  },
  created() {
    this.getWeatherUpdates()
  },
  methods: {
    async getWeatherUpdates() {
      const querySnapshot = await getDocs(collection(store, "cities"));
      querySnapshot.forEach(async (doc) => {
        const res = await axios(
          `http://api.openweathermap.org/data/2.5/weather?q=${
            doc.data().name
          }&appid=${this.apiKey}`
        );
        this.cities.push(res.data);  
      });
    },
    toggleModal(){
      this.modalOpen=!this.modalOpen
    },
    readLocation(){
      this.currentLoc=!this.currentLoc
    }
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
 
}
</style>
