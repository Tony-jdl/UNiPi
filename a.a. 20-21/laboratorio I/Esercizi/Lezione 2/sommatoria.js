//Si scriva un programma che dato un intero n calcoli e stampi la somma dei numeri da 1 a n.
let i;
let k=0;
let n = Number(prompt("Numero:"));

for(i=0; i<=n; i++){
  k=k+i;
}
console.log(`${k}`);

//Alternativa 1

let sum=0;
let n=Number(prompt("Inserisci N"));

for(var i=1; i<=n; i++)
  sum=sum+i;
console.log(sum);

//Alternativa 2 (formula di Gauss)

let n=Number(prompt("Inserisci N"));
console.log(n*(n-1)/2);

//Alternativa 3

let sum=0;
while(sum<101)
  sum+=Number(prompt("Inserisci numero"));
console.log(sum);