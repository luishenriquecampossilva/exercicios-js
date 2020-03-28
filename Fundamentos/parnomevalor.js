const saudacao = 'Opa' //contexto lexico 1


function exec()
{

    const saudacao = 'falaa' //texto lexico 2
    return saudacao
}

//objeto são gruopos aninhados de pares nome/valor

const cliente ={

    nome: 'luis',
    idade: 13,
    peso:90,
    endereco:{
        logadouro:'',
        numero:123
    }
    }
console.log(saudacao)

console.log(exec())

console.log(cliente)