/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function inizialeNome(namesArray) {
    return namesArray.map(name => name[0]); 
}


// Invoca la funzione qui e stampa il risultato in console
const iniziale = inizialeNome(names);
console.log(iniziale);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]