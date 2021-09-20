// ESERCIZIO 1
/*
Si progetti una classe Equazione2 che rappresenti una equazione di secondo grado della forma ax^2 + bx + c, con a != 0. Oltre al costruttore, la classe deve implementare i seguenti metodi:

eq.solve(), che restituisce un oggetto che rappresenta le soluzioni dell'equazione eq. L'oggetto ha la seguente forma: {x0: v0, x1: v1}. Nel caso uno o entrambi i valori non possano essere calcolati, si assegni il valore null

eq.print(), che restituisce la stringa che rappresenta il valore dei tre coefficienti presenti in eq (nell'ordine a, b e c, con i coefficienti separati da virgola e senza spazi - si veda esempio)

eq.reset(a,b,c), dove a, b e c sono tre valori numerici. Il metodo assegna a al coefficiente del termine di grado 2, b a quello di grado 1, e c all'ultimo. Il metodo restituisce la stringa che rappresenta il valore dei tre (nuovi) coefficienti presenti in eq.

eq.somma(eq1), con eq1 un oggetto Equazione2. Il metodo fa la somma fra eq ed eq1, e assegna i nuovi coefficienti a quelli di eq. Per somma si intende la somma dei coefficienti di pari grado delle due equazioni. Il metodo restituisce la stringa che rappresenta il valore dei tre (nuovi) coefficienti presenti in eq.

Esempio:
con eq x^2 - 7x + 10, avremo:

eq.solve -> {x0: 5, x1: 2}
eq.print -> "1,-7,10"

sia eq1 -2x^2 + 5x -9
eq.somma(eq1) -> "-1,-2,1"
eq.reset(3,4,7) -> "3,4,7"

con eq 25x^2 - 20x + 4, avremo:

eq.solve -> {x0: 0.4, x1: 0.4}
eq.print -> "25,-20,4"

con eq x^2 + x + 12, avremo:

eq.solve -> {x0: null, x1: null}
*/

class Equazione2 {
    a:number;
    b:number;
    c:number;

    constructor(a:number,b:number,c:number){
      this.a = a;
      this.b = b;
      this.c = c
    }
  
    print(){
      return this.a + "," + this.b + "," + this.c; 
    }
  
    reset(a,b,c){
      this.a = a;
      this.b = b;
      this.c = c;
      return this.print();
    }
  
    somma(eq){
      let a1 = this.a + eq.a;
      let b1 = this.b + eq.b;
      let c1 = this.c + eq.c;
      this.reset(a1,b1,c1);
      return this.print();
    }
  
