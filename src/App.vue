<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/about">About</a>
          <a class="nav-item nav-link" href="/bolo">Bolos</a>
          <a class="nav-item nav-link " href="/auth">Login</a>
        </div>
      </div>
    </nav>
    <router-view />
  </div>


</template>
<script>

export default ({
  data() {
    return {
      items: [
        { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'About', icon: 'pi pi-fw pi-calendar', to: '/about' },
        { label: 'Bolos', icon: 'pi pi-fw pi-calendar', to: '/bolo' },
        { label: 'Inicio', icon: 'pi pi-fw pi-pencil', to: '/auth' }
      ]
    }
  },
  components: {
  }
})
</script>
<style>
:root{
  --bs-dark-rgb: #080710;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

#bg {
  background-color: darkblue;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

#login {
  position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.bg-dark {
  color: red;

}
</style>
