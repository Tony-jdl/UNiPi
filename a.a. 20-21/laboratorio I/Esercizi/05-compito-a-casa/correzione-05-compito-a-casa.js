//CORREZIONE COMPITO 05

/*
ESERCIZIO 1
 Si scriva una funzione reverse(a) che prende come parametro un array e restituisce un altro array con gli elementi in ordine inverso.
 
 Esempi:
 reverse([1,2,3,4]) -> [4,3,2,1]
 reverse([]) -> []
 reverse([1,1,1,1,1,1,1]) -> [1,1,1,1,1,1,1]
 reverse([8])->[8]
 */

function reverse(a) {
  let b=[];
  for(var i=a.length-1;i>=0;i--) b.push(a[i])
  return b;
}


/*
ESERCIZIO 2
Si scriva una funzione colNeg(a) dove a e' una matrice di interi di dimensione NxM (rappresentata come una array di array). In particolare, a[i], 0 <= i <= N, contiene i valori della i-esima riga di a, e a[i][j] contiene il valore j-esimo della i-esima riga di a. 

colNeg(a) restituisce true se esiste almeno una RIGA in a con tutti i valori negativi.

Esempi: 
a = [[1,2,3], [4,5,6], [7,-8,9]] -> false
a = [[1,2,3], [-44,-5,-6], [7,-8,9]] -> true
a = [[-1,-2,-3], [-44,-5,-6], [-7,-8,-9]] -> true

colNeg([[1,2,3], [4,5,6], [7,-8,9]]) false
colNeg([[1,2,3], [-44,-5,-6], [7,-8,9]]) true
colNeg([[-1,-2,-3], [-44,-5,-6], [-7,-8,-9]]) true
*/

function colNeg(a) {
  var trovato = false;
  var N = a.length;
  var M = a[0].length;
  let i = 0;
  while(i < N && !trovato){
    let i = 0;
    while(i < M && a[i][j] < 0)
      j++;
    if(j == M) 
      trovato = true
  }
  return trovato
}


/*
ESERCIZIO 3
Si scriva una funzione colNegE(a) dove a e' una matrice di interi di dimensione NxM (rappresentata come una array di array). In particolare, a[i], 0 <= i <= N, contiene i valori della i-esima riga di a, e a[i][j] contiene il valore j-esimo della i-esima riga di a. 

colNegE(a) restituisce true se esiste esattamente una RIGA in a con tutti i valori negativi.

Esempi: 
a = [[1,2,3], [4,5,6], [7,-8,9]] -> false
a = [[1,2,3], [-44,-5,-6], [7,-8,9]] -> true
a = [[-1,-2,-3], [-44,-5,-6], [-7,-8,-9]] -> false

colNegE([[1,2,3], [4,5,6], [7,-8,9]]) false
colNegE([[1,2,3], [-44,-5,-6], [7,-8,9]]) true
colNegE([[-1,-2,-3], [-44,-5,-6], [-7,-8,-9]]) false
*/

function colNegE(a) {
  var count = 0;
  var N = a.length;
  var M = a[0].length;
  let i = 0;
  while(i<N && count < 2){
    let j=0;
    while(j<M && a[i][j] < 0)
      j++
    if(j == M) 
      count++;
  }
  return count == 1;
}

/*
ESERCIZIO 4
Si scriva una funzione ricorsiva sommaCifre(v), con v un intero positivo. La funzione restituisce la somma delle cifre di v, utilizzando divisione per 10 e l'operatore %.

Esempi:
sommaCifre(101) -> 2
sommaCifre(1234) -> 10
*/

function sommaCifre(v) {
  if(math.floor(v/10)==0) 
    return v;
  return (v % 10) + sommaCifre(Math.floor(v/10));
}

/*
ESERCIZIO 5
La Notazione Polacca Inversa (Reverse Polish Notation, RPN) è un linguaggio per operazioni aritmetiche in cui l’operatore segue gli operandi.

Per esempio, l’espressione RPN 
2 3 + corrisponde all’espressione infissa 2+3, mentre 
3 4 1 + / corrisponde a 3/(4+1); e ancora:
1 7 3 / 1 4 - 21 * / + corrisponde a (7/3)/((1-4)*21)+1

Una espressione RPN si può facilmente calcolare utilizzando una pila e applicando le seguenti regole ai componenti dell’espressione letti da sinistra verso destra:
1. se il componente e' un operando, fare push dell'operando
2. se e' un operatore, applicarlo a un numero appropriato di elementi prelevati dalla pila, e caricare il risultato sulla pila

Scrivere una funzione computeRPN(erpn), dove erpn e' un array di  stringhe che rappresenta una espressione aritmetica in forma RPN. computeRPN deve restituire la valutazione di erpn. Si assuma che:

a. erpn sia corretta
b. in erpn gli operatori siano solo +, -, *, /

Esempi:
computeRPN(["2","3","+"]) -> 5
computeRPN(["3","4","1","+","/"]) -> 0.6
computeRPN(["1","7","3","/","1","4","-","21","*","/","+"]) -> 0.9629629629629629 
*/

