<template>
    <div>
        <div  id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-50"
                        src="https://novonegocio.com.br/wp-content/uploads/2011/10/Como-Criar-Patos-1200x801.jpg"
                        alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-50"
                        src="https://img.freepik.com/fotos-premium/engracado-quacking-patos-na-fazenda_119570-478.jpg?w=2000"
                        alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://thumbs.dreamstime.com/b/patos-em-seguido-28469106.jpg"
                        alt="Third slide">
                </div>
            </div>
            <button  class="carousel-control-prev"  data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button >
            <button  class="carousel-control-next"   data-slide="next">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button >
            
            
        </div>








        <div>

            <ToggleButton v-model="checked" @click="check()" />
            <ToggleButton v-model="checked" @click="check()" />
            <ToggleButton v-model="checked" @click="check()" />
            <ToggleButton v-model="checked" @click="check()" />
            <ToggleButton v-model="checked" @click="check()" />
        </div>

    </div>

</template>

<script>
// import Carousel from 'primevue/carousel'
import ToggleButton from 'primevue/togglebutton';

// import Button from 'primevue/button';


export default {
    data() {
        return {
            id_Produto: null,
            nome_prod: '',
            preco_prod: null,
            Tipo_Produto_id_tipo_Produto: null,

            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '600px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ],
            items: [
                {
                    item: "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
                    item1: "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
                    item2: 'c'

                }
            ],
            checked: true



        }
    },
    methods: {
        check() {
            //alert(this.checked)
        },
        tt(){
            ('.carousel').carousel()
        }

    },
    components: {
        // Carousel,
        ToggleButton,
        // Button
    }
}

</script>
<style>
#carousel {
    border: 1px solid #0000
}

.p-togglebutton.p-button {
    margin-left: 2rem;
    border-radius: 20px;
}

.p-togglebutton.p-button.p-highlight {
    background-color: #413b57a2;
    border: none;
    width: 90px;
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
    width: 90px;
    height: 20px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
</style>