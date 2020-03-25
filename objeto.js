const prod1 = {}//forma literal de criar um objeto
prod1.nome = 'celular ultra mega'
prod1.preco = 50000
prod1['Desconto Legal']=0.40 //evitar atributos com espaçõs

console.log(prod1)


const prod2 = {

    nome:'camisa polo',
    preco: 10.00,
    obj:{
        blabla:1,
        obj:{
            blabla:2
        }
    }
}

console.log(prod2)