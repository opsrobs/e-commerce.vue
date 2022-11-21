<template>
  <div>

    <body>
      <div class="hero">
        <nav>
          <h2 class="logo"><span> Doceria da Alegria </span></h2>
          <ul>
            <router-link to="/">Inicio</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/bolo">Produtos</router-link>
            <router-link to="/auth">Login</router-link>
          </ul>
          <Sidebar id="sidebar" v-model:visible="visibleLeft" position="right">
          <h2 id="tProduto">Produto</h2>
          <ul  v-for= "p in model.shopInfo.products" :key="p.id_Produto">
          <li>
            {{p.nom_produto}}
          </li>
          </ul>
          <Button class="buy">Finalizar Compra</Button>
          </Sidebar>
          <span class="material-icons" @click="abrirSidenav">shopping_cart</span>
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
import { defineComponent, reactive, ref} from 'vue';
import model from './states/chartstate';

export default defineComponent({
  methods:{
    abrirSidenav(){
      this.visibleLeft = true;console.log("deveria funcionar")
    }
  },
  setup() {
    const items=reactive (
      [
        { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'About', icon: 'pi pi-fw pi-calendar', to: '/about' },
        { label: 'Bolos', icon: 'pi pi-fw pi-calendar', to: '/bolo' },
        { label: 'Inicio', icon: 'pi pi-fw pi-pencil', to: '/auth' }
      ]
      )
      const visibleLeft=ref (
        false
      )
    return {
      model,
      items,
      visibleLeft
    }
  },
  components: {
    Sidebar
  },
  computed: {
        productsCount(){
          return this.model.shopInfo.products.length
    }}
})
</script>
<style>

#tProduto {
  color: #d4a373;
}

.buy {
  background-color: #2c3e50;
  color: #CCD5AE;
  display: absolute;
  margin-left: 55px;
  margin-top: 550px;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 28px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: #d4a373;
}
:root {
  --bs-dark-rgb: #fff1e6;
}

#sidebar {
  background-color: #CCD5AE;
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
  background-color: #CCD5AE;
}

nav a {
  font-weight: bold;
  color: #d4a373;
  padding: 10px 20px;
  text-decoration:none;
}

#login {
  position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #7f5539;
  
}

.bg-dark {
  color: #d4a373;
}

.hero {
  height: min-content;
  width: 100%;
  background-color: #e9edc9;
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
  color: #d4a373;
  font-weight: bold;
}

nav ul,
router-link {
  list-style-type: none;
  display: inline;
}

nav ul li a {
  color: #d4a373;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  color: #d4a373;
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