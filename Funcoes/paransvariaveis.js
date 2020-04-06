function soma(){

let soma = 0
for(i in arguments){//basicamente esse array interno pega todos os parametros passados em uma chamada de uma função

    soma+= arguments[1]
}
return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2,2,3,4,5,))
console.log(soma(1,2,"teste"))
console.log(soma('a','a','mafia'))

