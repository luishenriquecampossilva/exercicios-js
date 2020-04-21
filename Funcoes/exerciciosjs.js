



// //exercicio 01

// function calculadora(valor1,valor2){


//     console.log(valor1 - valor2)
//     console.log(valor1 + valor2)
//     console.log(valor2*valor1)
//     console.log(valor1/valor1)
// }
//     // calculadora(1,2)

// //exercicio 02

// function analisaTriangulo(lado1,lado2,lado3){

//     if(lado1 == lado2 && lado2 == lado3){
//         console.log("Triângulo Equilatero")
//     }
//     if((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3 )){
//         console.log("Triângulo Escaleno")
//     }

//     if((lado1 == lado2)&&(lado2!=lado3)||(lado3 == lado2)&&(lado2!=lado1)){
//          console.log("Triangulo Isosceles")
//      }
// }

// // analisaTriangulo(1,0,10)


// ///exercicio 03

// function potencia(base,expoente){
// total = 1
// for(i=1; i<=expoente;i++){

//    total *=base


// }
//   console.log(total)  
// }
// // potencia(4,4)

// //exercicio 04


// function divisao(dividendo,divisor){

// console.log("Resultado = "+ dividendo/divisor)

// console.log("Resto = "+dividendo%divisor)

// }
// // divisao(5,3)
//exercicio 5


//exercicio 6



//exercicio 06
function jurosSimples(capital,taxa,tempo){
montante = capital*taxa*tempo
montante1 = capital + montante
return montante1
}
function jurosCompostos(capital,taxa,tempo){
    teste= 1
    taxa2 = taxa+1
    for(i=1;i<=tempo;i++){
teste*=taxa2
    }


montante = capital*teste

return montante
}
// console.log(jurosCompostos(120,0.33,2))
//exercicio 7
function equacao2(a,b,c){
teste = b*b-4*a*c
x1= Math.sqrt(teste)
xa= -b+x1
xb = -b-x1
xaa = xa/(2*a)
xbb = xb/(2*a)
if(teste < 1){
console.log("Delta negativo")

}
else{
    console.log("x1: "+xaa)
    console.log("x2: "+xbb)
}

}
//equacao2(5,10,4)


//exercicio 8

//exercicio 9

function arredobdamento(nota){
 if(nota>37){
// nota = 40
for(i=5;i<nota;i+=5){
   
   
}

if(nota - i ==0){

    console.log(i)
}
if((i-nota)<3){
    nota = i
    console.log("Aprovado "+nota)
}
else{
    console.log("Aprovado "+nota)
}
 }
else{console.log("Reprovado "+nota)}



}
//arredobdamento(43)
//exercicio 10
function inter(n){

    if(n%3 == 0){

        return true
    }
    else{
        return false
    }
}
//console.log(inter(33))
//exercicio 11

function bissexto(ano){

    if((ano%4 == 0) &&(ano%400 ==0)){
        console.log("Bissexto")
    }
    else{console.log("Não bissexto")}
}
//bissexto(1332)
//exercicio 12
function inteiro(valor){
if(valor % 2 == 1){

    return console.log(true)
}
else{
    return console.log(false)
}

}

// inteiro(1)

// //exercicio 12

// function fatorial(valor){
//     total = 1
// for(i=valor;i>1;i--){
// total*=i

// }
// console.log(total)
// }

// fatorial(4)

//exercicio 13

function diaDaSemana(dia){

    switch (dia) {
        case 1:
            console.log("Domindo")
            break;
        case 2:
            console.log("Segunda")
            break;
        case 3:
            console.log("Terça")
            break;
        case 4:
            console.log("Quarta")  
            break;
        case 5:
            console.log("Quinta")  
            break;
        case 6:
            console.log("Sexta")
            break;
        case 7:
            console.log("Sabado")
            break;
        default:
            console.log("Dia invalido")
            break;
    }
}
// diaDaSemana(35)


//exercicio 14

function frutas(fruta){

    switch (fruta) {
        case "maça":
            console.log("Na vendemos esta fruta aqui")
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break;
        case "melancia":
            console.log("Aqui esta são 3 reais o kg")
            break;
        default:
            console.log("erro")
            break;
    }
}

// frutas("kiwi")


//exercicio 15

