/*
Si scriva una funzione calcola(a) che, dato un array di interi a, restituisca la somma dei quadrati degli elementi di a.


Esempi:

calcola([-21,32,0,99,101,101,2,76,22,1349]) → 1857733

calcola([0,0,12,-66,9]) → 4581

calcola([1,2,3,4,5,6]) → 91
*/

function calcola(a){
  let b=[];
  let c=0;
  for(i of a){
    c=c+(b.push(i**2));
  }
  return c;
}

/*
Si scriva una funzione cancellaConSoglia(a,n) che dato un array di interi a e un intero n, rimuova da a tutti gli elementi ≤ (minori di o uguali a) n e restituisca l'array risultante.


Esempi:

cancellaConSoglia([-21,32,0,99,101,101,2,76,22,1349],101) → [1349]

cancellaConSoglia([0,0,12,-66,9],0) → [12,9]

cancellaConSoglia([1,2,3,4,5,6],3) → [4,5,6]
*/

function cancellaConSoglia(a,n){
  for(i in a){
    if(Number(a[i]<=n)){
      a.pop();
    }
  }
  return a;
}

/*
Si scriva una funzione contaCoppia(T,val1,val2) che dati un albero binario T (i cui nodi sono implementati come visto a lezione come oggetti con chiavi val, sx e dx) e due interi val1 e val2, restituisca il numero di coppie di nodi fratelli tali che il fratello destro abbia val maggiore uguale a val1 e quello sinistro abbia val minore o uguale a val2. Due nodi sono fratelli se sono figli dello stesso nodo padre. Si faccia attenzione a conteggiare le coppie che soddisfano la condizione, non il numero dei nodi (che sarebbe ovviamente il doppio rispetto al numero di coppie).


Esempi:

contaCoppia({val:7,sx:{val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}, dx:{val: 11, dx: {val: 3}, sx: {val:8, sx: {val: 6}}}},12,3) → 1

contaCoppia({val:7,sx:{val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}, dx:{val: 11, dx: {val: 3}, sx: {val:8, sx: {val: 6}}}},11,4) → 2

contaCoppia({val:7,sx:{val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}, dx:{val: 11, dx: {val: 3}, sx: {val:8, sx: {val: 6}}}},3,8) → 4
*/


function contaCoppia(t,val1,val2){
  if(t==undefined) {
    return 0;
  } else {
    if(t.dx>=val1 && t.sx<=val2)
      return 1;
  }
  return contaCoppia(t.dx,val1,val2) + contaCoppia(t.sx,val1,val2);
}


/*
Si scriva una funzione rudyGiuliani(trump,biden,votiLegali) che dati 3 insiemi (trump, biden e votiLegali) rappresentati come oggetti, restituisca true se il numero di elementi di votiLegali presenti in trump ma non appartenenti a biden è maggiore del numero di elementi di votiLegali presenti in biden ma non appartenenti a trump, e false in caso contrario.


Esempio:

Dati

trump = {'forcoli':1,'lacalifornia':1,'frittole':1,'freddana':1,'bugliano':1,'newfollonica':1}
biden = {'calafuria':1,'pappiana':1,'forcoli':1,'lacalifornia':1,'massachuccoli':1,'lajatico':1,'newfollonica':1}
votiLegali = {'calafuria':1,'pappiana':1,'forcoli':1,'massachuccoli':1,'larderello':1,'lajatico':1,'frittole':1,'freddana':1,'bugliano':1,'orentano':1,'newfollonica':1}

avremo

rudyGiuliani(trump,biden,votiLegali) → false
*/

let trump = {'forcoli':1,'lacalifornia':1,'frittole':1,'freddana':1,'bugliano':1,'newfollonica':1}
let biden = {'calafuria':1,'pappiana':1,'forcoli':1,'lacalifornia':1,'massachuccoli':1,'lajatico':1,'newfollonica':1}
let votiLegali = {'calafuria':1,'pappiana':1,'forcoli':1,'massachuccoli':1,'larderello':1,'lajatico':1,'frittole':1,'freddana':1,'bugliano':1,'orentano':1,'newfollonica':1}

function rudyGiuliani(trump,biden,votiLegali){
  var t=0;
  var b=0;
  for(i in votiLegali){
    if(votiLegali.i == trump && votiLegali.i !=biden) t++;
    if(votiLegali.i != trump && votiLegali.i == biden) b++;
  }
  return t>b ? true : false;
}