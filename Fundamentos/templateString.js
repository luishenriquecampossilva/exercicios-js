const nome = 'Rebeca'
const concatenacao = 'Ola '+nome+' !'
const template = `
ola

${nome}!`
///Atraves do templatestring as quebras de linhas são considerads e e feita uma interpolação de variaveis
console.log(concatenacao,template)

///ele interpolar o que estiver dentro das chaves
console.log(`1 + 1 = ${1+1}`)



///criando uma função anonima
const up = s => s.toUpperCase()
console.log(`Ei... ${up(`cuidado`)}!`)