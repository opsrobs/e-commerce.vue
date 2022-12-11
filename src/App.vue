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
            <router-link to="/bolo">PRODUTOS </router-link>
            <!-- <router-link to="/auth">Login</router-link> -->
          </ul>
          <Sidebar id="sidebar" v-model:visible="visibleLeft" position="right">
            <h2 id="tProduto">Produtos</h2>
            <ul class="cart_list" v-for="p in model.shopInfo.products" :key="p.id_Produto">
              <span class="prodsid">
                {{ (p.nomeProduto + ' ' + 'R$' + p.preco_produto) }}
                <span @click="removeIten(p)" class="material-icons">
                  delete
                </span>
              </span>
            </ul>
            <Button class="buy" @click="buy()">Finalizar Compra</Button>
          </Sidebar>
          <div class="icons">
            <a href="#" class="notification">
              <span id="cart" class="material-icons" @click="abrirSidenav">shopping_cart</span>
              <span class="badge">{{ productsCount }}</span>
            </a>
            <span class="material-icons" @click="login">account_circle</span>

          </div>
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
import { defineComponent, reactive, ref } from 'vue';
import axios from 'axios';
import model from './states/chartstate';
import imagem from '../src/assets/imagem.png';


export default defineComponent({
  methods: {
    login() {
      this.$router.push("/auth")
    },
    abrirSidenav() {
      this.visibleLeft = true; console.log("deveria funcionar")
      console.log(JSON.stringify(model.numeroPedido))

      // this.cadPedido(model.cards)
    },
    buy() {
      console.log(JSON.stringify(model.shopInfo.products))
      console.log(model.numeroPedido)
      this.$router.push(`/payment/21`)
      // this.$router.push(`/payment/${model.numeroPedido}`)
      this.visibleLeft = false;
      // this.$router.push(`/payment/63`)
    },
    removeIten(p){
      console.log(model.shopInfo.products)
      model.shopInfo.products.splice(model.shopInfo.products.indexOf(p), 1);
    },
    atualizarProduto(nPedido) {
      this.pedido.numeroPedido = nPedido
      model.shopInfo.products.forEach(product => {
        product.pedido = this.pedido,
          // this.postProduto(product)
          console.log(JSON.stringify(product))
      })
    },
    // postProduto(produto){
    //   let id = produto.id
    //   let produtoJSON = JSON.stringify(produto)
    //   console.log(JSON.parse(produtoJSON))
    //   axios.post(`localhost:8080/api/user-products/produto/${id}`, JSON.parse(produtoJSON),
    //       {
    //         auth: {
    //           username: model.contentPerson.pessoa.userName,
    //           password: model.pwd
    //         },
    //       })
    //       .then(resp => {
    //         console.log(resp.data.numeroPedido)
    //         console.log('Atualizou o produto ' +  resp.data.numeroPedido )
    //         model.numeroPedido = resp.data.numeroPedido
    //       }).catch(error => {
    //         console.log(error.request);
    //       })
    // },
    sumValue() {
      let soma
      for (var i = 0; i < model.shopInfo.products.forEach.length; i++) {
        soma = model.shopInfo.products.preco_produto
        console.log(soma);
        // more statements
      }
      return soma

    },
    toDate(inputDate) {
      const str = inputDate
      const [day, month, year] = str.split('/');
      const date = new Date(+year, month - 1, +day);
      console.log(date)
      return date.getTime()
    },
    dateToDay() {

      var today = new Date();
      var date = today.getDate(+3) + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date // + ' ' + time;

      return dateTime
    },
    cadPedido() {
      model.pedido.data_pedido = this.toDate(this.dateToDay()),
        model.pedido.status = 'PENDENTE',
        model.pedido.valor_total = model.totalPedido
      console.log(model.pedido.valor_total)
      model.pedido.valor_frete = 0.0,
        model.pedido.data_entrega = this.toDate(this.dateToDay()),
        model.pedido.produtos = model.shopInfo.products,
        model.pedido.cliente.idCliente = model.client.cliente.idCliente
      console.log(model.client.cliente.idCliente)
      // console.log(this.toDate(this.dateToDay()))
      console.log(JSON.stringify(model.pedido))
      console.log('--------------------------------' + model.pedido.numeroPedido)
      this.criarPedido()
    },
    async criarPedido() {
      let strigToJson = JSON.stringify(this.model.pedido)
      if (model.pedido.status === 'PENDENTE' && model.numeroPedido != null && model.numeroPedido > 0) {
        console.log(model.pedido.status)
        console.log(model.numeroPedido)
        console.log('--')
        this.atualizarPedido(model.numeroPedido)
      } else {
        console.log(JSON.parse(strigToJson))
        await axios.post('http://localhost:8080/api/user-pedido', JSON.parse(strigToJson),
          {
            auth: {
              username: model.contentPerson.pessoa.userName,
              password: model.pwd
            },
          })
          .then(resp => {
            console.log(resp.data.numeroPedido)
            model.numeroPedido = resp.data.numeroPedido
          }).catch(error => {
            console.log(error.request);
            console.log(error.response.status);
            console.log(error.response.headers);
          })

      }
    },
    atualizarPedido(id) {
      let strigToJson = JSON.stringify(this.model.pedido)
      console.log(strigToJson)
      axios.put(`http://localhost:8080/api/user-pedido/pedido/${id}`, JSON.parse(strigToJson),
        {
          auth: {
            username: model.contentPerson.pessoa.userName,
            password: model.pwd
          },
        })
        .then(resp => {
          // model.client.cliente.idCliente = resp.data.idCliente
          console.log(resp.data)
        }).catch(error => {
          console.log(error.request);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    },
    buscarPedidos(id) {
      axios.get(`http://localhost:8080/api/user-pedido/${id}`,
        {
          auth: {
            username: model.contentPerson.pessoa.userName,
            password: model.pwd
          },
        })
        .then(resp => {
          // model.client.cliente.idCliente = resp.data.idCliente
          console.log(resp.data.numeroPedido)
          model.numeroPedido = resp.data.numeroPedido
        }).catch(error => {
          console.log(error.request);
          console.log(error.response.status);
          console.log(error.response.headers);
        })

    },
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
      imagem,
      pedido: {
        numeroPedido: null
      }
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
.prodsid {
  color: #d4a373;
}

.cart_list .material-icons{
  justify-content: center;
  font-size: 28px;
  vertical-align: -8px
}

.notification {
  color: white;
  text-decoration: none;
  padding: 15px 26px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
}

.notification .badge {
  font-size: 10px;
  position: absolute;
  top: 1px;
  right: 45px;
  padding: 3px 5px;
  border-radius: 50%;
  background: #7f5539;
  color: white;
}

#logomarca {
  margin-right: 50px;
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
  line-height: 0;
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