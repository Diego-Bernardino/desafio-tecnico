/* 
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function fibonacciCalc(selectedNumber) {
    let firstValue = 0;
    let secondValue = 1;
    let actualValue = firstValue + secondValue; 

    do {
        console.log(actualValue);
        actualValue = firstValue + actualValue;
        showValue = secondValue;
        secondValue = actualValue;
    } while (actualValue <= selectedNumber)

    isPartOf(selectedNumber, showValue);
} 

function isPartOf(selectedNumber, showValue) {
    if (selectedNumber === showValue) {
        console.log('O número selecionado faz parte da sequência.');
    } else {
        console.log('O número selecionado não faz parte da sequência.');
    }
}

function main() {
    fibonacciCalc(selectedNumber);
}

let selectedNumber = 21;

main()

