/**
 * In matematica, un numero vampiro è un numero naturale v>0 costituito da un numero pari di cifre n, tale che v = xy, e x e y sono due naturali ognuno aventi n/2 cifre, che non abbiano entrambi zeri finali, e tali che v contenga esattamente tutte le cifre contenute in x e y.
Ad esempio:
1260 è un numero vampiro, perché 1260=21*60.
125460 è un numero vampiro perché 125460 = 204*615 (o anche perché 125460 = 246*510)
Si scriva una funzione isVampire(v) che, preso come argomento un valore naturale positivo v, restituisca il valore booleano true se v è un vampire number, e false altrimenti.
SUGGERIMENTO: si utilizzi il metodo s.slice(i,j) delle stringhe, che, data una stringa s, restituisce la sottostringa di s tra l'indice i (incluso) e j (escluso).

Esempio:
isVampire(1260) → true
isVampire(10) → false

 

1260=21*60
['1260','1620','1062'........]


12
[12,21]
123
[123,132,213,231,312,321]


""
[""]


2
[2]

123

23
c='1'
risParziale=['23', '32']
123 213 231   132 312 321
*/

function isVampire(n){
  if(String(n).length%2==1)
    return false;

  let p=permutazioni(String(n));

  for(let perm of p){
    let n1=Number(perm.slice(0,String(n).length/2));
    let n2=Number(perm.slice(String(n).length/2));
    if(n1*n2==n)
      return true;
  }
  return false;
}


function permutazioni(s){
  if(s.length==0)
    return [""];

  var ris=[];
  var c=s[0];
  var risParziale=permutazioni(s.slice(1));
  for (rp of risParziale){
    for(let i =0;i<=rp.length;i++){
      ris.push(rp.slice(0,i)+c+rp.slice(i));
    }
  }
  return ris;
}


/**
 * Si consideri il problema di dover prioritizzare l'ordine di atterraggio degli aerei sulla base del loro carburante residuo.
Un singolo aereo è rappresentato dalla proprietà (coppia chiave-valore) {iata:fuel}, dove iata è una stringa che rappresenta il codice univoco del volo e fuel è un valore numerico >= 0 che rappresenta il carburante residuo. 

Si scriva la funzione torreDiControllo(aerei), dove aerei è un array (non-ordinato) di aerei. La funzione deve ordinare gli elementi dell'array aerei in ordine crescente di fuel (ovvero dal valore più piccolo al più grande). Si noti che il riordinamento deve necessariamente essere effettuato sul solo array aerei, senza l'utilizzo di ulteriori array di appoggio.
La funzione non deve restituire nulla (no return).

Esempi:

aerei = [{AZ100: 56},{LH100: 0.9},{FR99: 12},{AZ800: 7}]
dopo la chiamata a torreDiControllo(aerei), aerei contiene [{LH100: 0.9},{AZ800: 7},{FR99: 12},{AZ100: 56}]

 */

function confronto(a1,a2){

    for(k1 in a1);
    for(k2 in a2);
    return a1[k1]-a2[k2];
}


function torreDiControllo(aerei){
  aerei.sort(confronto);
  //aerei.sort( (a1,a2)=>Object.values(a1)[0]-Object.values(a2)[0]);
  /*{
    for(k1 in a1);
    for(k2 in a2);
    return a1[k1]-a2[k2];
  }
  )*/
}
