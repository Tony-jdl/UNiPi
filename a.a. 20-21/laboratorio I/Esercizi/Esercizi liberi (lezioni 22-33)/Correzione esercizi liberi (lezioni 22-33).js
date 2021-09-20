//Correzione Esercizi Liberi (lezioni 22- 33)

/*
SpitOut
Si scriva una funzione spitOut(a,p) che, dati come argomenti un array a e una funzione p, stampi tramite console.log() tutti gli elementi e di a tali che l’invocazione di p(e) restituisca true o un valore che viene promosso a true
Esempi
spitOut([12,7,14,0,561],e=>(e%3==0)) → stampa 12, 0, 561
spitOut([“la”,”vispa”,”teresa”,”solea”],e=>e.indexOf(“s”)) → stampa la, vispa, teresa
spitOut([31,3.1415, 1.4142, 7],e=>e==Math.round(e)) → stampa 31, 7
*/

function spitOut1(a,p){
  console.log(a.filter(p).join())
}

function spitOut2(a,p){
  a.filter(p).forEach(e => console.log(e))
}

function spitOut3(a,p){
  a.forEach(e=> p(e)?console.log(e):0)
}

function spitOut4(a,p){
  for(var e of a){
    if(p(e)) console.log(e)
  }
}

function spitOut5(a,p){
  for(var i in a){
    if(p(a[i])) console.log(a[i])
  }
}

function spitOut6(a,p){
  for(var i=0;i<a.length;i++)
    if(p(a[i])) console.log(a[i])
}

function spitOut(a,p){
  console.log(...a.filter(p))
}

spitOut([12,7,14,0,561],e=>(e%3==0)) //→ stampa 12, 0, 561
spitOut(["la","vispa","teresa","solea"],e=>e.indexOf("s")) //→ stampa la, vispa, teresa
spitOut([31,3.1415, 1.4142, 7],e=>e==Math.round(e)) //→ stampa 31, 7

/* 
Crocette
Si consideri una matrice A di m×n interi, ciascuno dei quali può essere 0 o 1, rappresentata come un array di m
righe (ogni riga è un array di n interi).
All’interno di A, una posizione (x,y) si dice contenere una “crocetta” se la cella (x,y) vale 1, come anche quelle
subito sopra, sotto, a destra e a sinistra, mentre le quattro celle poste in diagonale valgono 0.
Si scriva una funzione crocette(A) che, ricevuta una matrice come descritto sopra, restituisca un array di tutte le
coordinate (x,y) in A che contengono crocette, in cui ogni coordinata è rappresentata come un vettore di due
elementi [x, y]. L’origine è (0,0) e corrisponde all’angolo in alto a sinistra; l’asse Y va verso il basso.
Esempi
Sia A= [ [ 1,0,0,1,1 ],
[ 0,1,0,1,0 ],
[ 1,1,1,1,1 ],
[ 0,1,0,1,0 ],
[ 1,1,1,1,1 ],
[ 0,1,0,1,1 ] ]
crocette(A) → [[1,2],[3,2],[1,4]]
*/

function crocette(a){
  let res=[];

  for(let r=1; r<a.length-1; r++){
    for(let c=1;c<a[r].length-1; c++){
      if(croce(a,r,c)) res.push([c,r])
    }
  }
  return res;
}

function croce1(a,r,c){
  let u=a[r][c]+a[r-1][c]+a[r][c+1]+a[r+1][c]+a[r][c-1];
  let z=a[r-1][c+1]+a[r+1][c+1]+a[r+1][c-1]+a[r-1][c-1];

  return u==5 && z==0;
}

function croce(a,r,c){
  const m=[[0,1,0],
            [1,1,1],
            [0,1,0]]
  for(let dx of [-1,0,1])
    for(let dy of [-1,0,1])
      if(a[r+dy][c+dx] != m[1+dy][1+dx])
        return false;
  return true;
}

let A= [ [ 1,0,0,1,1 ],
[ 0,1,0,1,0 ],
[ 1,1,1,1,1 ],
[ 0,1,0,1,0 ],
[ 1,1,1,1,1 ],
[ 0,1,0,1,1 ] ]
crocette(A)

/* reverse2
Il metodo reverse() chiamato su un array a, modifica a invertendo l’ordine dei suoi
elementi.
Si aggiunga un metodo reverse2() a tutti gli array del vostro programma, che
chiamato su un array a, restituisca un nuovo array contenente gli stessi elementi
di a, in ordine inverso.
Attenzione: per questo esercizio, non potete usare reverse() per definire
reverse2().
Variante: svolgete l’esercizio su una sola riga, senza chiamare nessun metodo
predefinito degli array.*/

Array.prototype.reverse2 = function () {
  let [h,...r]=this
  return h==undefined?[]:[...r.reverse2(),h]
}


/* GroupAnagrams
Si scriva una funzione groupAnagrams(a) che, dato un array di stringhe a,
raggruppi tutte le stringhe in a che sono anagrammi l’una dell’altra, e restituisca un
array contenente i vari gruppi (rappresentati a loro volta come array di stringhe).
L’ordine del risultato non è rilevante.
Esempi
groupAnagrams([“scarabeo”, “arabo”, “noob, “arabesco”, “bono”]) → [ [ 'scarabeo',
'arabesco' ], [ 'arabo' ], [ 'noob', 'bono' ] ]
groupAnagrams([]) → [] */

function groupAnagrams(strs){
  var r={}, a=[]
  for(var s of strs){
    var k=s.split("").sort().join("")
    if(k in r) r[k].push(s); else r[k]=[s]
  }
  for(var k in r)
    a.push(r[k])
  return a
}

groupAnagrams(["scarabeo", "arabo", "noob", "arabesco", "bono"]) /* → [ [ 'scarabeo',
'arabesco' ], [ 'arabo' ], [ 'noob', 'bono' ] ] */
groupAnagrams([]) //→ []