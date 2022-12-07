<template >
    <div>

        <div>
            <span v-for="p in model.categories" :key="p.id">
                <toggle-button v-model="p.nomeTipo" :onLabel="p.nomeTipo" :offLabel="p.nomeTipo" /> </span>

        </div>
        <!-- TODO: Centralizar os componentes dos cards -->
        <div class="card-group" v-for="c in model.cards" :key="c.id">
            <div class="card">
                <img class="card-img-top" :src="c.urlimagem" alt="Card image cap" width="230" height="215">
                <div class="card-body">
                    <h5 class="card-title">{{ c.nomeProduto }}</h5>
                    <p class="card-text">{{ lengthDescription(c.descProduto) }}</p>
                    <p class="card-text">
                        <small class="text-muted">{{ 'R$ ' + c.preco_produto }}</small>
                    </p>
                    <a class="btn btn-outline-dark mt-auto" href="#" @click="pushToSide(c)">Adicionar ao carrinho</a>

                </div>
            </div>
        </div>
        <!-- <input v-model="date">
        <button @click="toDate(date)"></button> -->

    </div>


</template>

<script>
// import Carousel from 'primevue/carousel'
import ToggleButton from 'primevue/togglebutton'
import axios from 'axios';
import model from './../states/chartstate'
import { defineComponent } from "vue";

// onMounted(()=>{
//             axios.get("https://run.mocky.io/v3/80ef2f6b-3c85-4ce8-967f-959ca66e1379")
//             .then(resp => {
//                 this.model.categories = resp.data
//                 console.log(resp.data)

//             }),

//             axios.get("https://run.mocky.io/v3/4e8714aa-6305-4aad-81a1-8a5ca203355d")
//                 .then(resp => {
//                     this.model.cards = resp.data
//                     console.log(resp.data)

//                 })
//             })

export default defineComponent({
    mounted() {
        axios.get("http://localhost:8080/api/user-categories")
            .then(resp => {
                this.model.categories = resp.data.content
                console.log(resp.data.content)

            })
        axios.get("http://localhost:8080/api/user-products")
            .then(resp => {
                this.model.cards = resp.data.content
                console.log(resp.data)

            }).catch(error => console.log(error))
    },
    setup() {
        const check = () => {
            this.model.currentItem
            //alert(this.checked)
        };
        const isleft = () => {
            this.model.left = true;
            this.model.currentItem -= 1
            this.model.carousel()

        };
        const isRight = () => {
            this.model.left = false;
            this.model.currentItem += 1
            this.carousel()
        };
        const carousel = () => {
            const controls = document.querySelectorAll(".control");
            const items = document.querySelectorAll(".item");
            const maxItems = items.length;

            controls.forEach((control) => {
                control.addEventListener("click", (e) => {
                    console.log(e)


                    if (this.model.currentItem < 0) {
                        this.model.currentItem = maxItems - 1;
                    }
                    if (this.model.currentItem >= maxItems) {
                        this.model.currentItem = 0;
                    }
                    items.forEach((item) => item.classList.remove("current-item"));

                    items[this.currentItem].scrollIntoView({
                        behavior: 'auto',
                        block: 'center',
                        inline: "center"
                    });

                    items[this.model.currentItem].classList.add("current-item");
                });
            });
        };
        const lengthDescription = (text) => {
            if (text.length < 5) {
                return text
            } else {
                return text.substring(0, 8) + "..."
            }
        }
        // const productsCount=computed(
        // //     ()=>this.model.shopInfo.products.length
        // )
        return {
            check,
            date: null,
            isleft,
            isRight,
            carousel,
            lengthDescription,
            model,
            value: null,
            pedido: {
                data_pedido: null,
                status: null,
                valor_total: 11.20,
                valor_frete: 0.0,
                data_entrega: 1654884910,
                produtos: []
            }
        }
    },
    components: {
        ToggleButton,
    },
    methods: {
        pushToSide(p) {
            this.salvarProduto(p)
            model.shopInfo.products.push(p)
            this.createClient()
            console.log(model.userLogged)
            // this.cadPedido(p)

        },
        sumValue(tot) {
            let valor = tot
            this.value += valor
            console.log(tot)
            console.log(this.value)
            return this.value

        },
        salvarProduto(p) {

            // Pega a lista já cadastrada, se não houver vira um array vazio
            var lista_produtos = JSON.parse(localStorage.getItem('lista-produtos') || '[]');
            // Adiciona pessoa ao cadastro
            lista_produtos.push(p);

            // Salva a lista alterada    
            localStorage.setItem("lista-produtos", JSON.stringify(lista_produtos));
            console.log('Salva com sucesso.');
        },
        toDate(inputDate) {
            const str = inputDate
            const [day, month, year] = str.split('/');
            const date = new Date(+year, month - 1, +day);
            console.log(date)
            return date.getTime()
        },
        cadPedido(p) {
            this.pedido.data_pedido = this.toDate(this.dateToDay()),
                this.pedido.status = 'PENDENTE',
                this.pedido.valor_total = this.sumValue(p.preco_produto),
                this.pedido.valor_frete = 0.0,
                this.pedido.data_entrega = this.toDate(this.dateToDay()),
                this.pedido.produtos.push(p),
                console.log(this.toDate(this.dateToDay()))
            console.log(JSON.stringify(this.pedido))
        },
        dateToDay() {
            var today = new Date();
            var date = today.getDate(+3) + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date // + ' ' + time;

            return dateTime
        },
        createClient() {
            console.log(JSON.stringify(this.model.userLogged))
            console.log(JSON.stringify(this.model.userLogged.userName))
            console.log(JSON.stringify(this.model.pwd))
            axios.post('http://localhost:8080/api/user-cliente', model.userLogged,
                {
                    auth: {
                        username: model.userLogged.userName,
                        password: model.pwd
                    },
                })
                .then(resp => {
                    // this.$router.push('/bolo')
                    console.log(resp.data)
                }).catch(error => {
                    console.log(error.request);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                })
        },
    },
    computed: {
        productsCount() {
            return this.model.shopInfo.products.length
        }
    }
})


</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #FEFAE0;
}

h1 {
    text-align: center;
    margin: 1em 0;
    font-family: sans-serif;
}


.p-togglebutton.p-button {
    margin-left: 2rem;
    border-radius: 20px;
}

.p-togglebutton.p-button.p-highlight {
    background-color: #413b57a2;
    border: none;
    width: 110px;
    height: 20px;
}

.p-togglebutton.p-button.p-highlight:hover {
    background: rgba(36, 117, 197, 0.445);
}

.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {
    background: rgba(36, 117, 197, 0.445);

}

.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {
    background: rgba(36, 117, 197, 0.445);

}

.p-togglebutton.p-button {
    background: #ffffff;
    border: 1px solid #ced4da;
    color: #495057;
    width: 110px;
    height: 20px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
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
</style>