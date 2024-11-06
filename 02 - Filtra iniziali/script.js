/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterLetter(wordsArray, letter) {
    const result = [];
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i][0] === letter) {
            result.push(wordsArray[i]);
        }
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
const filter = filterLetter(names, "A");
console.log(filter); 


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]