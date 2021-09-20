/*
Esercizio 1
Si scriva la funzione ricorsiva sommaPari(a), che prende come parametro un
array a di interi e restituisce la somma degli elementi pari.
Esempi:
sommaPari([5,9,1,-4,3,6,2,-5]) → 4
sommaPari([5,9,1,33,7,-3]) → 0
*/

//NON FUNZIONA
function sommaPari(a){
  let sum=0;

  if(a.length==0){
    return 0;
  }
  else{
    if(a[0]%2==0){
      sum=sum+a.shift();
      console.log("sum --> "+sum)
    }
    else{
      a.shift();
    }
    sommaPari(a)
  }
  return sum;
}

/*
Esercizio 2
Si scriva una funzione map(f,a), dove f è una funzione che prende come
argomento un intero e restituisce un valore numerico, e a è un array di interi. map
(f,a) restituisce l'array il cui i-esimo elemento è il risultato dell'applicazione di f
all'i-esimo elemento di a.

Esempi:
map(x => x*x, [1,2,3,4,5,6]) → [1,4,9,16,25,36]
map (x => Math.sqrt(x),[1,2,3,4,5,6]) →
[1,1.4142135623730951,1.7320508075688772,2,2.23606797749979,2.44948974
2783178]
map(x => x++, [1,2,3,4,5,6]) → [1,2,3,4,5,6]
map(x => ++x, [1,2,3,4,5,6]) → [2,3,4,5,6,7]
*/

function map(f,a){
  let b=[];

  for(var i in a){
    b.push(f(a[i]));
  }
  return b;
}

/*
Esercizio 3
Si scriva una funzione filter(f,a), dove f è una funzione che prende come
argomento un intero e restituisce un valore booleano, e a è un array di interi.
filter (f,a) restituisce l'array in cui sono presenti solo i valori per cui f
restituisce true, nell'ordine in cui compaiono in a.
Esempi:
filter(x => x>0, [10,4,-90,21,-1]) → [10,4,21]
filter(x => x<0, [10,4,-90,21,-1]) → [-90,-1]
*/

function filter(f,a){
  let b=[];

  for(var i in a){
    if(f(a[i])){
      b.push(a[i]);
    }
  }
  return b;
}

/*
Esercizio 4
Si scriva una funzione similitudine(a,b), con a e b stringhe. La funzione
restituisce un oggetto che contiene come chiavi i caratteri che compaiono nelle
due stringhe alla stessa posizione, e come valore la posizione corrispondente.
Esempi:
similitudine("The Holy Grail", "Life of Brian") → {o: 5, a: 11}

NOTA: Se lo stesso carattere appare più volte in entrambe le stringhe nella stessa posizione, per esempio “pippo” e “pappa”, va bene restituire una qualunque delle posizioni in cui appare (nell’esempio: {p: 0} o {p: 2} o {p: 3}).
*/

function similitudine(a,b){
  let obj={};
  let c=0;
  for(var i in a){
    for(var j in b){
      if(a[i] == b[j] && i == j){
        obj[a[i]]=i;
      }
      
    }
  }
  return obj;
}

/*
Esercizio 5
Si scriva una funzione tombola(a,b) che prende come argomenti due array di
interi positivi (>0) distinti (senza ripetizioni).
● se nessun intero in a compare in b, le funzione restituisce (esattamente) la stringa "ritenta";
● se solo un intero in a compare in b, le funzione restituisce (esattamente) la stringa "ritenta";
● se due interi in a compaiono in b, la funzione restituisce (esattamente) la stringa "ambo";
● se tre interi in a compaiono in b, la funzione restituisce (esattamente) la stringa "terno";
● in tutti gli altri casi restituisce (esattamente) la stringa "tombola".
Esempi:
tombola([1,17,4,90],[4,17,33,89,32]) → 'ambo'
tombola([1,17,4,90],[6,27,33,89,32]) → 'ritenta'
tombola([1,17,4,90],[1,27,4,89,32,90,17]) → 'tombola'
*/

