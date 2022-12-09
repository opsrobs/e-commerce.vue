import { reactive } from "vue";
export default reactive({
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
    pwd: '',
    contentPerson: {
        pessoa: {
            userID: null,
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
        }
    },
    selectedProducts: {
        produto: {
            id_Produto: null
        }
    },
    userAddress: {
        endereco: {
            id: 0
        }
    },
    client: {
        cliente: {
            idCliente: null
        }
    },
    numeroPedido:0,

    pedido: {
        data_pedido: null,
        status: null,
        valor_total: 11.20,
        valor_frete: 0.0,
        data_entrega: 1654884910,
        produtos: '',
        // endereco: null, descomentar se tiver o cadastro de endereco
        cliente: {
            idCliente: null
        }

    }, 
    totalPedido: null

})