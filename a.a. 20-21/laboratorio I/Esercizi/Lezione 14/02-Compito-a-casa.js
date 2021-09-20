/* ESERCIZIO 1
Scrivere una funzione convertiBinCompl(a) che dato un numero a espresso in base 10, compreso tra [-256, 256), restituisce la rappresentazione in complemento a due di a su 9 bit. 

ESEMPI:
convertiBinCompl(13): 000001101
convertiBinCompl(-93): 110100011 
convertiBinCompl(-256): 100000000
convertiBinCompl(255): 011111111
*/


function compl(n){
  if(n==1) return 0
  else return 1
}

function convertiBinCompl(a){
  var b=[];
  if(a<256 || a>-256){
    for(var i=9; i>0; i--){
      a=Math.floor(a/2);
      b.push(compl(a%2));
    }
  }
  return b.charAt(b);
}


/* ESERCIZIO 2
Scrivere una funzione contaFoglie(t) che dato un albero binario t restituisce il numero di foglie di t

ESEMPI:
contaFoglie(t): 5 //con t quello generato da esempioBin()
contaFoglie(t): 3 //con t quello generato da esempioPersone()
*/


function contaFoglie(t){
  if(t == undefined){
    return 0
  }
  if(t.sx==undefined && t.dx==undefined) {
    return 1;
  }else{ 
      return contaFoglie(t.sx) + contaFoglie(t.dx);
  }
}

/* ESERCIZIO 3
Scrivere una funzione isPrimo(a) che restituisce true se a è primo, e false altrimenti. Si scriva poi una seconda funzione eliminaPrimi(a) che, dato un array a contenente interi, restituisce un array contenente tutti i non primi di a.

Nota: In matematica, un numero primo (in breve anche primo) è un numero naturale maggiore di 1 che sia divisibile solamente per 1 e per sé stesso. 

ESEMPI:
isPrimo(17): true
isPrimo(9901): true
isPrimo(98029801): false
*/
function isPrimo(a){
  if(a==1 || a==2) {
    return true;
    }
  for (var i=2; i<a; i++){
    if(a%i==0) {
      return false;
    }
  }
  return true;
}

function eliminaPrimo(a){
  for(var i=0; i<=a.length; i++){
    if(isPrimo(a[i])) {
      a.pop(i);
    }
  }
  return a;
}

/* ESERCIZIO 4
Si scriva una funzione isPal(s) che, data una stringa s, restituisce true se s è palindroma, e false altrimenti. 

NOTA: una stringa è palindroma se può essere letta da sinistra verso destra e da destra verso sinistra indifferentemente (es. "anna", "ailatiditalia").

ESEMPI:
isPal("avallava"): true
isPal("agioga"): false
isPal("onorarono"): true
*/

function isPal(s){
  var len=Math.floor(s.length/2);
  for(var i=0; i<len; i++){
    if(s[i]!==s[s.length -i -1]){
      return false;
    }
  }
  return true;
}

/* ESERCIZIO 5
Scrivere una funzione indexEq(a) che, preso un array a ordinato di interi distinti, restituisce true se esiste un indice i tale che a[i] = i, e false altrimenti.

ESEMPI:
indexEq([-42, -11, 0, 2, 5]): false
indexEq([-42, -11, 0, 2, 4]): true
indexEq([-42, -11, -5, -2, 0, 2, 4, 5, 6, 7, 10, 202]): true
*/ 

function indexEq(a){
  for(i in a){
    if(a[i]==i)
    return true;
  }
  return false;
}