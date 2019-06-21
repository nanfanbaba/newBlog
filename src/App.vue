<template>
  <div id="app">
    <heardtop></heardtop>
    <router-view></router-view>
  </div>
</template> 

<script>
import HeardTop from './components/HeardTop'

export default {
  name: 'App',
  components: {
    heardtop:HeardTop
  }
}
</script>

<style>
  html {
    width:100vw;
    overflow-x:hidden;
  }
  body{
    margin: 0px;
  }
</style>
