<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #bcbcbc;">
  <div class="container-fluid">
    <router-link to="/formulario">
        <a class="navbar-brand" href="#">Ayelen Centurión</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Pagos</a> 
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/respuestas">
              <a class="nav-link" href="#">Respuestas</a> 
            </router-link>
          </li>
        </ul> 
      </div>
  </div>
</nav>  
</template>

<script lang="js">
  export default {
    name: 'NavBar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
