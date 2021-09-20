/*
SommAlterna
Si scriva una funzione sommAlterna(a) che, dato come argomento un array di
numeri a, restituisca la somma alternata degli elementi, ovvero
+a0-a1+a2-a3+a4-a5…
Esempi
sommAlterna([1,2,3,4])→ -2
sommAlterna([1, -1, 1, -1]) → 4
sommAlterna([]) → 0
*/

function sommAlterna(a){
  let ip=0;
  let id=0;
  let res;
  for(i in a){
    if(i%2==0 || i==0){
      //indici pari
      ip=ip+a[i]
    }
    if(i%2!=0){
      //indci dispari
      id=id+(-a[i])
    }
  }
  return res=ip+id
}


/*
SubSeq
Si scriva una funzione subSeq(ago,pagliaio) che, dati come argomenti due array
con elementi di qualunque tipo, restituisca true se l’array ago è una sottosequenza
dell’array pagliaio (ovvero, esiste un punto all’interno di pagliaio in cui si trovano
tutti gli elementi di ago, consecutivamente e nello stesso ordine)
Esempi
subSeq([1],[4,12,4,1,4]) → true
subSeq([1,2],[4,7,2,1,4]) → false
subSeq([true,false,true],[true,true,false,true,true]) → true
*/

//NON FUNZIONA
function subSeq(ago,pagliaio){
 return sottoinsieme(ago,pagliaio)?true:false
}

function sottoinsieme(a,b){
  var res=true;
  for (e in a){
    if(! (e in b)){
      res=false;
    }
  }
  return res;
}

/*
Numeri di Tribonacci
La successione Tribonacci è definita come segue: t(0)=0; t(1)=0; t(2)=1, e per ogni
termine successivo vale t(n)=t(n-1)+t(n-2)+t(n-3).
Si scriva una funzione tribo(n) che calcoli e restituisca t(n).
Esempi
tribo(1) → 0
tribo(10) → 81
tribo(2228) → 121415
*/

function tribo(n){
  let t;
  if(n==0 || n==1) return 0
  if(n==2) return 1
  else{
    t=tribo(n-1)+tribo(n-2)+tribo(n-3)
  }
  return t
}

/*
SerieParziale
Una successione è, come sapete, una sequenza ordinata di valori, che possiamo
considerare una funzione f:ℕ→ℝ. Ad ogni successione può essere associata una
serie, calcolata come somma degli elementi della successione. Una serie parziale
si ottiene quando il calcolo della serie si arresta a un termine di indice n dato.
Si scriva una serieParziale(f,n) che, data una funzione f come sopra, e un naturale
n, restituisca la serie parziale di f limitata a n (partendo da 0, n incluso).
Esempi
serieParziale(x=>1, 5) → 6
serieParziale(x=>(x%2==0?1:-1),9) → 0
*/

function serieParziale(f,n){
  if(n==0) return f
  else {
    for(var i in n){
      serieParziale(f+i,n)
    }
  }
}


/*
SerieParziale 2
Con riferimento all’esercizio precedente, si scriva una funzione serieParziale2(f)
che, ricevuta una funzione f:ℕ→ℝ che rappresenta una successione, restituisca
una funzione gf:ℕ→ℝ tale che gf(n) calcoli la serie parziale di f (fra 0 e n inclusi).
Esempi
serieParziale2(x=>1)(5) → 6
serieParziale2(x=>(x%2==0?1:-1))(9) → 0
*/



/*
Mkmap
Si scriva una funzione mkmap(s) che, ricevuto un array di stringhe s, restituisca un
oggetto avente una proprietà si: 1 per ogni elemento si di s.
Esempi
mkmap(["pippo","pluto"]) → { pippo: 1, pluto: 1 }
mkmap([]) → { }
mkmap(["pippo","pippo"]) → { pippo: 1 }
*/

function mkmap(s){
  let obj={}
  for(var i of s){
    for(var k of s){
      if(s[i]==s[k]){
        obj[i]=1
      }
    }
  }
  return obj
}

/*
Potatura 3
Si scriva una funzione pota3(t,k) che, dato un albero binario t costruito come visto
a lezione con nodi {val:v, sx:ts, dx:td}, modifichi t rimuovendo tutte le foglie,
sommando i valori delle foglie rimosse a quello del loro nodo padre. La funzione
non deve restituire nulla.
*/

function pota3(t,k){
	if(!t.sx && !t.dx){
		delete t.val;
	}
	if(t.sx){
		if(!t.sx.sx && !t.sx.dx){
			t.val+=t.sx.val;
			delete t.sx;
		}
		else{
			pota3(t.sx);
		}
	}
	if(t.dx){
		if(!t.dx.sx && !t.dx.dx){
			t.val+=t.dx.val;
			delete t.dx;
		}
		else{
			pota3(t.dx)
		}
	}
}

/*
Visita 2
Si scriva una funzione visita2(t,f) che, dato un albero binario t costruito come visto
a lezione con nodi {val:v, sx:ts, dx:td}, e una funzione f, restituisca un nuovo albero
ottenuto sostituendo il val di ogni nodo con il risultato di f applicata al valore
precedente. L’albero originale non deve essere modificato.
*/

