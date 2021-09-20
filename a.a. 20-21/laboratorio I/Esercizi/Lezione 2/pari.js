//Scrivere un programma che legga da tastiera un numero e stabilisca se pari o meno, stampando in uscita rispettivamente 1 o 0.
let n = prompt("Inserire valore:");
let x=0;

if(n%2==0){
  x=1;
}
console.log(`${x}`);


// Alternativa 1
let n = Number(prompt("Inserire valore:"));
let x=0;

if(!isNaN){
  if(n%2==0){
    x=1;
  }
  console.log(`${x}`);
}

// Alternativa 2

let n = Number(prompt("Inserire valore:"));


switch (x%2){
  case (0):
    console.log(1);
  break;
  case (1):
    console.log(2);
  break;

}

//Alternativa 3

let n = Number(prompt("Inserire valore:"));
console.log(`${x%2==0?1:0}`)

// Alternativa 4 (in una sola riga)

console.log(Number(prompt("Inserisci un numero")%2)==0?1:0);