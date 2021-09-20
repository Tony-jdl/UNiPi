//Scrivere un programma che, dato un numero di secondi dalla tastiera, calcola e mostra a video il numero di ore, minuti e secondi inclusi.
let t = prompt("inserire valore in secondi:");
let h = parseInt((t / 3600)); // risultante ore 
let m = parseInt(((t - (3600 * h))/60)); // risultante minuti restanti
let s = parseInt((t - (3600 * h)-(m * 60))); // risultante secondi restanti
console.log(t," secondi corrispondo a ",h," ore :",m," minuti :",s," secondi");