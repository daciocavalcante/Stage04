let numberOne = prompt ('Escreva o primeiro numero: ')
let numberTwo = prompt ('Escreva o segundo numero: ')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + rest)

if((sum / 2)==0) {
    
    alert('A soma dos numeros é par')

} else {

    alert('A soma dos numeros é impar')

}

if (numberOne==numberTwo) {

    alert('Os numeros são iguais')

} else {

    alert('Os numeros são diferentes')

}