function computeRPN(erpn) { 
  var pila = [];
  var op1, op2, res;
  for(proxSimbolo of erpn) {
	  if(proxSimbolo == '+' || proxSimbolo == '-' || proxSimbolo == '*' || proxSimbolo == '/') {
		  op2 = parseFloat(pila.pop());
		  op1 = parseFloat(pila.pop());
		  switch (proxSimbolo) {
			  case '+':
				res = op1 + op2;
				break;
			case '-':
				res = op1 - op2;
				break;
			case '*':
				res = op1 * op2;
				break;
			case '/':
				res = op1 / op2;
				break;
		  }
		  pila.push(res)
	  } else {
		  pila.push(proxSimbolo);
	  }
  }
  res = parseFloat(pila.pop());
  return res;
}

/*
ESERCIZIO 6
Si scriva una classe Coda che rappresenti, prevedibilmente, una coda. La coda deve gestire stringhe. Oltre a un costruttore, serviranno i metodi seguenti:

1. q.enqueue(s) - inserisce in testa alla coda q la stringa s, e rstituisce la lunghezza corrente della coda
2. q.enqueueT(s) - inserisce in fondo alla coda q la stringa s, e rstituisce la lunghezza corrente della coda
3. q.dequeue() - rimuove l'elemento in fondo alla coda, e restituisce la lunghezza corrente della coda
4. q.search(s) - cerca la stringa s in q; se s esiste, restituisce la posizione in q della sua prima occorrenza (iniziando dalla testa della coda, e contando da 0); -1 altrimenti
5. q.occurrences(s) - restituisce il numero di occorrenze di s in q
6. q.deleteFirst(s) - se s esiste in q, elimina la prima occorrenza di s da q, e restituisce la posizione in q della occorrenza appena eliminata (inziando dalla testa della coda, e contando da 0); -1 altrimenti
7. q.size() - restituisce il numero di elementi presenti in q
8. q. reset() - elimina tutti gli elementi in q, e restituisce 0
9. q.merge(q1) - appende tutti gli elementi della coda q1 passata come argomento, ordinatamente dalla testa, in fondo agli elementi presenti in q, e restituisce il numero degli elementi aggiunti. La coda q1 non deve essere modificata
10. print() - restituisce una stringa contenente gli elementi della coda (tutti gli elementi della coda sulla stessa riga, separati da virgola, senza spazi)

Esempi, partendo da una coda q e q1 vuota:
q.enqueue("uno") -> 1           q.enqueue("due") -> 2
q.enqueue("tre") -> 3           q.enqueue("uno") -> 4
q.enqueueT("quattro")) -> 5     q.print() -> "quattro,uno,due,tre,uno"
q.dequeue() -> 4                q.print() -> "uno,due,tre,uno"
q.search("uno") -> 0            q.deleteFirst("due") -> 2
q.size() -> 3                   q.print()) -> "uno,tre,uno"
q1.enqueue("a") -> 1            q1.enqueue("b") -> 2
q1.enqueue("c") -> 3            q1.print() -> "a,b,c"
q.merge(q1) -> 3                q.print() -> "a,b,c,uno,tre,uno"
*/

/*
Code
q = new Coda()
q1 = new Coda()
*/

/*
TestCase enqueue
q.enqueue("uno")
q.enqueue("due")
q.enqueue("tre")
q.enqueue("uno")
*/

/*
q = new Coda()
q1 = new Coda()
q.enqueue("uno")
q.enqueue("due")
q.enqueue("tre")
q.enqueue("uno")
q.enqueueT("quattro")
q.print()
q.dequeue()
q.print()
q.search("uno")
q.deleteFirst("due")
q.size()
q.print()
q1.enqueue("a")
q1.enqueue("b")
q1.enqueue("c")
q1.print()
q.merge(q1)
q.print()
*/


class Coda {
  constructor(){
    this.coda=[];
  }

  enqueue(s){
    this.coda.push(s);
    return this.coda.length;
  }

  enqueueT(s){
    this.coda.unshift(s);
    return this.coda.length;
  }

