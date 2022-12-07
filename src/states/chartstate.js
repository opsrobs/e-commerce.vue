import { reactive } from "vue";
export default reactive ({
    id_Produto: null,
            nome_prod: '',
            preco_prod: null,
            Tipo_Produto_id_tipo_Produto: null,
            currentItem: 1,

            checked: false,
            left: false,
            categories: [],
            cards: [],
            shopInfo: {
                products: []
            },
            pwd:'',
            userLogged: {
                userID:null,
                nome: '',
                cpf_cnpj: '',
                data_nasc: '',
                userName: '',
                password: '',
                roles: [
                {
                    roleId: 1,
                    roleName: "ROLE_USER"
                }
            ]
            },

})