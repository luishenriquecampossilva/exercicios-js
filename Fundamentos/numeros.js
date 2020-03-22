const peso1 = 1.5
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const avaliacao1  = 9.871
const avaliacao2 = 6.871


const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total/(peso2+peso1)


console.log(media.toFixed(2))//especifica a quantidade de casas decimas serão exibidades
console.log(media.toString())//converte o valor em uma string mas sem alterar o valor da constante
console.log(typeof media)//retorna o tipo da variavel especificada