    solve(){
      let delta = this.b**2 - 4*this.a*this.c;
      if (delta<0){
        return {x0: null, x1: null};
      }
      if (delta==0){
        return {x0: -this.b/(2*this.a), x1: -this.b/(2*this.a)};
      }
      return {x0: (-this.b + Math.sqrt(delta))/(2*this.a), 
        x1: (-this.b - Math.sqrt(delta))/(2*this.a)};
    }
  }
  
  // ESERCIZIO 2
  /*
  Si progetti una classe CollezioneFilm. Una CollezioneFilm è un insieme di film, dove ogni film è un oggetto avente i seguenti attributi: titolo, regista, anno, volteVisto. titolo e regista sono stringhe contenenti il titolo e il regista del film, rispettivamente; anno un intero positivo che rappresenta l'anno di uscita del film, e volteVisto rappresenta il numero di volte che quel film è stato visto. Si può assumere che il titolo rappresenti univocamente un film (ovvero, non esistono due film diversi aventi lo stesso titolo).
  
  Usate la strategia che ritenete più opportuna per rappresentare l'insieme di film della CollezioneFilm.
  
  Oltre al costruttore, la classe deve implementare i seguenti metodi:
  
  col.add(t,r,a), dove t, r, ed a sono due stringhe che rappresentano rispettivamente il titolo e il regista di un film, e a rappresenta il suo anno di uscita. Il metodo aggiunge il film alla CollezioneFilm col, e restituisce il numero di film (totale) presenti in CollezioneFilm (dopo l'aggiunta ddel film)
  
  col.remove(t), dove t è una stringa che rappresenta il titolo di un film. Il metodo rimuove il film avente titolo t dalla CollezioneFilm col, se esiste, e restituisce il numero di film (totale) presenti in CollezioneFilm (dopo l'eventuale rimozione del film; il numero va comunque restituito anche in caso non sia possibile rimuovere alcun film)
  
  col.count(), restituisce il numero totale di film presenti nella CollezioneFilm col
  
  col.vedi(t), dove dove t è una stringa che rappresenta il titolo di un film. Se il film è presente in col, incrementa di uno il numero di visualizzazioni per quel film in col, e restituisce il numero totali di visualizzazioni in col per quel film (inclusa quella appena fatta); altrimenti, restituisce -1
  
  col.visioni(), restituisce la somma delle visualizzazioni totali per tutti i film presenti in col
  
  Esempio:
  Partendo da una CollezioneFilm col vuota.
  
  col.add("Il Signore degli Anelli", "Peter Jackson", 2001) -> 1
  
  col. add("Guida galattica per autostoppisti", "Garth Jennings", 2005) -> 2
  
  col.vedi("Il Signore degli Anelli") -> 1
  
  col.vedi("Il Signore degli Anelli") -> 2
  
  col.visioni() -> 2
  
  col.count() -> 2
  
  col.add("Spaceballs", "Mel Brooks", 1987) -> 3
  
  col.visioni() -> 2
  
  col.remove("Il nome della rosa") -> 3
  
  col.count() -> 3
  */
  
  class Film {
    titolo:string;
    regista:string;
    anno:number;
    volteVisto:number;

    constructor(t:string,r:string,a:number){
        this.titolo = t;
        this.regista = r;
        this.anno = a;
        this.volteVisto = 0;
      }
  }
  
  class CollezioneFilm {    
    collezioneF:any
    constructor(){
      this.collezioneF = new Set();
    }
  
    add(t,r,a){
      let f = new Film(t,r,a);
      this.collezioneF.add(f);
      return this.collezioneF.size;
    }
  
    remove(t){
      for (let item of this.collezioneF){
        if (item.titolo == t){
          this.collezioneF.delete(item);
          break;
        }
      }
      return this.collezioneF.size;
    }
  
    count(){
      return this.collezioneF.size;
    }
  
    vedi(t){
      for (let item of this.collezioneF){
        if (item.titolo == t){
          item.volteVisto++;
          return item.volteVisto;
        }
      }
      return -1;
    }
  
    visioni(){
      let tot = 0;
      for (let item of this.collezioneF){
        tot = tot + item.volteVisto;
      }
      return tot;
    }
  }
  
  
  
  // ESERCIZIO 3
  /*
  Si scriva una funzione esisteCoppia(a, k), con a un array di interi e k un intero. La funzione restituisce true se esistono due indici i e j tali che a[i] + a[j] = k, false altrimenti.
  
  Esempi:
  esisteCoppia([-1,22,-98,0,101,22,7], 0) -> false
  esisteCoppia([-1,22,-98,0,101,22,7], 44) -> true
  esisteCoppia([-1,22,-98,0,101,22,7], -98) -> true
  */
  
  function esisteCoppia(a:number[], k:number) {
    for (let i = 0; i < a.length; i++){
      for (let j = i+1; j < a.length; j++){
        if (a[i] + a[j] == k)
          return true;
      }
    }
    return false;
  }
  
  
  // ESERCIZIO 4
  /*
  Si scriva una funzione cercaCoppie(a, k), con a un array di interi e k un intero. La funzione restituisce ordinatamente (in senso crescente) tutte le coppie distinte (idx1,idx2) tali che a[idx1] + a[idx2] = k (si faccia riferimento agli esempi). Se non esiste nessuna coppia che soddisfa la relazione, si restituisca null.
  
  Una coppia (idx1, idx2) < (idx1', idx2') se (idx1 < idx1') OR (idx1 == idx1' AND idx2 < idx2'). 
  
  Esempi:
  cercaCoppie([-1,22,-98,0,101,22,7], 0) -> null
  cercaCoppie([-1,22,-98,0,101,22,7], 44) -> [{idx1: 1, idx2: 5}]]
  cercaCoppie([-1,22,-98,0,-54,22,7], -32) -> [{idx1: 1, idx2: 4}, {idx1: 4, idx2: 5]
  cercaCoppie([-1,0,2,3,4,7,8,23], 7) -> [{idx1: 0, idx2: 6}, {idx1: 1, idx2: 5}, {idx1: 3, idx2: 4}]
  */
  
  function cercaCoppie(a:number[], k:number) {
    let res:any[] = [];
    for (let i = 0; i < a.length; i++){
      for (let j = i+1; j < a.length; j++){
        if (a[i] + a[j] == k)
          res.push({idx1: i, idx2: j});
      }
    }
    if (res.length == 0)
      return null;
    return res;
  }
  
  // ESERCIZIO 5
  /*
  Il TRIANGOLO di TARTAGLIA è un triangolo ideato dal matematico bresciano Nicolò Fontana chiamato, per l'appunto Tartaglia. Il nome "triangolo", invece, viene dalla disposizione dei numeri che assumono la forma di un triangolo. 
  
  Ecco un esempio delle prime 5 righe del triangolo di tartaglia:
  
  1
  1 1
  1 2 1
  1 3 3 1
  1 4 6 4 1
  
  Dopo aver compreso come costruire la riga i-esima del triangolo di tartaglia, scrivere una funzione TT(i), con i un intero >=0. La funzione restituisce la riga i-esima del triangolo di tartaglia, con tutti i suoi valori inseriti in un array.
  
  Esempi:
  TT(1) = [1,1]
  TT(3) = [1,3,3,1]​	
  TT(4) = [1,4,6,4,1]
  */
  
  function TT(i:number):number[] {
    if (i==0)
      return [1];
    
    let res:number[] = [];
    let prev:number[] = TT(i-1);
    res.push(1);
    for (let j = 1; j<prev.length; j++){
      res.push(prev[j-1] + prev[j]);
    }
    res.push(1);
    return res;
  }
  
  //ESERCIZIO 6
  /*
  Si scriva una funzione isSymmetric(m), con m una matrice quadrata (rappresentata come array di array). La funzione verifica se m è simmetrica, restituendo true se simmetrica e false altrimenti. Una matrice è simmetrica rispetto alla prima diagonale se gli elementi della colonna c e riga r sono uguali a quelli delle colonna r e riga c, per tutti gli r e c.
  
  Se la matrice in input non è quadrata, la funzione deve lanciare un eccezione di tipo MatrixError. La classe MatrixError va definita in modo apropriato. 
  
  Esempi:
  isSymmetric([[0,1],[1,0]]) -> true
  isSymmetric([[1,2,3],[2,3,1],[3,1,2]]) ->true
  isSymmetric([[1,2,3],[2,3,2],[3,1,2]]) ->false
  isSymmetric([[1]]) ->true
  isSymmetric([[1,2],[2,1],[2,2]]) -> lancia MatrixError
  */
  
  class MatrixError extends Error{}
  
  function isSymmetric(m){
    var r = m.length;
    if (m[0].length!=r)
        throw new MatrixError("Matrix Error");
    for (let i=0;i<r;i++){
      for (let j=i+1;j<m[i].length;j++)
        if (m[i][j]!=m[j][i])
          return false;
    }
    return true;
  }
  
  
  
  module.exports = { isSymmetric, MatrixError, Equazione2, esisteCoppia, cercaCoppie, TT, CollezioneFilm};
  
  /*
  Per eseguire i test di prova:
  1. Selezionare "Shell" nel riquadro a dx (di fianco al tab "Console")
  2. Digitare npm run test e premere invio
  3. NON MODIFICARE IL CONTENUTO DI test.js
  */