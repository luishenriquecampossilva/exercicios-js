const valor = 'global'

///uma função tem ciencia do local onde ela foi escrita
function minhafuncao(){


    console.log(valor)
}
function exec(){
    const valor= 'local'
    minhafuncao()
}

exec()