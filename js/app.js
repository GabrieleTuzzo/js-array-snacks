console.log("JS Snacks");

// 1. Trovare > tra due numeri dati dall'utente

// const firstNumber = parseInt(prompt('Inserire il primo numero'))
// const secondNumber = parseInt(prompt('Inserire il secondo numero'))
// let message = 'Dati non validi!'


// if ( !isNaN(firstNumber) && !isNaN(secondNumber) ){
//     if ( firstNumber == secondNumber) {
//         message = `${firstNumber} is equal to ${secondNumber}`
//     } else if (firstNumber > secondNumber) {
//         message = `${firstNumber}`
//     } else {
//         message = `${secondNumber}`
//     }
// }

// console.log (message)

// 2. Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     let inputNumber = parseInt(prompt("Inserire un numero"));
//     sum = sum + inputNumber;
// }

// console.log(sum.toString());

// 3. In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// const names = ['Mario', 'Filippo', 'Andrea']
// const userName = prompt('Inserisci il tuo nome').toString()
// let message = 'Mi dispiace, non sei invitato'

// if (names.includes(userName)) {
//     message = 'Sei nella lista!'
// }

// console.log(message)

// 4. Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// const numbers = []
// for (let i = 0; i < 6; i++) {
//     inputNumber = parseInt(prompt('Inserisci un numero'))
//     if (inputNumber % 2 !== 0) {
//         numbers.push(inputNumber)
//     }
// }

// console.log(numbers)

// 5. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

// const number = parseInt(prompt('Inserisci un numero'))
// const exp = parseInt(prompt('Inserisci esponente'))

// for (let i = 0; i < number; i++) {
//     const n = i + 1
//     const cubed = n**exp
//     console.log(cubed)
// }

// 6. Stampa le potenze di 2 fino a 1000.

let square = 0
for (let i=0; square < 1000; i++) {
    square = 2**i
    console.log(square)
}