function tombola(a,b){
  let c=0;
  for(var i in a){
    for (var k in b){
      if( a[i]==b[k]){
        c++;
      }
    }
  }
  if(c>3){console.log("tombola");}
  else if(c==3){console.log("terno");}
  else if(c==2){console.log("ambo");}
  else if(c<=1){console.log("ritenta");}
}


/*
Esercizio 6
Le somme prefisse di una sequenza di interi x0, x1, ..., xn sono una
sequenza di interi y0, y1, ..., yn tali che y0 = x0, y1= x0+x1, y2 =
x0+x1+x2, ..., yn = x0+x1+x2+...+xn.
Si scriva una funzione sommeP(a) che prende come argomento un'array a di
interi e restituisce un array contenente le somme prefisse degli elementi di a.
Esempi:
sommeP([1,2,3,4,5,6]) → [1,3,6,10,15,21]
sommeP([0,2,4,4,2,0,-2,-4,-6]) → [0,2,6,10,12,12,10,6,0]
*/

//NON MI E' CHIARO IL TESTO
function sommeP(a){
  let b=[];

  for(var i in a){
    b.push(somma(a[i]));
  }
  return b;
}

function somma(n){
  let sum=0;
  if(n==0) return 0;
  else{ 
    sum=n+somma(n-1);
  }
  return sum;
}

/*
Esercizio 7
Si scriva una funzione decifra(s,k) con s una stringa cifrata e k un intero positivo. La funzione restituisce la
corrispondente stringa decifrata utilizzando k (la chiave). La decriptazione segue le regole del cifrario di Cesare
applicate alla codifica UNICODE dei caratteri. In particolare:
● data una lettera c della stringa cifrata questa viene sostituite dalla lettera che si trova k posizioni prima nella
codifica UNICODE. Ad esempio, la lettera 'e' viene decrittata nella lettera 'c' quando la chiave k è uguale a
2;
● si assuma che la stringa contenga solo lettere minuscole dell'alfabeto (inglese), oppure il carattere spazio;
● il carattere spazio va lasciato inalterato.
Attenzione: se nel tornare indietro di k posizioni finite fuori dall'alfabeto (prima della lettera 'a') ricominciate dal
fondo (dalla ‘z’). Ad esempio la lettera criptata 'a' viene decriptata con 'y' quando k è uguale a 2; 'a' viene
decriptata con 'z' se k = 1).
SUGGERIMENTO: il codice UNICODE per 'a' e' 97. Si usino le funzioni s.charCodeAt() e
String.fromCharCode().
Esempi:
decifra("hal",25) → 'ibm'
decifra("hal zzzz",25) → 'ibm aaaa'
*/


/*
Esercizio 8
Si scriva una funzione verificaSomma(a) che prende come parametro un
array di interi. La funzione restituisce true se ogni elemento di a (tranne il primo)
è pari alla somma degli elementi che lo precedono, e false altrimenti.
Esempi:
verificaSomma([1, 2, 6, 10, 32]) → false
verificaSomma([1, 1, 2, 4, 8]) → true
*/

function verificaSomma(a){
  let sum=0;
  for(var i=1; i<a.length; i++){
    sum = sum + a[i-1];
    if(a[i]!=sum) return false;
  }
  return true;
}


/*
Esercizio 9
Si scriva una funzione frequenzaC(s) che, preso come parametro una stringa
s, restituisca un dizionario le cui chiavi sono i caratteri contenuti in s e i cui valori il numero di volte che quel carattere compare nella stringa (anche il carattere spazio
va considerato).
Esempi:
frequenzaC("i vitelli dei romani sono belli") → {i: 6,' ': 5,v: 1,t:
1,e: 3,l: 4,d: 1,r: 1,o: 3,m:1,a: 1,n: 2,s: 1,b: 1}
frequenzaC("La forzA sia con te!") → {L: 1,a: 2,' ': 4,f: 1,o: 2,r: 1,z:
1,A: 1,s: 1,i:1,c: 1,n: 1,t: 1,e: 1,'!': 1}
*/

