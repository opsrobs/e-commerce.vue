<template>
    <div>
        <Carousel :value="cars" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #header>
                <h2>Basic</h2>
            </template>
            <template #item="cars">
                <div class="car-item">
                    <div class="car-content">
                        <div>
                            <img :src="'https://source.unsplash.com/random/250x250/?beach'" alt="test" />
                            <img :src="'https://source.unsplash.com/random/250x250/?sexy'" alt="test" />
                            <img :src="'https://source.unsplash.com/random/250x250/?nsfw'" alt="test" />
                        </div>
                        <div>
                            <div class="car-title">{{cars.data.car}}</div>

                            <div class="car-buttons">
                                <Button icon="pi pi-search" class="p-button-secondary" />
                                <Button icon="pi pi-star-fill" class="p-button-secondary" />
                                <Button icon="pi pi-cog" class="p-button-secondary" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>


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
import ToggleButton from 'primevue/togglebutton'
import Carousel from 'primevue/carousel'
import Button from 'primevue/button';



// import Button from 'primevue/button';


export default {
    data() {
        return {
            id_Produto: null,
            nome_prod: '',
            preco_prod: null,
            Tipo_Produto_id_tipo_Produto: null,

            checked: false,
            left: false,
            cars: [
                {
                    car: 'https://source.unsplash.com/random/250x250/?beach',
                    car1: 'https://source.unsplash.com/random/250x250/?sexy'
                }
            ],
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
            ]





        }
    },
    methods: {
        check() {
            //alert(this.checked)
        },
        isleft() {
            this.left = true;
            console.log(this.left)
            this.tt()

        },
        isRight() {
            this.left = false;
            console.log(this.left)
            this.tt()
        },
        tt() {

        }

    },
    components: {
        Carousel,
        ToggleButton,
        Button
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

.container {
    position: relative;
    padding: 15px;
    max-width: 640px;
    margin: 0 auto;
}

.gallery-wrapper {
    overflow-x: auto;
}

.arrow-left,
.arrow-right {
    position: absolute;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
    font-size: 20px;
    line-height: 250px;
    width: 40px;
    color: #fff;
    transition: all 600ms ease-in-out;
    background: linear-gradient(to left, transparent 0%, black 200%);
    opacity: 0.1;
    cursor: pointer;
    border: none;
}

.arrow-left:hover,
.arrow-right:hover {
    opacity: 1;
}

.arrow-right {
    right: 0;
    left: auto;
    text-align: right;
    background: linear-gradient(to right, transparent 0%, black 200%);
}

.gallery {
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
}

.item {
    width: 250px;
    height: 250px;
    flex-shrink: 0;
    transition: all 600ms ease-in-out;
    opacity: 0.5;
}

.current-item {
    opacity: 1;
}

/* This is from w3schools */
/* 
https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp */
/* Hide scrollbar for Chrome, Safari and Opera */
.gallery-wrapper::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.gallery-wrapper {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.cyan {
    background: cyan;
}

.deeppink {
    background: deeppink;
}

.turquoise {
    background: turquoise;
}

.darkblue {
    background: darkblue;
}

.purple {
    background: purple;
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