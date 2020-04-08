function pessoa(){

    this.idade = 0
const selt = this
    setInterval(function(){
self.idade++
console.log(this.idade)

    }/*.bind(this)*/,1000)//ESTA FUNÇÃO DISPARA UMA OUTRA FUNÇÃO A PARTIR DE UM DETERMINADO INTERVALO
}


new pessoa