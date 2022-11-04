<template>
  <div>

    <body>
      <div class="hero">
        <nav>
          <h2 class="logo">John <span> Doe </span> </h2>
          <ul>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/bolo">Bolo</router-link>
            <router-link to="/auth">Login</router-link>
          </ul>
          <Sidebar v-model:visible="visibleLeft" position="right">
            Produto
          </Sidebar>
          <span class="material-icons md-48" @click="visibleLeft = true">shopping_cart</span>
          <!--<button type="button">Subscribe</button>-->
        </nav>
      </div>
    </body>
    <router-view />
  </div>
</template>
<script>
import Sidebar from 'primevue/sidebar';
import 'primeicons/primeicons.css';

export default ({
  data() {
    return {
      items: [
        { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'About', icon: 'pi pi-fw pi-calendar', to: '/about' },
        { label: 'Bolos', icon: 'pi pi-fw pi-calendar', to: '/bolo' },
        { label: 'Inicio', icon: 'pi pi-fw pi-pencil', to: '/auth' }
      ],
      visibleLeft: false
    }
  },
  components: {
    Sidebar
  }
})
</script>
<style>
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: #ffffff;
}
:root {
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
  background-color: purple;
}

nav a {
  font-weight: bold;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
}

#login {
  position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

.bg-dark {
  color: red;
}

.hero {
  height: min-content;
  width: 100%;
  background-color: purple;
  background-size: auto;
  background-position: top;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-left: 10%;
  padding-right: 10%;
}

.logo {
  color: white;
  font-size: 28px;
}

span {
  color: #ea1538;
}

nav ul,
router-link {
  list-style-type: none;
  display: inline;

}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  color: #ea1538;
  transition: .3s;
}

button {
  border: none;
  background: white;
  padding: 12px 30px;
  border-radius: 30px;
  color: #ea1538;
  font-weight: bold;
  font-size: 15px;
  transition: .4s;
}

button:hover {
  transform: scale(1.3);
  cursor: pointer;
}
</style>