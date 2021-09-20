//funzione che stampa una stringa al contrario 
function reverse(s){

  var res="";
  for(i=s.length-1; i>=0; i--){
    res+=s[i];
  }
  return res;
}

/*
a.charAt() // funzione che passandogli il numero va a prendere il carattere con posizione pari al valore inserito
//posso vedere le stringhe di caratteri come array anche se non lo sono 
a.split('a') // restituisce le parole che compongono la stringa esclusa la lettera passsata come paramentro alla funzione
a.split(' ') // restituisce parole separate da spazi
a.split('') // restituisce tutti i singoli caratteri che compongono la stringa
*/


//funzione che inserisce un elemento in un insieme

function inserisciInsieme(a, val){
  a[val]=1;
}

/*A={'mele':1, 'pere':1, 'prugne':1} creo un insieme
A['mele'] richiamo valore associato a stringa mele
'mele'in A restituisce se il valore è presente o no con valore bool*/

//funzione che elimina un elemento dall'insieme

function rimuoviInsieme(a,val){
  delete a[val];
}

//funzione che controlla se un insieme è sottoinsieme di un altro

function sottoinsieme(a,b){
  var res=true;
  for (e in a){
    if(! (e in b)){
      res=false;
    }
  }
  return res;
}

//funzione che controlla se due insiemi sono identici

function uguali(a,b){
  /*a=b se a sottoinsieme di b e b è sottonisieme di a*/
  return sottoinsieme(a,b) && sottoinsieme(b,a);
}

//funzione che restituisce l'intersezione di 2 insiemi

function inteersezione(a,b){
  var c={};
  for(e in a)
    if(e in b)
      c[e]=1;
  return c;
}

//funzione che restituisce l'unione di 2 insiemi

function unione(a,b){
  var c={};
  for (e in a)
    c[e]=1;
  for (e in b)
    c[e]=1;
  return c;
}
