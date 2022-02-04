const nnname = prompt ('Inserisci il tuo nome');
console.log (nnname);

const surrrname = prompt ('Inserisci il tuo cognome');
console.log (surrrname);

const favcol = prompt ('Inserisci il tuo colore preferito');
console.log (favcol);

const psw = prompt '${nnname}${surrrname}${favcol}25';
console.log (psw);

document.getElementById('psw').innerHTML = psw;