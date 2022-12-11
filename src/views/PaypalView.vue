<template>
  <div>
    <div class="main " v-if="!paidFor">
      <div class="center">
        <div v-for="c in products" :key="c.id">
          <div>
            <span>{{ c.nomeProduto }}
              <span class="text-muted">
                {{ ' R$ ' + c.preco_produto }}

              </span>
            </span>
          </div>
        </div>
        <row class="price-total">{{ 'Total' + ': ' }}</row>
        <row class="price-total">
          {{ total + ' R$' }}
        </row>
      </div>
    </div>

    <div v-if="paidFor">
      <h1>Noice, you bought a beautiful lamp!</h1>
    </div>

    <div ref="paypal"></div>



  </div>


</template>
  
<script>
import axios from 'axios'
import model from './../states/chartstate'


// import image from "../assets/lamp.png"
export default {
  name: "HelloWorld",

  data() {
    return {
      products: [],
      loaded: false,
      paidFor: false,
      total: null,
      count: [],
      product: {
        price: 777.77,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg"
      }
    }
  },
  mounted: function () {
    const id = this.$route.params.id
    if (id) {
      this.products.forEach(element => {
        this.count[element] = (this.count[element] || 0) + 1;
      })
      console.log(this.count)

      let username = 'robson.flavio'
      let password = 'senha123'
      axios.get(
        `http://localhost:8080/api/user-pedido/${id}`,
        // `http://localhost:8080/api/user-pedido/63`,
        {
          auth: {
            username: username,
            password: password
          },
        })
        .then(resp => {
          this.products = resp.data.produto, this.total = resp.data.valor_total,
            console.log(resp.data), console.log(JSON.stringify(this.products))
        })
        .catch(error => {
          alert(error)
          this.$router.push("/bolo")
        })

      this.setPurchases()
    }



    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZrNyxZs1wtJqybBFEJonpJEGOVwRaxDkcWmPCVN0oDhhFIir7rfDnouS3Y6VG79Uvna2Og0ECRe4hBx";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  // description: this.products.descProduto,
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.products
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            this.setPurchases,
              console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    },
    findOcc(arr, key) {
      let arr2 = [];

      arr.forEach((x) => {
        if (arr2.some((val) => { return val[key] == x[key] })) {

          arr2.forEach((k) => {
            if (k[key] === x[key]) {
              k["occurrence"]++
            }
          })

        } else {
          let a = {}
          a[key] = x[key]
          a["occurrence"] = 1
          arr2.push(a);
        }
      })
      console.log(arr2)
      return arr2
    },
    setPurchases() {
      return model.shopInfo.products

    }
  }
};
</script>
<style>
.main {
  margin-top: 15px;
}



.price-total {
  width: 50%;
  float: left;
  padding: 15px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  margin: 1em 0;
  font-family: sans-serif;
}

.t {
  border: 1px solid
}



.card-group {
  height: auto;
  /* alterar para 500px caso os cards fiquem de tamanhos diferentes */
  width: 300px;
  padding: 15px;

  float: left;
}



.card-img-top {
  padding: 3px;
}

.center {
  border: 2px outset;
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>