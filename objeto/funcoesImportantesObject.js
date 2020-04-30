const pessoa = {

    nome:'Rebeca',
    idade: 2,
    peso: 13
}


console.log(Object.keys(pessoa))//pega todas as chaves do objeto pessoa
console.log(Object.values(pessoa)) //pega os valores do objeto pessoa

console.log(Object.entries(pessoa))//retorna um array com outros arrays

const teste = Object.entries(pessoa)


// Object.entries(pessoa).forEach([chave] ,[valor] ,
//     console.log(`${chave}:${valor}`)
    
// })


Object.defineProperty(pessoa,'dataNascimento',{
    enumerable: true,//é enumerada
    writable:false,//não aceita ser escrita
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2002'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


const dest = {
    a:1
}
const o1 = {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest,o2,o1)///pega todos os elementos apartir do segundo objeto e joga tudo no primeiro



Object.freeze(obj)//congela um objeto impedido que seus atributos sofram alterações
obj.c = 123
console.log(obj)







//console.log(teste[0][3])