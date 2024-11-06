/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
const saluto = (nome) => (`ciao ${nome}`);



// Invoca la funzione qui e stampa il risultato in console
const salutare = saluto(name);
console.log(salutare);



//Risultato atteso se si passa 'Mario': // ciao Mario