///closure e o escopo criado quando a função e declarada
//esse escopo permite a função acessar e manipular variaveis externas a função

const x = 'global'


function fora(){
    const x = 'local'

    function dentro(){
        return x}
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())