/*
Si consideri una matrice A di m×n interi, ciascuno dei quali può essere 0 o 1 rappresentata come un array di m righe (ogni riga è un array di n interi).
All’interno di A, una posizione (x,y) si dice contenere una “crocetta” se la cella (x,y) vale 1, come anche quelle subito sopra, sotto, a destra e a sinistra, mentre le quattro celle poste in diagonale valgono 0.
Si scriva una funzione crocette(A) che, ricevuta una matrice come descritto sopra, restituisca un array di tutte le coordinate (x,y) in A che contengono crocette, in cui ogni coordinata è rappresentata come un vettore di due elementi [x, y]. L’origine è (0,0) e corrisponde all’angolo in alto a sinistra; l’asse Y va verso il basso.
Esempi
Sia let A= [ [ 1,0,0,1,1 ],
[ 0,1,0,1,0 ],
[ 1,1,1,1,1 ],
[ 0,1,0,1,0 ],
[ 1,1,1,1,1 ],
[ 0,1,0,1,1 ] ]

crocette(A) → [[1,2],[3,2],[1,4]]
*/

//DA FINIRE
function crocette(A){
  //m righe
  //n colonne
  let cross=[];
  for(var m=0; m<A.length; m++){
    for(var n=0; n<A[m].length; n++){
      if(m>0 && m<A.length && n>0 && n<A[m].length){
        if(A[m][n] == 1 && A[m-1][n] == 1 && A[m+1][n] == 1 && A[m][n-1] == 1 && A[m][n+1] == 1 && A[m-1][n-1] == 0 && A[m-1][n+1] == 0 && A[m+1][n-1] == 0 && A[m+1][n+1] == 0){
          //console.log(m+","+n);
          cross.push([m,n]);
        }
      }
    }
  }
  return cross;
}

/*
MultiSet
Si scriva una classe MultiSet che implementi un multiinsieme (ovvero, un insieme che può
contenere più volte lo stesso elemento).
La classe deve implementare i seguenti metodi:
● add(e) - inserisce l’elemento e nel multiinsieme
● remove(e) - rimuove un elemento e dal multiinsieme; lancia un’eccezione
NoSuchElementException se e non è presente nel multiinsieme
● size() - restituisce il numero di elementi contenuti nel multiinsieme (si implementi come
una proprietà di sola lettura)
● union(S) - restituisce un nuovo multiinsieme contenente l’unione del multiinsieme con
l’altro multiinsieme S (si usi il metodo add)
● diff(S) - restituisce un nuovo multiinsieme contenente la differenza fra il multiinsieme e l’altro multiinsieme S (si usi il metodo remove)
*/

//DA TESTARE

class MultiSet {
  constructor(elemento){
    this.e = elemento;
    this.ins = [];
  }

  add(e){
    this.ins.pus(e);
  }

  remove(e){
    for(var el in this.e){
      if(!e in this.e) throw Error("NoSuchElementException")
      this.e.delete(el);
    }
  }

  size(){
    return this.e.lenght;
  }

  union(S){
    let ins2 = new MultiSet;

    for(var i in this.ins){
      ins2.this.ins.add(i);
    }
    for(var j in S){
      S.add(j);
    }

    return ins2;
  }

  diff(S){
    let ins3 = this.ins.union(S);

    for(var i in ins3.this.ins){
      if(i in S) ins3.this.ins.delete(i)
    }

    return ins3;
  }
}

/*
reverse2
Il metodo reverse() chiamato su un array a, modifica a invertendo l’ordine dei suoi
elementi.
Si aggiunga un metodo reverse2() a tutti gli array del vostro programma, che
chiamato su un array a, restituisca un nuovo array contenente gli stessi elementi
di a, in ordine inverso.
Attenzione: per questo esercizio, non potete usare reverse() per definire
reverse2().
Variante: svolgete l’esercizio su una sola riga, senza chiamare nessun metodo
predefinito degli array.
*/

Array.prototype.reverse2 = function(){
  let b=[];
  for(var i of a) 
    b.unshift(i);
  return b;
}

/*
GroupAnagrams
Si scriva una funzione groupAnagrams(a) che, dato un array di stringhe a, raggruppi tutte le stringhe in a che sono anagrammi l’una dell’altra, e restituisca un array contenente i vari gruppi (rappresentati a loro volta come array di stringhe).
L’ordine del risultato non è rilevante.
Esempi
groupAnagrams(["scarabeo", "arabo", "noob", "arabesco", "bono"]) → [ [ 'scarabeo',
'arabesco' ], [ 'arabo' ], [ 'noob', 'bono' ] ]
groupAnagrams([]) → []
*/

//Da finire
function groupAnagrams(a){
  function control(s1,s2){
    if(s1 in s2) return true
    return false
  }
  
  let group=[];

  for (var i of a){
    for (var j=i+1; j<a.lenght; j++){
      if(control(i,a[j])) group.push([i,a[j]]);
    }
  }
  return group;
}

