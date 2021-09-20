/*
Produttoria
Si scriva una funzione produttoria(a,b) che, dati come argomenti due interi positivi
a e b, con a ≤ b, restituisca il prodotto di tutti gli interi fra a e b, estremi compresi.

Esempi
produttoria(4,6) == 120
produttoria(10,10) == 10
produttoria(10,11) == 110
*/

function produttoria(a,b){
  var res=a;
  for(i=a+1; i<=b; i++){
    res=res*i;
  }
  return res;
}

/*
Quaterne
Si scriva una funzione quaterne(a,b) che, dati come argomenti due interi a e b,
con a ≤ b, restituisca il numero di quaterne (cioè sequenze distinte di quattro
numeri consecutivi) comprese fra a e b, estremi esclusi.

Esempi
quaterne(4,6) == 0
quaterne(4,10) == 2 (sono: 5/6/7/8 e 6/7/8/9)
quaterne(-4,10) == 10 (sono -3/-2/-1/0, -2/-1/0/1, … , 5/6/7/8, 6/7/8/9)
*/

function quaterna(a,b){
  var res=0;
  for(i=a; i<b; i++){
    if((i+4)<b){
      res++;
    }
  }
  return res;
}

/*
Numeri perfetti
Un numero naturale n si dice perfetto se è uguale alla somma dei propri divisori
propri (ovvero, tutti i suoi divisori positivi escluso n). Si scriva una funzione
perfetto(n) che, dato un numero naturale n, restituisca true se n è perfetto, false
altrimenti.

Esempi
perfetto(6) == true (infatti 1+2+3 = 6)
perfetto(10) == false (infatti 1+2+5 ≠ 10)
perfetto(28) == true (infatti 1+2+4+7+14 = 28)
*/

function perfetto(n){
  var status=false;
  var res=0;
  for(var i=1; i<n; i++){
    if(n%i==0){
      res=res+i;
    }
  }

  if(res==n){
    status=true;
  }

  return status;
}

/*
Range
Si scriva una funzione range(a,b) che, dati due interi a e b restituisca un array
ordinato di interi, contenente tutti e soli gli interi i tali che a ≤ i e i ≤ b.

Esempi
range(2,6) == [2, 3, 4, 5, 6]
range(10,10) == [10]
range(-5, 1) == [-5, -4, -3, -2, -1, 0, 1]
range(10, 4) == []
*/

function range(a,b){
  var vet=[];
  
  if(a<=b){
    for(i=a; i<=b; i++){
      vet.push(i);
    }
  }
  return vet;
}

/*
Penultimo
Si scriva una funzione penultimo(a) che, dato un array di stringhe a, restituisca la
penultima stringa secondo l’ordine alfabetico fra quelle presenti nell’array, oppure
undefined se non esiste una penultima.

Esempi
penultimo([“pera”, “zucca”, “mela”]) == “pera”
penultimo([“dattero”, “zucca”, “mela”]) == “mela”
penultimo([“zucca”]) == undefined
*/

let x=["pera", "zucca", "mela"];
let y=["dattero", "zucca", "mela"]
let z=["zucca"]

function penultimo(a){
  var ord=[], i;
   while(i<a.length){
     if(ord[i]<a[i]){
       ord[i+1].push(a[i])
     }
     i++;
   }
   return ord[ord.length-1];
}

/*
Multiinsiemi - conversione
Un multiinsieme è una generalizzazione del concetto di insieme in cui lo stesso elemento può apparire più volte. Si potrebbe rappresentare un multiinsieme come un array, per esempio: [4, 7, 10, 4, 9, 7, 4]. Lo si potrebbe anche rappresentare come un oggetto, in cui gli elementi sono le chiavi, e i corrispondenti valori indicano quante volte compare quell’elemento. L’array precedente può dunque essere rappresentato come { 4: 3, 7: 2, 9: 1, 10: 1}.
Si scriva una funzione cvtmi(a) che, data la rappresentazione ad array di un multiinsieme (di interi o
stringhe), restituisca la corrispondente rappresentazione a oggetto.

Esempi
cvtmi([“pera”, “zucca”, “mela”]) == { mela: 1, pera: 1, zucca: 1}
cvtmi([“pera”, “pera”, “pera”, “zucca”]) == {pera: 3, zucca: 1}
cvtmi([1,2,3,4,3,4,5,2,1,1,9]) == {1:3, 2:2, 3:2, 4:2, 5:1, 9:1}
*/

