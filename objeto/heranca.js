const ferrari = {


    moodelo:'F40',
    velMax:324
}

const  volvo = {

    moodelo:'V40',
    velMax:200
}
console.log(ferrari.__proto__)//procura em toda a cadeia de prototipo para verificar se existe um prototipo deste objeto
console.log(ferrari.__proto__ ===   Object.prototype)///um objeto por padrão aponta para prototype

console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)
//__proto___//atributo de um objeto

function MeuObjeto(){

}

console.log(typeof Object,typeof MeuObjeto)
console.log(Object.prototype,MeuObjeto.prototype)



console.log(Object.prototype.__proto__)