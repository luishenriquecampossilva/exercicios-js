///novo recurso///
const pessoa = {

    nome:'ana',
    idade:23,
    endereco:{
        


        logadouro:'teste',
        numero:1000
    }
}

const{
    nome,idade
}= pessoa

console.log(nome,idade)

const{nome:n,idade:i} = pessoa

console.log(n,i)



const{sobrenome,bemhumorada = true} = pessoa
console.log(sobrenome,bemhumorada)

const {endereco:{logadouro,numero,cep}} = pessoa
console.log(logadouro,numero,cep)


const {conta:{ag,num}} = pessoa
console.log(ag,num)