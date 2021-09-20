//Scrivere un programma che legga 3 numeri da tastiera e mostri a video il loro massimo.
//Scrivere un programma che legga 3 numeri da tastiera e mostri a video il loro massimo.
let a = Number(prompt("Primo numero:"));
let b = Number(prompt("Secondo numero:"));
let c = Number(prompt("Terzo numero:"));
let max;

if(a>b && a>c)
  max = a;
if(b>a && b>c)
  max = b;
if(c>a && c>b)
  max = c;
console.log(`${max}`);

//Alternativa 1

let a = Number(prompt("Primo numero:"));
let b = Number(prompt("Secondo numero:"));
let c = Number(prompt("Terzo numero:"));

if(a>b)
	if(a>c) // a > b > c -> max a
		console.log(a);
	else // a >= b 
		if(b>c) // a <= b, b > c
			console.log(b)
		else // a <= b, b <= c
			console.log(c);

//Alternativa 2

if(a>b)
  console.log(a>c?a:c);
else
  console.log(b>c?b:c);

//Alternativa 3 (in una riga)

let a = Number(prompt("Primo numero:"));
let b = Number(prompt("Secondo numero:"));
let c = Number(prompt("Terzo numero:"));

console.log(a>b?(a>c?a:c):(b>c?b:c));

//Alternativa 4

let a = Number(prompt("Primo numero:"));
let b = Number(prompt("Secondo numero:"));
let c = Number(prompt("Terzo numero:"));

if(a>b)
  max=a;
else 
  max=b;
if(max<c)
  max=c;
console.log(max);

//Alternativa 5

max= a>b?a:b;
max = max>c:max:c;
console.log(max);

//Alternativa 6

arr = [a,b,c];
max=a;
for(var n of arr)
  if(n>max) max=n;
console.log(max);

//Alternativa 7

let max = -Infinity;
while(n=Number(prompt("Dammi un numero (-1per finire)"))!=-1)
  if (n>max) max=n;
console.log(max);