function visita2(t,f){
  if(!t)
  n={}
  n.val=t.val
  if(t.sx){
    n.sx=visita2(t.sx,f)
  }
  if(t.dx){
    n.dx=visita2(t.dx,f)
  }
}

/*
isHeap
Si scriva una funzione isHeap(t) che, dato un albero k-ario t costruito come visto a
lezione con nodi {val:v, figli: [t1, …, tn]}, restituisca true se l’albero soddisfa la
proprietà di heap, ovvero il valore del padre è sempre maggiore del valore di
ciascuno dei figli
*/


function isHeap(t){
  if (!t.figli){
    return true;
  }

  for (figlio of t.figli )
    if(t.val<figlio.val)
      return false;
  
  for (figlio of t.figli)
    if (!isHeap(figlio))
      return false;
  
  return true;
}


/*
Gran Mogol
Si scriva una funzione granMogol(Q) che, dato un array di oggetti Q che
rappresenta l’esito di una votazione, in cui ciascun oggetto ha la forma
{ candidato: n0, votanti: [n1, …, nk] } con ni che è una stringa contenente il nome di
un membro delle Giovani Marmotte, restituisca il nome del prossimo Gran Mogol,
vincitore dell’elezione.
Attenzione: non vince chi prende più voti, ma solo il candidato che abbia tra i suoi
votanti tutti i 3 nipoti “Qui”, “Quo” e “Qua”. Se nessun candidato è stato votato da
tutti i 3 nipoti, la funzione deve restituire undefined. Se più candidati sono stati
votati da tutti i 3 nipoti, la funzione deve restituire il primo in ordine alfabetico.
Si assuma che ogni membro delle Giovani Marmotte possa votare anche più
candidati (quindi, il relativo nome può apparire in più liste di votanti).
*/

function granMogol(voti){
  let ris=[];
  for(cand of voti){
    if(nipoti(cand))
      ris.push(cand.candidato)
  }

  if(ris.length>0){
    ris.sort();
    return ris[0];
  }
}

function nipoti(votanti){
  listaNipoti={"Qui":1, "Quo":1, "Qua":1};
  for(votante  of votanti){
    if(votante in listaNipoti){
      conta++;
    }
  }
  return (conta==3);
}

/*
Semplifica
Si scriva una funzione semplifica(ao,ak) che, ricevuto un array di oggetti ao, e un
array di stringhe ak, “semplifichi” gli oggetti contenuti in ao in modo da eliminare in
ciascun oggetto tutte le proprietà le cui chiavi non compaiono nell’elenco di ak. La
funzione deve restituire il numero complessivo di proprietà eliminate.
Si cerchi di realizzare un’implementazione efficiente, dal punto di vista algoritmico.
Esempi
o= {a:12, q: 3}; ao=[ { a:1, b:3}, {a:5, c: 7}, {q:4, d:true}, o ]
semplifica(ao,[“q”,”c”]) → 5 ao → [ {}, {c:7}, {q:4}, {q:3} ] o → {q:3}
*/
function semplifica(ao,ak){
  let count=0;
  for(i in ao){
    for(k in ao[i]){
      if(!ak.includs(k))
        delete ao[i].k;
        count++;
    }
  }
  return count;
}


/* -------------------------------------------------------------------- */

/* SerieParziale
Una successione è, come sapete, una sequenza ordinata di valori, che possiamo
considerare una funzione f:ℕ→ℝ. Ad ogni successione può essere associata una
serie, calcolata come somma degli elementi della successione. Una serie parziale
si ottiene quando il calcolo della serie si arresta a un termine di indice n dato.
Si scriva una serieParziale(f,n) che, data una funzione f come sopra, e un naturale
n, restituisca la serie parziale di f limitata a n (partendo da 0, n incluso).
Esempi
serieParziale(x=>1, 5) → 6
serieParziale(x=>(x%2==0?1:-1),9) → 0 */

function serieParziale(f,n){
  let res=0;
  if(n<0) return res;
  res=f(n);
  return res + serieParziale(f,n-1);
}

/* SerieParziale 2
Con riferimento all’esercizio precedente, si scriva una funzione serieParziale2(f)
che, ricevuta una funzione f:ℕ→ℝ che rappresenta una successione, restituisca
una funzione gf
:ℕ→ℝ tale che gf
(n) calcoli la serie parziale di f (fra 0 e n inclusi).
Esempi
serieParziale2(x=>1)(5) → 6
serieParziale2(x=>(x%2==0?1:-1))(9) → 0 */

function serieParziale2(){

}

/* Mkmap
Si scriva una funzione mkmap(s) che, ricevuto un array di stringhe s, restituisca un
oggetto avente una proprietà si: 1 per ogni elemento si di s.
Esempi
mkmap(["pippo","pluto"]) → { pippo: 1, pluto: 1 }
mkmap([]) → { }
mkmap(["pippo","pippo"]) → { pippo: 1 } */

function mkmap(s){ 
}