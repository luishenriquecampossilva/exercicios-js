function tratarerro  (erro){
throw new Error('...')
throw 10
throw true
throw 'mensagem'


throw{
nome: erro.name,
msg: erro.message,
date: new Date

}
}



function imprimirnomegritado(obj){
try{




    console.log(obj.name.toUpperCase() + '!!!')

}catch(e){
    tratarerro(e)
}finally{
    console.log('final')
}

}

const obj = {
    name:'robert'
}

imprimirnomegritado(obj)