function carro(carro){


    switch (carro) {
        case "hatch":
            console.log("Compra efetuada com sucesso")
            break;
        case "sedans","motocicletas","caminhonetes":
            console.log("Tem certeza que não prefere este modelo?")
            break;
   
    
        default:
            console.log("Não trabalhamos com este tipo de automovel aqui !")
            break;
    }
}
// carro("hatch")

//exercico 16

function calc(operando1,operando2,operador){

    switch (operador) {
        case "+":
            console.log(operando1+operando2)
            break;
        case "-":
            console.log(operando1 - operando2)
            break;
        case "/":
            console.log(operando1/operando2)
            break;
        case "*":
            console.log(operando2*operando1)
        default:
            console.log("Erro")
            break;
    }
}
// calc(1,2,"+")

//exercicio 17

function planoTrabalho(salario,plano){

    switch (plano) {
    case "a":
            console.log(salario+salario*0.1)
            break;
    case "b":
        console.log(salario+salario*0.15)
        break;
    case "c":
        console.log(salario+salario*0.2)
    break;
        default:
            console.log("Plano invalido")
            break;
    }
}




// planoTrabalho(100,"c")

//exercico 18

function numeroExtenso(valor){

    switch (valor) {
        case 0:
            console.log("zero")
            break;
        case 1:
            console.log("um")
            break;
        case 2:
            console.log("dois")
            break;
        case 3:
            console.log("três")
            break;
        case 4:
            console.log("quatro")
            break;
        case 5:
            console.log("cinco")
            break;
        case 6:
            console.log("seis")
            break;
        case 7:
            console.log("sete")
            break;
        case 8:
            console.log("oito")
            break;
        case 9:
            console.log("nove")
            break;
        case 10:
            console.log("dez")
            break;
        default:
            console.log("valor invalido")
            break;
    }
}

//numeroExtenso(20)
///exercicio 20

function bank(saque){

}




//exercicio 21
function planoSaude(idade){
    switch (idade) {
        case idade<10:

        console.log(80+100)
            
            break;
        case idade>=10 && idade<=30:

        console.log(50+100)

            break;
        case idade>=30 && idade<=60:

            console.log(95+100)

            break;

        case idade>60:

            console.log(100+130)

            break;
        
    }
}
// planoSaude(9)
///exercicio 22
function anuidade(valor){
teste = 1
    for ( index = 1; index <=valor; index++) {
        teste*=0.05
    }
return teste
}
//console.log(anuidade(3))
///exercico 23
const aluno ={

    codigo:100,
    nota1:10,
    nota2:9,
    nota3:0
}

if(aluno.nota1>aluno.nota2 && aluno.nota2>aluno.nota3){
//console.log((aluno.nota1*4+aluno.nota2*3+aluno.nota3*3)/10)
}

if(aluno.nota3>aluno.nota1 && aluno.nota1>aluno.nota2){
   // console.log((aluno.nota3*4+aluno.nota2*3+aluno.nota3*1)/10)

}

if(aluno.nota2>aluno.nota3 && aluno.nota3<aluno.nota1){
   // console.log((aluno.nota2*4+aluno.nota1*3+aluno.nota3*3)/10)


}
// //exercicio 24
// i=0
// while(i<=11){
// ++i
//     console.log("Hello World !")
// }
// //exercicio 25
// for(i=0;i<=50;i++){

//     console.log(i)
// }

// //exercicio 26

// for(i=1;i<=100;i++){

//     if(i%2==0){

//         console.log(i)
//     }
// }


//exercicio 27

function altura(alt1,alt2,t1,t2){
    teste = 0
   
for ( i = alt1; i <= alt2; i+=t1) {
    teste+=1
    
}
return teste+1
}
//console.log(altura(1,5,2,1))
// //exercicio 28
// function parImpar(){
//     teste = 0
//         let soma = 0
//         teste2 = 0
//         for(i in arguments){//basicamente esse array interno pega todos os parametros passados em uma chamada de uma função
        
//             if(arguments[i] % 2 == 0){
//                 teste+=1
//             }
//             else{

//                 teste2+=1
//             }
//         }
//         return  teste
//         }
        
//         console.log(parImpar(5,1,5,2,20,55,12))
// //exercicio 29
// function intervalo(){
//     teste = 0
//         let soma = 0
//         teste2 = 0
//         for(i in arguments){//basicamente esse array interno pega todos os parametros passados em uma chamada de uma função
        
