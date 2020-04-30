//cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0'

const avo = {

    attrl: 'A'
}

const pai = {

    __proto__: avo,attr2:'B'
}


const filho = {__proto__: pai,attr3:'C'}

console.log(filho.attrl,filho.attr2,filho.attr0,filho.attr3)///caso ele encontre o obeto ele encerrara a procura na cadeia de prototipos


const carro = {
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
if(this.velAtual+delta <= this.velMax){
    this.velAtual +=delta
}
else{

    this.velAtual = this.velMax
}
    },
status(){
    return `
    ${this.velAtual} km/h de ${this.velMax}km/h
    
    `
}

    
}


const ferrari = {
    modelo:'F40',
    velMax:324 //shadowing
}

const volvo = {
    modelo:'V40'
    ,
    status(){
        return `
        
        ${

            this.modelo
        }:${
            super.status()
        }
        
        `
    }
}

Object.setPrototypeOf(ferrari,carro)//estabelece a relação de prototipo
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100
    )

    console.log(volvo.status())

    ferrari.acelerarMais(300)
    console.log(ferrari.status())