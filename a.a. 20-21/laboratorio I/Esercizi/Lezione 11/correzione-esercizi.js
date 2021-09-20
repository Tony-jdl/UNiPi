/*
Qui è definita nell'ambiente una costante di nome T che deve essere un albero. Non potete assegnare un valore a T (è una const!), ma potete cambiare le sue chiavi e i relativi valori. Ad ogni cambiamento viene ridisegnato l'albero codificato da T.
Inizialmente, T={} (ovvero: solo un nodo radice anonimo, senza valore né figli).
*/

// ESERCIZI SU ALBERI BINARI A VALORI NUMERICI
//--------------------------------------------

// 1. Trovare il massimo fra i valori in un albero

function maxT(t){
  console.log("maxt() chiamata su "+t?.val) // stampa ogni volta che viene chaimata, la simbologia "?." va a sostituire un if
  if (t==undefined)
    return -Infinity;
  return Math.max(t.val, maxT(t.sx), maxT(t.dx));
}

function maxT2(t){
  console.log("maxt() chiamata su "+t?.val) // stampa ogni volta che viene chiamata
  var a,b,c;
  a=t.val;
  b=t.sx?maxT2(t.sx):-Infinity;
  c=t.dx?maxT2(t.dx):-Infinity;
  var m=Math.max(a,b,c);
  t.val = t.val + " max="+m; // restituisce il max scoperto fino a quel punto
  return m;
}

// 2. Trovare la somma dei valori in un albero
function sumT(t) {
  if (t==undefined) return 0;
  return t.val + sumT(t.sx) + sumT(t.dx);
}

// 3. Dire se un albero contiene un valore cercato o no

function findT(t,v){
  if(t==undefined) return false
  return (t.val==v) || findT(t.sx,v) || findT(t.dx,v)
}

// 4. Contare quanti sono i nodi di un albero che hanno un valore dato

function countT(t,v){
  if (t==undefined) return 0;
  return ((t.val==v)?1:0) + countT(t.sx,v) + countT(t.dx,v);
}

// 5. Scambiare fra di loro i rami destro e sinistro della radice

function swapT(t){
  var tmp = t.sx;
  t.sx = t.dx;
  t.dx = tmp;
}

// 6. Tagliare da un albero tutti i rami che iniziano da un nodo con valore dato

function cutT(t,v){
  if (t==undefined) return;
  if (t.sx && t.sx.val==v) delete t.sx; 
  else cutT(t.sx,v);
  if (t.dx && t.dx.val==v) delete t.dx; 
  else cutT(t.dx,v);
  // non tratta il caso in cui ci sia da tagliare la radice
  return;
}


// ESERCIZI SU ALBERI k-ARI A VALORI NUMERICI
//--------------------------------------------

// 7. Trovare il massimo fra i valori in un albero

function findMax(t){
  if (t.figli==undefined)
    return t.val;
  var max=t.val;
  for (figlio of t.figli){
    let maxF=findMax(figlio);
    if (maxF>max)
      max=maxF;
  }
  return max;
}

// 8. Dire se un albero contiene un valore cercato o no


// 9. Applicare una funzione data a tutti i valori contenuti in un albero, sostituendo in ogni nodo il valore attuale con il risultato della funzione applicata al valore attuale



// ESEMPIO: VALUTAZIONE DI ESPRESSIONI
// (usiamo un albero binario con foglie numeriche e nodi interni operatori)
//-------------------------------------------------------------------------