//             if((arguments[i]>=10 && arguments[i]<=20)){
//                 teste+=1
//             }
//             else{

//                 teste2+=1
//             }
//         }
//         return  teste2
//         }
        
//         console.log(intervalo(5,1,5,2,20,55,12))
// // //exercicio 30
// // function maiorValor(){
// //     teste = 0
// //         let soma = 0
// //         for(i in arguments){//basicamente esse array interno pega todos os parametros passados em uma chamada de uma função
        
// //             if(teste < arguments[i]){
// //                 teste=arguments[i]
// //             }
// //         }
// //         return  teste
// //         }
        
// //         //  console.log(maiorValor(5,5,20,55,12))

// // //exercicio 31
// // function verificaNegativo(){
// //     teste = 0
// //         let soma = 0
// //         for(i in arguments){//basicamente esse array interno pega todos os parametros passados em uma chamada de uma função
// //             if(arguments[i]<0){
// //         teste +=1
// //              }
// //         }
// //         return  teste
// //         }
        
// //         console.log(verificaNegativo(-5,5,20,15,-12))


    
// // //exercicio 32
// // vetor = [5,5,20,15,12]
// // function media(){
// //     teste = 0
// //         let soma = 0
// //         for(i in arguments){//basicamente esse array interno pega todos os parametros passados em uma chamada de uma função
// //         teste +=1
// //             soma+= arguments[i]
// //         }
// //         return  soma/teste
// //         }
        
// //         console.log(media(5,5,20,15,12))
///exercicio 33
vetorinteiro=[1,2,3,4]
vetorstring = ["a","e","i","o"]
vetordouble = [1.2,1.2,2.3,4.5]
concatenacao = vetorinteiro.concat(vetorstring).concat(vetordouble)
//console.log(concatenacao)
///exercicio 34
///exercico 35
vetorpilha = [1,2,3,4,5]
vetoradiciona = [6,7,8,9,10]
vetorpilha.push(vetoradiciona)
// console.log(vetorpilha)

//exercicio 36
teste = [1,2,7,4]
teste2 = []

function v1(vetor,inteiro,vetor1){
    for (let index = 0; index < vetor.length; index++) {
        vetor1.push(vetor[index]*inteiro)
        
    }
    console.log(vetor1)
}

function v2(vetor,inteiro,vetor1){
    for (let index = 0; index < vetor.length; index++) {
        if(vetor[index]>5){
        vetor1.push(vetor[index]*inteiro)
        
    }}
    console.log(vetor1)
}

//v2(teste,3,teste2)
///exercicio 37

// // //exercicio 38

// // function inicioFim(inicio=0,fim=100){
// // if(inicio<fim){
// //     for(i=inicio;i<fim;i++){

// //         if(i % 2 == 1){
// //             console.log(i)

// //         }
// //     }
// // }
// // if(inicio>fim){
// //     for(i=fim;i<inicio;i++){

// //         if(i % 2 == 1){
// //             console.log(i)

// //         }
// //     }

// // }
// // }
// // inicioFim(55,15)




///exercicio 39
teste1 = [1,3,4]
teste2 = [7,8,5]
function vetorDuplo(vetor1,vetor2){

    for(let l=0;l<=vetor1.length;l++){
if(vetor1[l] != vetor2[l]){
    vetor1[l] = vetor2[l]
    
}

console.log(vetor1)
}
for(l=0;l<=vetor1.length;l++){
    if(vetor2[l] != vetor1[l]){
        vetor2[l] = vetor1[l]
        
    }
    
    console.log(vetor2)
    }

}

//console.log(vetorDuplo(teste1,teste2))

//exercicio 40
notas = [10,6,5,7,3,2,1]
function vetorNotas(vetor){
//console.log(arguments[0][2])
for(i=0;i<=vetor.length;i++){

if(vetor[i]<6){
   console.log(vetor[i]+" D")}
if(vetor[i]<7&& vetor[i]>=6){
    console.log(vetor[i]+" C")
}
if(vetor[i]>=7 && vetor[i] <9){
    console.log(vetor[i]+ " B")
}
if(vetor[i]>=9){
    console.log(vetor[i]+ " A")
}

}

}

// vetorNotas(notas)

/////#####23######

