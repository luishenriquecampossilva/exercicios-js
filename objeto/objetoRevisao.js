///coleção de chave valor

const produto = new Object
produto.nome = "cadeira"
produto['marca do produto']='generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {

    modelo: 'a4',
    valor:89000,
    proprietario:{
        nome:'raul',
        idade:56,
        endereco:{
            logadouro:'rua abc',
            numero:123
        }
    },condutores:[{
        nome:'luis',
        idade:24

    },{
        nome:'ana',
        idade:42
    }],
    calcularValorSeguro:function(){

    }
}
carro.proprietario.endereco.numero = 100
carro['proprietario']['endereco']['logadouro'] = 'av gigante'

console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)