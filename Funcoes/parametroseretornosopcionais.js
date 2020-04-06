function area(largura,altura){

    const are = largura*altura

    if(are>20){
        console.log('acima do valor')
    }else{
        return are
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,4,5,6,6,7))
console.log(area(5,5))

