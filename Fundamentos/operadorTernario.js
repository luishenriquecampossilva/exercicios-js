// const resultado = nota =>nota>7 ? 'aprovado': 'reprovado'

// console.log(resultado(7.1))
// console.log(resultado(6.9))

let a = 3
global.b = 123
this.c = 456
this.d = false

this.e = 'teste'
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)//corresponde o proprio objeto window


//crinado uma variavel
abc = 3

console.log(global.abc)



