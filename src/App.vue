<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Aplicación de pagos</h1>
      <hr>
      <br>
      <NavBar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  background-color: aquamarine;
}
h1 {
  color:black;
}
.jumbotron{
  padding: 32px !important;
}
</style>