  dequeue(){
    this.coda.shift();
    return thsi.coda.length;
  }
   search(s){
     let i=this.coda.length;
     let trovato=false;
     while(i>0 && !trovato){
       i--;
       if(this.coda[i]==s){
         trovato=true;
       }
     }
     if(i==0 && !trovato)
      return -1;
    return this.coda.length-i-1;
   }

   occurrences(s){
     let count=0;
     for(let el of this.coda){
       if(el == s)
        count++;
     }
     return count;
   }

   deleteFirst(s){
     let isThere=this.search(s);
     if(isThere != -1)
      this.coda.splice(this.coda.length - isThere -1, 1);
    return isThere;
   }

   size(){
     return this.coda.length;
   }

   reset(){
     this.coda=[];
     return 0;
   }

   merge(q1){
     for(let i=q1.coda.length-1; i>=0; i--){
       this.encqueueT(q1.coda[i]);
     }
     return q1.size();
   }

   print(){
     return this.coda.toString();
   }
}


/*
ESERCIZIO 7
Si scriva una funzione mcm(a,b), dove a e sono interi positivi. mcm(a,b) restituisce il minimo comune multiplo (MCM)
di a e b. Dati due numeri interi N1 e N2, il minimo comune multiplo è il più piccolo numero M che è divisibile (con resto pari a zero) sia per N1 che per N2.

Esempi: 
mcm(30,40) -> 120
mcm(14,15) -> 210
*/

function mcm(a, b) {
  var p = a;
  var q = b;
  var r, MCD, mcm;
  r = p % q;
  while(r != 0){
	  p = q;
	  q = r;
	  r = p % q;
  }
  
  MCD = q;
  mcm = (a * b) / MCD;
  return mcm;
}


/*
ESERCIZIO 8
Si progetti una classe MCDMCM per gestire il minimo comune multiplo (MCM) e il massimo comune divisore (MCD) di due numeri interi positivi.  

In particolare, oltre al costruttore, la classe deve prevedere i metodi mcd() e mcm() per calcolare, rispettivamente, il MCM e il MCD dei due numeri.
*/

class MCDMCM {
  constructor(a,b){
	  this.a = a;
	  this.b = b;
  }
  
  mcd(){
	  var p = this.a;
	  var q = this.b;
	  var r, MCD, mcm;
	  r = p % q;
	  while(r != 0){
		  p = q;
		  q = r;
		  r = p % q;
	  }
	  return q;
  }
   mcm(){
	   return (this.a * this.b) / this.mcd();
   }
}

/*
ESERCIZIO 9
Si progetti una classe Vector che gestisca vettori multidimensionali rappresentati come array (si deve usare 'coord' come nome della proprietà che memorizza le coordinate del vettore). La classe implementa le operazioni di prodotto con un scalare (metodo 'prodottoS'), e somma (metodo 'somma') e prodotto scalare  (metodo 'prodotto') con altri vettori. Le operazioni con un altro vettore restituiscono undefined se i vettori non hanno la stessa dimensione.

Esempi:
a=new Vector([1,4,6])
b=new Vector([5,2,3])
c=new Vector([3,4,5,6])
a.somma(b) -> Vector {coord: [6,6,9]}
a.somma(c) -> undefined //a e c hanno dimensioni diverse

a.prodotto(b) -> 31
a.prodotto(c) -> undefined//a e c hanno dimensioni diverse
a.prodottoS(4) -> Vector{ coord: [4,16,24]}
*/

class Vector {
  constructor(v){
	  this.coord=v;
  }
  
  somma(v){
	  if(v.coord.length == this.length){
		  var r=[];
		  for(let i in v.coord)
				r.push(v.coord[i] + this.coord[i]);
			return new Vector(r)
	  }
  }
  
  prodotto(x){
	  if(v.coord.length == this.length){
		  var r=0;
		  for(let i in v.coord)
			r+=v.coord[i] * this.coord;
	  }
	  return r;
  }
  
  prodotto(x){
	  var r=[];
	  for(let i in this.coord)
			r.push(x*this.coord[i])
		return new Vector;
  }
}

// NON CANCELLARE QUESTA RIGA
module.exports = { reverse, sommaCifre, colNeg, colNegE, computeRPN, mcm, MCDMCM, Coda, Vector };

/*
Per eseguire i test di prova:
1. Selezionare "Shell" nel riquadro a dx (di fianco al tab "Console")
2. Digitare npm run test e premere invio
3. NON MODIFICARE IL CONTENUTO DI test.js
*/