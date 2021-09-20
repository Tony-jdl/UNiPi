// Es. 1 - Si scriva una funzione max(a,b) che restituisca il massimo fra a e b

function max(a, b) {
  // scrivete il vostro codice qui
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


// Es. 2 - Si scriva una funzione media(a) che restituisca la media aritmetica dei valori contenuti nell'array a (assumendo che i valori siano tutti numeri)

function media(a) {
  // scrivete il vostro codice qui
  let s = 0, c = 0, m = 0;
  for (var i in a) {
    s += a[i];
    c++;
  }
  m = s / c;
  return m;
}


/*
 Es. 3 - Si scriva una funzione fiibum(n) che, dato un intero n>1, restituisca un array contenente, in ordine, tutti gli interi fra 1 e n, con le seguenti eccezioni:
- se un valore è multiplo di 3, al suo posto va inserito "fii"
- se un valore è multiplo di 5, al suo posto va inserito "bum"
- se un valore è multiplo sia di 3 che di 5, al suo posto va inserito "fiibum"
*/
function fiibum(n){
	let a=[];
	for (var i=1; i<=n; i++){
		if(i%3==0 && i%5==0){
		  a.push("fiibum");
		} else if (i%3==0){
		  a.push("fii");
		} else if (i%5==0) {
		  a.push("bum");
		} else {
		  a.push(i);
		}
	}
  return a;
}


/*
Es. 4 - Si scriva una funzione map(a,f) che dati:
 - un array a = [a1, a2, ... , an]
 - una funzione f
 restituisca un array contenente [ f(a1), f(a2), ... , f(an) ]
*/
function map(a,f){
  let b=[], i;
  for (i in a){
    b.push(f(a[i]));
  }
  return b;
}



/*
Es. 5 - Si scriva una funzione maggiorenni(a) che dato un array di persone, in cui ciascuna persona è un oggetto con campi nome, età, e potenzialmente altri, restituisca un array contenente solo le persone con età maggiore o uguale a 18, mantenendo l'ordine con cui le persone comparivano nell'array passato come argomento.
*/
function maggiorenni(a){
  let b=[], i;

  for (i in a){
    if(a[i].età >= 18){
      b.push(a[i]);
    }
  }
  return b;
}