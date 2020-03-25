//funcao sem retorno
//conceito de função 
//função = é um bloco de codigo(rotinas) rotinas quando ela ser invocada
//uma função recebe parametros de entrada ou não
//todas as combinações são possiveis

function imprimirSoma(a,b){
console.log(a+b)

}
imprimirSoma(1,2)
imprimirSoma(2)//Nesse caso o segundo valor seria undefined
imprimirSoma(1,2,3,4,5,6)//nesse caso serão considrados apenas os dois primeiros e o resto sera ingnorado
imprimirSoma()

//função com retorno 

function Soma(a,b = 0)
{
    return a+b
}
console.log(Soma(2,3))
console.log(Soma(2))//Nesse caso como voçê definu um valor padrã para o parametro

console.log(Soma())