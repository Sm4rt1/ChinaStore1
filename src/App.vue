<template>
  <div id="app">
    <v-main-wrapper/> 
  </div>
</template>

<script>
  import vMainWrapper from '@/components/main__wrapper.vue'
  
  export default {
    name: 'app',
    components: {
      vMainWrapper
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f6f7f9;
}
</style>
