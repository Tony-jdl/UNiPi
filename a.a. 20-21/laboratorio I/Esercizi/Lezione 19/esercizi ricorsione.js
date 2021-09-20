/*
Fattoriale
Si scriva una funzione fattoriale(n) che, dato come argomento un intero positivo,
restituisca il suo fattoriale.

Esempi
fattoriale(1) → 1
fattoriale(5) → 120
fattoriale(10) → 3628800
*/

function fattoriale(n){
  if(n==0 || n==1){
    return 1;
  }
  console.log(n);
  return n*fattoriale(n-1);
}

/*
Realizzare una funzione ricorsiva che, dato un intero >=0 n, calcoli il valore
dell’ennesimo numero triangolare.

Esempi
triangle(3) → 6
triangle(6) → 21
*/

function triangolare(n){
  if(n==1){
    return 1;
  }
  console.log(n)
  return triangolare(n-1)+n;
}

/*
Cifre
Si scriva una funzione ricorsiva cifre(n) che, dato come argomento un intero
positivo, mostri a video le sue cifre, una per riga.

Esempi
cifre(2563) → 2 5 6 3
cifre(5) → 5
cifre(98763) → 9 8 7 6 3
*/

function cifre(n){
  
return console.log(cifre(x))
}

/*
Cifre in ordine inverso
Si scriva una funzione ricorsiva cifreInv(n) che, dato come argomento un intero
positivo, mostri a video le sue cifre, in ordine inverso, una per riga.
Esempi
cifreInv(2563) → 3 6 5 2
cifreInv(5) → 5
cifreInv(98763) → 3 6 7 8 9
*/



/*
Somma cifre
Si scriva una funzione ricorsiva sommaCifre(n) che, dato come argomento un
intero positivo, restituisca la somma delle sue cifre.
Esempi
sommaCifre(2563) → 16
sommaCifre(5) → 5
sommaCifre(98763) → 33
*/

function sommaCifre(n){
  let res=0;
  
}


/*
Somma array
Si scriva una funzione ricorsiva sommaArray(a) che, dato come argomento un
array di interi, restituisca la somma dei suoi elementi.
Esempi
sommaArray([3,6,1,3]) → 13
sommaArray([46,-1,-45, 0,2 -4, 3,-1]) → 0
*/

function sommaArray(a){
  let sum=0;
  let i=0;
  if(a.length==undefined)
    return 0;
  else
    sum=sum+a[i];
    
return sum+sommaArray(a[i+1]);
}