<template>
    <div>
        <Sidebar id="sidebar" v-model:visible="visibleLeft" position="right">
            <h2 id="tProduto">Produto</h2>
            <tr v-for="c in product" :key="c.id">
                <td>{{ product.nomeProduto  }}</td>
                <td>{{ product.preco_produto }}</td>
            </tr>
            <Button class="buy" @click="buy()">Finalizar Compra</Button>
        </Sidebar>
        <span class="material-icons" @click="abrirSidenav">shopping_cart</span>
        <!--<button type="button">Subscribe</button>-->
    </div>
</template>
<script>
import Sidebar from 'primevue/sidebar';

export default {
    data() {
        return {
            visibleLeft: false,
            products: null

        }
    },
    props: {
        product: []
    },
    methods: {
        abrirSidenav() {
            this.products = this.product
            this.visibleLeft = true; console.log("deveria funcionar " + this.visibleLeft)
        },
        buy(product){
             this.$router.push(`/payment/${product.id}`)
        }
    },
    components: {
        Sidebar

    },
    setup() { }

}
</script>