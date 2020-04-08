const pessoa = {


    saudacao:'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falardepessoa = pessoa.falar.bind(pessoa)///essa função bind permite com que voçè referencio o this
falardepessoa()