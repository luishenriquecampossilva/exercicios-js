function compras(trabalho1,trabalho2){

    const comprarsorvete = trabalho1 || trabalho2
    const comprartv50 = trabalho2 && trabalho1
    //const comprartv32 = !!(trabalho1 ^ trabalho2)
    const comprartv32 = trabalho1 !=trabalho2
    const mantersaudavel = !comprarsorvete
return {comprarsorvete,comprartv32,comprartv50,mantersaudavel}

}


console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