function cvtmi(a){
  
}

/*
Conta vocali
Si scriva una funzione contaVocali(s) che, data una stringa s, restituisca il numero
totale di vocali (lettere a, e, i, o, u, sia maiuscole che minuscole) presenti in s.

Esempi
contaVocali(“Ai lati d’Italia”) == 8
contaVocali(“qwerty”) == 1
contaVocali(“3463234”) == 0
contaVocali(“Nel mezzo del cammin di nostra vita”) == 11
*/

let string1="Ai lati d’Italia";
let string2="qwerty";
let string3="3463234";
let string4="Nel mezzo del cammin di nostra vita";

//soluzione stackoverflow
function contaVocali(s) {
  var m = s.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

//soluzione mia
function contaVocali2(s){
  var v ="aeiouAEIOU";
  var c=0;
  for(i in s){
    for(k in s){
      if(s.charAt(k)==v.charAt(i)) c++;
    }
  }
  return c;
}

/*
Una firma atipica
Si scriva una funzione firma(s) che, data una stringa s, restituisca un intero
positivo k calcolato come segue: si immagini di sostituire ogni vocale (maiuscola o
minuscola) o spazio in s con 1, e qualunque altro carattere con 0. Si consideri poi
la stringa risultante come un numero binario, e sia k il suo valore.

Esempi
firma(“Vincenzo Gervasi”) == 18853
firma(“Alina Sirbu”) == 1385
firma(“”) == 0
*/

let firma1="Vincenzo Gervasi";
let firma2="Alina Sirbu";
let fira3="";

function vocali(s){
  var str="aeiou";
  if(str)
  return str;
}

function bin(b){
  for (i of b){
    vocali(b[i]);
  }
}

function firma(s){

}

/*
Applicare una funzione a un oggetto
Si scriva una funzione applyobj(o, f) che, dato un oggetto o e una funzione f,
restituisca un oggetto o’ con le stesse chiavi di o, e in cui il valore di ogni chiave k
sia dato dall’applicazione di f al valore della chiave k in o, ovvero: o’.k == f(o.k).

Esempi
applyobj({pere: 3, mele: 1}, x=>2*x) == {pere: 6, mele: 2}
applyobj({io: “Vincenzo”, tu: “Alina”}, e=>e.length) == {io: 8, tu: 5}
applyobj({io: 8, tu: 5}, e=>e) = {io: 8, tu: 5}
applyobj({}, e=>e+1) = {}
*/


/*
Maxprod
Si scriva una funzione maxprod(a) che, dato un array di numeri naturali a,
restituisca un oggetto con struttura {idx: i, val: n} in cui i sia l’indice e n il valore
dell’elemento in a per cui è massimo il prodotto dell’indice per il valore
dell’elemento. In caso di parità, si scelga l’elemento di indice minore.

Esempi
minprod([8, 2, 2, 1]) == {idx: 2, val: 2}
minprod([1, 8, 1, 2, 2]) == {idx: 1, val: 8}
*/


/*
Appiattimento
Si consideri un array i cui elementi possono essere o numeri, oppure altri array
dello stesso tipo (ovvero, aventi per elementi o numeri, oppure altri array dello
stesso tipo, e così via). Si scriva una funzione appiattisci(a) che, dato un array a
come descritto sopra, restituisca un array contenente i soli numeri, nello stesso
ordine in cui comparivano nell’array a.

Esempi
appiattisci([8, [2, 2], 1]) == [8, 2, 2, 1]
appiattisci([[1], 8, [1, 2], 2, []]) == [1, 8, 1, 2, 2]
*/


/*
Rosa dei venti
Si considerino le quattro direzioni cardinali (nord, est, sud, ovest), ciascuna codificata con la lettera corrispondente in (N, E, S, W), nonché le direzioni intermedie codificate con due lettere in ordine qualsiasi (es: NE = EN = nord-est).
Si scriva una funzione rosa(s) che, data una stringa s contenente la codifica di una direzione come indicato sopra, restituisca un oggetto {x: i, y: j} in cui i e j sono valori fra -1, 0 e 1 che rappresentano lo spostamento unitario lungo l’asse x e lungo l’asse y, rispettivamente, corrispondente alla direzione codificata da s.

Esempi
rosa(“NE”) == {x: 1, y: 1} rosa(“EN”) == {x: 1, y: 1}
rosa(“S”) == {x: 0, y: -1} rosa(“NW”) == {x: 1, y: -1}
*/


/*
Percorso
Si scriva una funzione percorso(a) che, dato un array a di direzioni codificate da
stringhe come nell’esercizio precedente, restituisca la distanza euclidea fra
l’origine degli assi e la posizione finale di un ipotetico viaggiatore che parta
dall’origine e faccia un passo nella direzione indicata da ogni elemento del
percorso, in ordine.

Esempi
percorso([]) == 0 percorso([“N”,“E”]) == 1.4142136
percorso([“N”]) == 1 percorso([“N”,“N”,“NE”]) == 3.1622777
percorso([“N”,”S”]) == 0 percorso([“N”,“S”,“NE”]) == 1.4142136
*/


/*
Composizione di funzioni
Si scriva una funzione componi(f,g) che, date due funzioni f e g, restituisca una
funzione h tale che h(x) = g(f(x)).

Esempi
componi(x=>2*x, x=>2*x)(3) == 12
componi(s=>s.length, x=>x**2+1)(“Vincenzo”) == 65
componi(a=>a[0], s=>s.length)([“pere”,”banane”]) == 4
*/


/*
Differenza di date 
Si rappresenti una data come un oggetto della forma {giorno: g, mese: m, anno: a}, in cui g, m, e a sono indicati come numeri (con l’usuale convenzione: Gennaio = 1, … Dicembre = 12 per i mesi).
Si scriva una funzione diff(d1, d2) che, date due date nel formato indicato sopra, restituisca il numero di giorni trascorsi fra la prima e la seconda data (si usino i numeri negativi se d2 è precedente a d1). Si ricorda che Febbraio è lungo 28 giorni negli anni ordinari, e 29 giorni negli anni bisestili; sono bisestili tutti gli anni divisibili per 4, salvo quelli che sono divisibili per 100 (che invece sono ordinari).
Ai fini dell’esercizio si possono trascurare le varie riforme del calendario avvenute nei secoli.

Esempi
diff({giorno: 1, mese: 1, anno: 2020},{giorno: 4, mese: 2, anno: 2020})==34
diff({giorno: 1, mese: 1, anno: 2019},{giorno: 1, mese: 1, anno: 2020})==365
*/


/*
Dividere l’eredità
Si consideri un albero k-ario, in cui i nodi hanno la struttura {val: n, figli: [ t1, … tk ]}, come visto a lezione. Si vuole distribuire l’eredità di ogni nodo intermedio ai suoi figli in questo modo: il valore n di un nodo viene distribuito in parti uguali ai figli, ciascuno dei quali riceve dunque n/k. La quota ereditata viene sommata al valore di n di ciascun erede, e se l’erede non è una foglia, il risultato viene ulteriormente diviso ai figli, e così via.
Si scriva una funzione eredita(t) che, ricevuto come argomento un albero t nel formato descritto sopra, restituisca il valore totale (n proprio più quota ereditata) del nodo foglia con valore massimo.

Esempi
t={val: 16, figli: [{val: 4},{val: 2, figli: [{val: 8},{val: 2}]}]}
eredita(t) == 13 eredita({val: 5}) == 5
*/