//NON FUNZIONA
function frequenzaC(s){
  let obj={};
  let c=0;
  for(var i in s){
    /*for(var k in s){
      if(s[i]==s[k]){
        c++;
        obj[s[i]]=c;
      }
    }*/
    if(s[i] in s)
      obj[s[i]]++
    else 
      obj[s[i]]=1
  }
  return obj;
}


/*
Esercizio 10
Si scriva una funzione contaDispari(T) che dato un albero binario (i cui nodi sono
implementati come visto a lezione come oggetti con chiavi val, sx e dx) restituisca il numero di nodi contenente un valore dispari.
Esempi:
contaDispari({val:7,sx:{val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4,
dx:{val:3}, sx:{val: 8}}}}, dx:{val: 11, dx: {val: 3}, sx: {val:8, sx: {val:
6}}}}) → 5
contaDispari({val:8,sx:{val: -4, sx: {val: 33}, dx: {val:13, sx: {val: 4,
dx:{val:-3}, sx:{val: 81}}}}, dx:{val: 11, dx: {val: 3}, sx: {val:8, sx: {val:
63}}}}) → 7
contaDispari({val:8,sx:{val: -4, sx: {val: 32}, dx: {val:12, sx: {val: 2,
dx:{val:-2}, sx:{val: 812}}}}, dx:{val: 112, dx: {val: 32}, sx: {val:82, sx:
{val: 632}}}}) → 0
*/

function contaDispari(t){
  if(t==undefined) return 0
  return ((t.val%2!=0)?1:0)+contaDispari(t.sx)+contaDispari(t.dx);
}


/*
Esercizio 11
Si scriva una funzione gby(data), che prende come argomento un array di dizionari (oggetti). Ogni dizionario rappresenta la carriera scolastica di uno studente. In particolare, ogni dizionario ha come chiave il nome di un insegnamento, e come valore il voto preso all'esame (che si assume essere >= 18).
Ad esempio, il seguente array contiene le carriere di 3 studenti:
data = [{lab1:20, fi: 30},{analisi:28, lab1:30},{algebraL:28, ProgAlgo:30}]
La funzione gby(data) restituisce un dizionario le cui chiavi sono i nomi degli insegnamenti, e come valore la media dei voti presi da tutti gli studenti per quell'insegnamento.
Esempi:
gby([{lab1:20, fi: 30}, {analisi:28, lab1:30}, {algebraL:28, progAlgo:30, fi:
18}]) → {lab1: 25, fi: 24, analisi: 28, algebraL: 28, progAlgo: 30}
gby([{lab1:20, fi: 29}, {analisi:28, lab1:27}, {algebraL:28, progAlgo:30, fi:
18}]) → {lab1: 23.5, fi: 23.5, analisi: 28, algebraL: 28, progAlgo: 30}
*/

//NON FUNZIONA
function gby(data){
  let c=0;
  let obj={};

  for(var i in data){
    for(var k in data[i]){
      console.log("data[i] -> "+i+","+"k -> "+k)
    }
  }
  return c;
}


/*
Esercizio 12
Si scriva una funzione dna(s,a), che prende come argomento una stringa s ed un array di stringhe a, e restituisce un dizionario le cui chiavi sono tutte le stringhe in a. Il valore di una chiave c è l'array contenente tutte le posizioni in s da cui iniziano le occorrenze di c (se non ci sono occorrenze di c in s allora l'array sarà vuoto).
Esempi:
dna("actgcctgaactgactgaa",["act","cgt","aat"]) → {act: [0,9,13],
cgt: [], aat: []}
dna("actgcgtgaactgactgaa",["act","cgt","aat"]) → {act: [0,9,13],
cgt: [4], aat: []}
dna("actgcgtgaactgactgaa",["act","ctg","tga"]) → {act: [0,9,13],
ctg: [1,10,14], tga: [6,11,15]}
*/

function dna(s,a){
  let obj={};

  for(var i in s){
    if(a[i] in s){
      obj[s[i]]=i;
    }
  }
  return obj;
}