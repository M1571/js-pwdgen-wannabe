const nnname = prompt('Inserisci il tuo nome');
console.log (nnname);

const surrrname = prompt('Inserisci il tuo cognome');
console.log (surrrname);

const favCol = prompt('Inserisci il tuo colore preferito');
console.log (favCol);

const nick = "Il tuo nickname è " + nnname + surrrname + favCol + " , ora cambia pure pagina perchè con questo nickname non ci farai altro :D";
console.log (nick);

document.getElementById('nick').innerHTML = nick;