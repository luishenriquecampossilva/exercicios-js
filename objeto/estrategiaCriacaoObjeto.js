///usando a notação literal


const obj1 = {

}

console.log(obj1)


//object em js

console.log(typeof Object,typeof new Object)

const obj2 = new Object

console.log(obj2)


//funções construtoras

function Produto(nome,preco,desconto){
    this.nome = nome //atributo public
    this.getPrecoComDesconto = () =>{
        return preco * (1-desconto)
    }
}

const p1 = new Produto('caneta',7.99,0.15)
const p2 = new Produto('notebook',3000,0.24)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//function factory

function criarFuncionrio(nome,salarioBase,faltas){
return {
    nome,
    salarioBase,
    faltas,
    getSalario(){
        return (salarioBase /30)*(30-faltas)
    }
}

}

const f1 = criarFuncionrio('João',7980,4)
const f2 = criarFuncionrio('maria',11400,1)

console.log(f1.getSalario(),f2.getSalario())


//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//umafunção famosa que retorna um object
const fromJSON = JSON.parse('{"info":"teste"}  ')
console.log(fromJSON.info)
