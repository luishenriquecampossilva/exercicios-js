class Pessoa{


    construtor(nome){

        this.nome = nome
    }
    falar(){
        console.log(`Mreu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarpessoa = nome =>{
    return{
        falar:()=>console.log(`meu nome e ${nome}`)
    }
}

const p2 = criarpessoa('joão')

p2.falar()