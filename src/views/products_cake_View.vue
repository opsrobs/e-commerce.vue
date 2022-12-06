<template >
    <div>

        <div>

            <row v-for="p in model.categories" :key="p.id_tipo_produto">
                <toggle-button v-model="p.status" :onLabel="p.nome_tipo_produto" :offLabel="p.nome_tipo_produto" />
            </row>
        </div>
        <!-- TODO: Centralizar os componentes dos cards -->
        <div class="card-group" v-for="c in model.cards" :key="c.id">
            <div class="card">
                <img class="card-img-top" :src="c.urlimagem" alt="Card image cap" width="230" height="215">
                <div class="card-body">
                    <h5 class="card-title">{{ c.nomeProduto }}</h5>
                    <p class="card-text">{{ lengthDescription(c.descProduto) }}</p>
                    <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <a class="btn btn-outline-dark mt-auto" href="#" @click="pushToSide(c)">Adicionar ao carrinho</a>
                    
                </div>
            </div>

        </div>

    </div>


</template>

<script>
// import Carousel from 'primevue/carousel'
// import ToggleButton from 'primevue/togglebutton'
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
        // axios.get("https://run.mocky.io/v3/80ef2f6b-3c85-4ce8-967f-959ca66e1379")
        //     .then(resp => {
        //         this.model.categories = resp.data
        //         console.log(resp.data)

        //     })
        axios.get("http://localhost:8080/api/user-products")
            .then(resp => {
                this.model.cards = resp.data.content
                console.log(resp.data)

            })
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
            isleft,
            isRight,
            carousel,
            lengthDescription,
            model
        }
    },
    components: {
        // ToggleButton,
    },
    methods: {
        pushToSide(p) {
            this.salvarProduto(p)
            model.shopInfo.products.push(p)
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
body{
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