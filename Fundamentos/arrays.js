const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])


valores[4] = 10
console.log(valores)
console.log(valores.length)///retorna a quantidade de elementos em um array
valores.push({id:3},false,null,'teste')///este metodo adiciona novos elementos em um array
console.log(valores)
console.log(valores.pop)//retira o ultimo elemento de um array
delete valores[0]///retira um atributo de um onjeto
console.log(valores)



console.log(typeof valores)