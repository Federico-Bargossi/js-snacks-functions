/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const contaVocali = (word) => {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    return word
        .toLowerCase()
        .split('')
        .filter(char => vocali.includes(char))
        .length;
};



// Invoca la funzione qui e stampa il risultato in console
const conta = contaVocali(word);
console.log(conta);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)