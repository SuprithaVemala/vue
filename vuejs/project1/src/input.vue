<template>
  <div>
    <input type="text" :value="msg" @input="handleInput"/>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  props:["msg"],
  data () {
    return {
      info: this.msg
    }
  },
  methods:{
    handleInput(event){
      this.info=event.target.value
      this.$emit('inputChanged',this.info)
    }
  }
};
</script>
