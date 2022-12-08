<template>
  <div>

    <body>
      <div class="hero">
        <nav>
          <h2 class="logo">
            <img :src="imagem" border:none height="85" width="85" id="logomarca" />
            DOCERIA ALEGRIA
          </h2>
          <ul>
            <router-link to="/">INÍCIO</router-link>
            <!-- <router-link to="/about">About</router-link> -->
            <router-link to="/bolo">PRODUTOS</router-link>
            <!-- <router-link to="/auth">Login</router-link> -->
          </ul>
          <Sidebar id="sidebar" v-model:visible="visibleLeft" position="right">
            <h2 id="tProduto">Produtos</h2>
            <ul v-for="p in model.shopInfo.products" :key="p.id_Produto">
              <li>
                {{ (p.nomeProduto + ' ' + 'R$' + p.preco_produto) }}
              </li>
            </ul>
            <Button class="buy" @click="buy(p)">Finalizar Compra</Button>
          </Sidebar>
          <div class="icons">
            <span id="cart" class="material-icons" @click="abrirSidenav">shopping_cart</span>
            <span class="material-icons" @click="login">account_circle</span>
          </div>
          <!--<button type="button">Subscribe</button>-->
        </nav>
      </div>
    </body>
    <router-view />
    <footer>
      <div class="main-content">
        <div class="left box">
          <h2>Sobre nós</h2>
          <div class="content">
            <p>Doces feitos com muito amor <br/> para a sua família! ❤</p>
          <div class="social">
            <a href="#"><span class="fab fa-facebook-f"></span></a>
            <a href="#"><span class="fab fa-twitter"></span></a>
            <a href="#"><span class="fab fa-instagram"></span></a>
          </div>
        </div><!--content-->
        </div><!--Left box-->
        <div class="center box">
          <h2>Contato</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker"></span>
              <span class="text">Rua das Palmeiras, Blumenau</span>
            </div>
            <div class="phone">
              <span class="fas fa-phone"></span>
              <span class="text">+55 (47) 9 9999-9999</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">doceria@alegria.com.br</span>
            </div>
          </div>
        </div><!--center-->
      </div><!--main-content-->
    </footer>
  </div>
</template>
<script>
import Sidebar from 'primevue/sidebar';
import 'primeicons/primeicons.css';
import { defineComponent, reactive, ref } from 'vue';
import model from './states/chartstate';
import imagem from '../src/assets/imagem.png';


export default defineComponent({
  methods: {
    login() {
      this.$router.push("/auth")
    },
    abrirSidenav() {
      this.visibleLeft = true; console.log("deveria funcionar")
    },
    buy(product) {
      this.$router.push(`/payment/${product.id}`)
    }
  },
  setup() {
    const items = reactive(
      [
        { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'Bolos', icon: 'pi pi-fw pi-calendar', to: '/bolo' },
        { label: 'Inicio', icon: 'pi pi-fw pi-pencil', to: '/auth' }
      ]
    )

    const visibleLeft = ref(
      false
    )
    return {
      model,
      items,
      visibleLeft,
      imagem
    }
  },
  components: {
    Sidebar
  },
  computed: {
    productsCount() {
      return this.model.shopInfo.products.length
    }
  }
})
</script>
<style>

.main-content{
  background-color: #d4a373;
  color: #e9edc9;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  font-family: 'Poppins', sans-serif;;
}

.main-content .box{
  flex-basis:50%;
  padding: 10px 20px;
}

.box h2{
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}
.box .content{
  margin: 20px 0 0 0;
  position: relative;
}
/* .box .content:after{
  position: absolute;
  content: '';
  width: 15%;
  height: 2px;
  background:#ea1538;
  top: -10px;
} */
.left .content .social{
  margin: 20px 0 0 0;
}
/* .box .content:before{
  position: absolute;
  content: '';
  height: 2px;
  width: 100%;
  background: #2c3e50;
  top: 10px;

} */
.left .content .social a{
  padding:0 2px;
}
.left .content .social a span{
  width: 40px;
  height: 40px;
  background: #e9edc9;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  font-size: 18px;
  transition: 0.3s;
} 
.left .content .social a span:hover{
  background: #7f5539;
}
/* .left .content p{
  text-align: justify;
} */
.center .content .fas{
  font-size: 15px;
  background-color: #e9edc9;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}
.center .content .fas:hover{
  background-color: #7f5539;
}
.center .content .text{
    font-size: 15px;
    font-weight: 500;
    padding-left: 10px;
    color: #e9edc9;
}
.center .content .phone{
  margin: 10px 0;
}
.center .content .msg{
  margin-top: 10px
}
.social{
  color: #e9edc9;
}

#cart {
  margin-right: 25px;
}

#tProduto {
  color: #d4a373;
}

.buy {
  background-color: #d4a373;
  color: #e9edc9;
  display: absolute;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0px;
  margin-left: 55px;
  margin-top: 550px;

}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 28px;
  /* Preferred icon size */
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
  background-color: #e9edc9;
  font-family: 'Poppins', sans-serif;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;
}

#bg {
  background-color: #CCD5AE;
}

nav a {
  font-family: 'Poppins', sans-serif;
  color: #d4a373;
  padding: 10px 20px;
  text-decoration: none;
  text-align: end;
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
  padding-top: 15px;
  padding-left: 10%;
  padding-right: 10%;
}

.logo {
  color: #d4a373;
  font-size: 28px;
  font-family: var(--bs-body-font-family);
}

span {
  color: #d4a373;
}

nav ul,
router-link {
  list-style-type: none;
  display: inline;
}

nav ul li a {
  color: #d4a373;
  text-decoration: none;
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