//Checkpoint 1 de Web development with Java
//

//Questão 1 (Variavel undfined)
let exemplo
console.log("Exemplo q1: " + exemplo)

//Questão 2 (operador %)
let num1 = 5
let num2 = 2
let resto = num1 % num2
console.log("O resto da divisao entre 5 e 2 é: " + resto)
//O operador % denomina o "resto" de uma divisão

//Questão 3 (IMC)
// imc = PESO / (altura * altura)
peso  = 70
altura = 1.69
imc = (peso / (altura * altura))
console.log(imc)

if (imc < 18.5)
 console.log("Voce esta abaixo do peso ideal")
 
else if (imc > 24.9)
    console.log("Voce esta acima do peso ideal")

else
   console.log("Voce esta dentro do peso ideal")
//

//Questão 4 (idade)
let idade = 10

if(idade >=0 && idade <= 12){
    console.log("É uma riança")
}else if(idade <= 18){
    console.log("É um Adolescente")
}else if(idade <= 59){
    console.log("É um Adulto")
}else{
    console.log("È um idoso")
}

//Questão 5 (usuario)

//Questão 6 (Media notas)
n1 = 4
n2 = 2
n3 = 5
n4 = 6
n5 = 7
n6 = 8
n7 = 6

media = ((n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7)
if (media >= 6){
    console.log("O aluno foi aprovado, sua media foi: " + media)
}
else if (media < 6){
    console.log("O aluno foi reprovado, sua media foi: " + media)
}

//Questão 7 (tela verde)

const h1Element = document.getElementById("meu titulo")

h1Element.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"
    alert("aaa")
})

//Questão 8




//Questão 9