/* 
Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

let word = 'Paralelamente';

function verifyA(word) {
    let verify = [];
    let counter = 0;
    verify = word.toUpperCase();

    for (let position in verify) {
        if (verify[position] === 'A') {
            counter++;
        }
    }

    if (counter != 0) {
        console.log(`Há ${counter} ocorrência(s) de A nesta string`);
    } else {
        console.log('Não existem ocorrências de A nesta string');
    }
}

verifyA(word);




