function getPreco(imposto = 0.1,moeda = 'R$'){

    return `${moeda}${this.preco *(1-this.desc)*(1+imposto)}`

}

    const produto ={
nome:'notebook',
preco:4589,
desc:0.15,
getPreco
    }

    globalThis.preco = 20
    globalThis.desc = 0.1
    console.log(getPreco())
    console.log(produto.getPreco())




const carro = {preco: 49990, desc:0.2}

console.log(getPreco.call(carro))//contexto que sera referencia para função chamada

console.log(getPreco.apply(carro))




