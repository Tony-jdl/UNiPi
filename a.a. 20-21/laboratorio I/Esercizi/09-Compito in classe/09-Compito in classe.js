/* Esercizio 1 */
/*
Scrivere una funzione isSorted(a), con a un array di numeri. La funzione restituisce true se l'array e' ordinato in senso strettamente crescente, e false altrimenti.

Esempi:
isSorted([-21,-2,0,4,6,210]) -> true
isSorted([2,6,8,8,9,21]) -> false
isSorted([2,6,8,9,10,-42]) -> false
 */ 

function isSorted(a){
    for(var i=0; i<a.length; i++){
      if(a[i]>=a[i+1]) return false;
    }
    return true;
  }
  
  
  /* Esercizio 2 */
  /*
  Si scriva una funzione arrayfy(f) che, dato come argomento una funzione f : X -> Y (con X e Y qualunque), restituisca una funzione che, dato un array A con elementi di tipo X, lo modifichi sostituendo ogni elemento x di A con il valore restituito da f(x).
  
  Esempi:
  Sia a=[5,2,4]. Allora dopo arrayfy(x=>0)(a), a vale [0,0,0]
  Sia a=[5,2,4]. Allora dopo arrayfy(x=>2*x)(a), a vale [10,4,8]
  Sia a="pippo".split(""). Allora dopo arrayfy(c=>c=="p")(a), a vale [true,false,true,true,false]
  typeof arrayfy(x=>0) è "function"
  */
  
  function arrayfy(f){
    var s = (a)=>{
      for(let i in a){
        a[i]=f(a[i])
      }
      return a;
    }
    return s;
  }
  
  /* Esercizio 3 */
  /*
  Si scriva una funzione extend(a,b) che, dati due oggetti a e b, aggiunga ad a tutte le proprietà di b. Se a e b hanno qualche proprietà con lo stesso nome, prevale il valore contenuto in b.
  
  Esempi:
  Sia a= {nome: "pippo", età: 35} e b={nome: "andrea", altezza: 200}, allora: 
  dopo extend(a,b), a vale {nome: "andrea", età: 35, altezza: 200}
  dopo extend(a,{}), a non è modificata
  dopo extend(b,a), b vale {nome: "pippo", età: 35, altezza: 200}
  */
  
  function extend(a,b){
    for(var i=0; i<a.length; i++){
      if(b[i] in a) a[i]=b[i];
      if(!(b[i] in a)) a.push(b[i]);
    }
    return a;
  }
  
  
  /* Esercizio 4 */
  /*
  Scrivere una funzione deframmenta(a), con a array di numeri. La funzione restituisce una copia dell'array a da cui sono state eliminate le occorrenze dei numeri quando queste non sono ripetute in sequenza (ovvero in posizioni contigue dell'array) almeno una volta. 
  Ad esempio  dato l'array a = [1,1,2,3,3,3,2,2,4] la chiamata deframmenta(a) restituisce [1,1,3,3,3,2,2], dove gli elementi in posizione 2 e 4 sono stati eliminati in quanto non ripetuti in sequenza. 
  
  Esempi:
  deframmenta([1,1,2,3,3,3,2,2,4]) -> [1,1,3,3,3,2,2] 
  deframmenta([0,0,0,0,0,1,0,1,1]) -> [0,0,0,0,0,1,1]
  deframmenta([1,0]) -> [] 
  */
  
  function deframmenta(a){
    
    for(var i=0; i<a.length; i++){
      if(a[i]!=a[i+1] && a[i]!=a[i-1]) a.splice(i,1)
    }
    return a;
  }
  

  //Esercizio 7
/*
Si scriva una funzione angolo(d) che, ricevuto come argomento un oggetto della classe Date di JavaScript, restituisca l'angolo formato dalla lancetta delle ore e quella dei minuti di un tradizionale orologio analogico (con quadrante di 12 ore).
Le lancette formano due angoli: si restituisca il più piccolo, espresso come un numero positivo di gradi sessagesimali, e approssimato all'intero più vicino.
Si assuma che le lancette cambino posizione in maniera continua, ogni minuto.

Esempi:
angolo(new Date("2021-04-23 14:00:00")) -> 60
angolo(new Date("2021-04-23 14:15:15")) -> 23
angolo(new Date("2021-04-23 6:50:50")) -> 95
*/