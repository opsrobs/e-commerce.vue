<template >
    <div>
        <h1>Fizemos o Carousel funcionar :)</h1>

        <div class="container">
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
        </div>
        <div>

            <row v-for="p in products" :key="p.status">
                <toggle-button v-model="p.status" :onLabel="p.label" :offLabel="p.label" />
            </row>

            
        </div>

    </div>

</template>

<script>
// import Carousel from 'primevue/carousel'
import ToggleButton from 'primevue/togglebutton'
// import Carousel from 'primevue/carousel'
// import Button from 'primevue/button';



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
            products: [
                {
                    status: false,
                    label: 'Batata'
                },
                {
                    status: true,
                    label: 'Marshmello'
                },
                {
                    status: false,
                    label: 'Alok'
                },
                {
                    status: false,
                    label: 'Baskara'
                },
            ],
           
        }
    },
    methods: {
        check() {
            this.currentItem
            //alert(this.checked)
        },
        isleft() {
            this.left = true;
            console.log(this.left)
            this.currentItem -= 1
            this.tt()

        },
        isRight() {
            this.left = false;
            console.log(this.left)
            this.currentItem += 1
            this.tt()
        },
        tt() {
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
                        behavior: "smooth",
                        inline: "center"
                    });

                    items[this.currentItem].classList.add("current-item");
                });
            });


        }

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

.container {
    position: relative;
    padding: 15px;
    max-width: 800px;
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
</style>