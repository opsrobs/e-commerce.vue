<template>
    <div>

        <body>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form @submit.prevent="confirmarCadastro()">
                <label>Cep</label>
                <input class="inputCep" type="text" v-model="endereco.cep" required placeholder="Cep" id="cep">

                <button class="buttonCep" @click="getCepInfo()">SEARCH</button>

                <label>UF</label>
                <input class="inputReadOnly" type="text" v-model="stade.uf" required id="uf">

                <label>Cidade</label>
                <input class="inputReadOnly" type="text" v-model="city.nome_city" id="city">

                <label>Bairro</label>
                <input class="inputReadOnly" type="text" v-model="bairro.nomeBairro" required id="bairro">

                <label>Rua</label>
                <input type="text" v-model="endereco.rua" required placeholder="Rua" id="rua">

                <label>Número</label>
                <input type="text" v-model="endereco.numero" required placeholder="Número" id="numero">

                <label>Complemento</label>
                <input type="text" v-model="endereco.complemento" required placeholder="Complemento" id="complemento">

                <button class="buttonConfirmar">CONFIRMAR</button>
            </form>
        </body>
    </div>

</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            stade: {
                uf: '',
                nome_estado: 'scc' //valor fixo pra teste, pois não tem input pro nome completo
            },
            city: {
                nome_city: ''
            },
            bairro: {
                nomeBairro: ''
            },
            endereco: {
                cep: '',
                rua: '',
                complemento: '',
                numero: '',
                ativo: true
            }
        }
    },
    mounted() {

    },

    methods: {
        getCepInfo() {
            axios.get(`https://viacep.com.br/ws/${this.endereco.cep}/json/`).then(resp => {
                /*alert(resp)
                console.log(resp.data)*/

                this.stade.uf = resp.data.uf
                this.city.nome_city = resp.data.localidade
                this.bairro.nomeBairro = resp.data.bairro
                this.endereco.rua = resp.data.logradouro
                this.endereco.cep = resp.data.cep
            }).catch(resp => alert(resp.body))
        },

        confirmarCadastro() {
            alert(this.stade.nome_estado) //tentando de inicio postar só estado
            axios.post('http://localhost:8080/api/user-address-stade', this.stade).then(resp => {
                this.$router.push('/bolo')
                console.log(resp.data)
            }
            ).catch(resp => alert(resp.body))
        }
    }
}
</script>

<style media="screen">
*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #FEFAE0;
}

.background {
    width: 430px;
    height: 1300px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    bottom: 70%;
}

form {
    height: auto;
    width: 400px;
    background-color: #e9edc9;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 550px;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid #c8cbac;
    box-shadow: 0 0 40px rgba(8, 7, 16, 1);
    padding: 50px 35px;
}

form * {
    font-family: 'Poppins', sans-serif;
    color: #d4a373;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label {
    display: block;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
}

input {
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.47);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}

.inputCep {
    width: 60%;
}

.inputReadOnly {
    background-color: rgba(235, 233, 233, 0.47);
}

.buttonCep {
    background-color: #dadebd;
    border-radius: 10%;
    width: 36%;
    height: 45px;
    margin-left: 4%;
    border-color: #a9ac90;
}

.buttonConfirmar {
    background-color: #dadebd;
    border-radius: 3%;
    width: 100%;
    height: 45px;
    margin-top: 10%;
    border-color: #a9ac90;
}

::placeholder {
    color: #ce8e4f53;
}
</style>