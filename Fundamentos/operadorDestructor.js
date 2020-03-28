///novo recurso es2015

const pessoa = {

    nome:'ana',
    idade:15,
    endereco: {loagadouro:'rua',
    numero:1000
}}


const {//essas chaves representam o operador de desestruturação

nome,idadde

}=pessoa///Esse operador esta designando a seleção dos atributos nome e pessoa do objeto pessoa


console.log(nome,idade)
const{
    nome:n,idadde:i
} = pessoa

console.log(n,i)


const{

    sobrenome,bemhumorada = true
}= pessoa

console.log(sobrenome,bemhumorada)