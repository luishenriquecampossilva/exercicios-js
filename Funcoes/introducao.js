//função em js é first-class object



//função de forma literal

function func1(){




}

//armazenar em uma variavel
const func2 = function(){

}

//armazenar em um array
const array = [function(a,b){return a+b},func1,func2]

console.log(array[0](2,3))

//armazenar em um atributo de objeto

const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

//passar função como parametro
function run(fun){
    fun()
}

run(function(){console.log('executando...')})

//uma função pode retornar //conter uma função


function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

const cincomais = soma(2,3)

cincomais(4)


