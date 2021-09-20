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

function angolo(a){

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
    var b=(a)=>{
        for(var i in a){
            a[i]=f(a[i]);
        } 
        return a;
    }
    return b;
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
    for(var i in a){
      if(i in b) a[i]=b[i]
      else a[i]=b[i]
    }
    return a;
  }

  /* 
8 - produci
Si consideri un oggetto G che rappresenta una grammatica. Le proprietà di G hanno chiavi il cui nome consiste di una sola lettera maiuscola (A-Z); il valore di queste proprietà è una stringa qualunque.
Si scriva una funzione produci(G,s) che, data una grammatica G e una stringa qualunque s, restituisca la stringa ottenuta sostituendo ogni lettera maiuscola L contenuta in s con la corrispondente stringa associata a L in G, se esiste. Tutti i caratteri che non sono chiavi di G vengono lasciati intatti.
Si scriva poi una funzione multip(G,s,k) che ripete il processo di produci k volte (con k intero non negativo), espandendo ripetutamente la stringa prodotta.

Esempio:
Sia G= {A:"aAB", B:"bb", C:"33"}, allora:
produci(G,"CAz") → "33aABz"
produci(G,"BAH!") → "bbaABH!"
multip(G,"CAz",3) → "33aaaABbbbbz"


test:
G= {A:"aAB", B:"bb", C:"33"}
produci(G,"CAz")
produci(G,"BAH!")
multip(G,"CAz",3)
*/

function produci(G,s){
  var res = [];
  var caratteri=s.split(' ');
  caratteri=caratteri[0].split('')

  for(var c of caratteri){
    if( c in G) { 
      res.push(G[c]) 
      } else {
        res.push(c);
      }
  }
  return res.join('');
}

function multip(G,s,k){
  var res=s;
  for(var i=k; i>0; i--){
    res=produci(G,res);
  }
  return res;
}
