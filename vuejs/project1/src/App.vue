<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <input-component :msg="msg" @inputChanged="msg=$event"></input-component>
  </div>
</template>

<script>
import Input from "./input.vue"

export default {
  name: 'app',
  data () {
    return {
      msg: 'Eureka'
    }
  },
  components:{
  'input-component':Input
  }
}
</script>

<style>

</style>
