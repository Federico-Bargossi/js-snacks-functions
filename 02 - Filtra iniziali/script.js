/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterLetter(wordsArray, letter) {
    return wordsArray.filter(word => word.startsWith(letter));
}


// Invoca la funzione qui e stampa il risultato in console
const filter = filterLetter(names, "A");
console.log(filter);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]