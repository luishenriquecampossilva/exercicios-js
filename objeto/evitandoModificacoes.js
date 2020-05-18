// Object.preventExtensions
//desse modo não sera possivel adicionar  mais nehhum atributo

/// pode alter ou delatar menos adicionar novos atributos
const produto = Object.preventExtensions({
 
    nome: 'qualquer',preco:1.99, tag:'promoção'


})

console.log('Extensivel:', Object.isExtensible(produto)) //verifica se é possivel adicionar mais elementos ao objeto

produto.nome = 'Borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal de selar


const pessoa = {
    nome:'julian ',idade:35
}

Object.seal(pessoa) //com esse metodo não sera possivel adicionar nem excluir elementos dos objetos,vc somente conseguira alterar os valores dos atributos

console.log('Selado: ',Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log (pessoa)


//Oblect.freeze = selado + valores constantes

//com esse metodo não sera permitido adicionar novos valores ,excluir o modificar








