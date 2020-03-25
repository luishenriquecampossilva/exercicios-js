//armazenado uma função em uma variavel

const imrimirSoma = function(a,b){
    console.log(a+b)
}
imrimirSoma(2,3)


//armazenando uma função arrow em uma variavel
const soma = (a,b) =>{//essa seta substitui o nome function
return a+b
}

console.log(soma(2,3))

//retorno implicito
const Subtracao = (a,b) => a-b
console.log(Subtracao(2,3))
const imprimir2 = a => console.log(a)
imprimir2('legal')