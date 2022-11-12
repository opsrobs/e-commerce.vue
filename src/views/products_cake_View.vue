<template >
    <div>
        <!-- <div class="container">
            <button @click="isleft()" class="arrow-left control" aria-label="Previous image">◀</button>
            <button @click="isRight()" class="arrow-right control" aria-label="Next Image">▶</button>
            <div class="gallery-wrapper">
                <div class="gallery">

                    <img src="https://source.unsplash.com/random/250x250/?bakery" alt="Beach Image"
                        class="item current-item">
                    <img src="https://source.unsplash.com/random/250x250/?cookie" alt="Animal Image"
                        class="item current-item">
                    <img src="https://source.unsplash.com/random/250x250/?cake" alt="Street Image"
                        class="item current-item">
                    <img src="https://source.unsplash.com/random/250x250/?cheescake" alt="Zoo Image"
                        class="item current-item">
                    <img src="https://source.unsplash.com/random/250x250/?cakes" alt="Model Image"
                        class="item current-item">
                    <img src="https://source.unsplash.com/random/250x250/?coffee" alt="Model Image"
                        class="item current-item">
                    <img src="https://source.unsplash.com/random/250x250/?bread" alt="Model Image"
                        class="item current-item">
                </div>
            </div>
        </div> -->
        <div>
            <row v-for="p in categories" :key="p.id_tipo_produto">
                <toggle-button v-model="p.id_tipo_produto" :onLabel="p.nome_tipo_produto" :offLabel="p.nome_tipo_produto" />
            </row>
        </div>
        <!-- TODO: Centralizar os componentes dos cards -->
        <div class="card-group" v-for="c in cards" :key="c.img">
            <div class="card">
                <img class="card-img-top" :src="c.img" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ c.title }}</h5>
                    <p class="card-text">{{ c.body }}</p>
                    <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>

                </div>
            </div>

        </div>

    </div>


</template>

<script>
// import Carousel from 'primevue/carousel'
import ToggleButton from 'primevue/togglebutton'
import axios from 'axios';




// import Button from 'primevue/button';


export default {
    data() {
        return {
            id_Produto: null,
            nome_prod: '',
            preco_prod: null,
            Tipo_Produto_id_tipo_Produto: null,
            currentItem: 1,

            checked: false,
            left: false,
            categories: [],
            cards: [
                {
                    img: "https://source.unsplash.com/random/250x250/",
                    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis iaculis ipsum, id tincidunt lorem pellentesque varius. Interdum et malesuada fames ac ante ipsum primis."
                },
                {
                    img: "https://source.unsplash.com/random/250x250/",
                    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis iaculis ipsum, id tincidunt lorem pellentesque varius. Interdum et malesuada fames ac ante ipsum primis."
                },
                {
                    img: "https://source.unsplash.com/random/250x250/",
                    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis iaculis ipsum, id tincidunt lorem pellentesque varius. Interdum et malesuada fames ac ante ipsum primis."
                },
                {
                    img: "https://source.unsplash.com/random/250x250/",
                    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis iaculis ipsum, id tincidunt lorem pellentesque varius. Interdum et malesuada fames ac ante ipsum primis."
                },
                {
                    img: "https://source.unsplash.com/random/250x250/",
                    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis iaculis ipsum, id tincidunt lorem pellentesque varius. Interdum et malesuada fames ac ante ipsum primis."
                },
                {
                    img: "https://source.unsplash.com/random/250x250/",
                    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis iaculis ipsum, id tincidunt lorem pellentesque varius. Interdum et malesuada fames ac ante ipsum primis."
                },
                {
                    img: "https://source.unsplash.com/random/250x250/",
                    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis iaculis ipsum, id tincidunt lorem pellentesque varius. Interdum et malesuada fames ac ante ipsum primis."
                },
            ]

        }
    },
    methods: {
        check() {
            this.currentItem
            //alert(this.checked)
        },
        isleft() {
            this.left = true;
            this.currentItem -= 1
            this.carousel()

        },
        isRight() {
            this.left = false;
            this.currentItem += 1
            this.carousel()
        },
        carousel() {
            const controls = document.querySelectorAll(".control");
            const items = document.querySelectorAll(".item");
            const maxItems = items.length;

            controls.forEach((control) => {
                control.addEventListener("click", (e) => {
                    console.log(e)


                    if (this.currentItem < 0) {
                        this.currentItem = maxItems - 1;
                    }
                    if (this.currentItem >= maxItems) {
                        this.currentItem = 0;
                    }
                    items.forEach((item) => item.classList.remove("current-item"));

                    items[this.currentItem].scrollIntoView({
                        behavior: 'auto',
                        block: 'center',
                        inline: "center"
                    });

                    items[this.currentItem].classList.add("current-item");
                });
            });
        },
        get_categories() {
            

        }


    },
    mounted(){
        axios.get("https://run.mocky.io/v3/80ef2f6b-3c85-4ce8-967f-959ca66e1379")
                .then(resp => {
                    this.categories = resp.data
                    console.log(resp.data)
                    
                })
    },
    components: {
        ToggleButton,
    }
}

</script>
<style>
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
    height: 700px;
    width: 300px;
    padding: 15px;

    float: left;
}



.card-img-top {
    padding: 3px;
}
</style>