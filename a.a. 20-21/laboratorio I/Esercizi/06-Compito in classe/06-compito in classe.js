/*
Progetto da usare per completare i vostri esercizi in JS. Quando avete terminato, sottomettete anche questo progetto.
*/

/* Esercizio 1
Si scriva una funzione JS isAntisymmetric(m), con m una matrice quadrata (rappresentata come array di array). La funzione verifica se m è antisimmetrica, restituendo true se antisimmetrica e false altrimenti. Una matrice è antisimmetrica rispetto alla prima diagonale se gli elementi della diagonale sono tutti 0 e gli elementi della colonna c e riga r sono opposti in segno a quelli delle colonna r e riga c, per tutti gli indici r e c (con r diverso da c).

Se la matrice in input non è quadrata, la funzione deve lanciare un eccezione di tipo MatrixError. La classe MatrixError va definita in modo apropriato. 

ESEMPI:
isAntisymmetric([[0,2,-1],
                 [-2,0,-4],
                 [1,4,0]]) -> true
isAntisymmetric([[1,2,-1],
                 [-2,0,-4],
                 [1,4,0]]) ->false
isAntisymmetric([[1]]) ->false
isAntisymmetric([[0]]) ->true
isAntisymmetric([[0,2,-1],
                 [-2,0,-4],
                 [1,0]]) -> lancia MatrixError  */
class MatrixError extends Error { }

function isAntisymmetric(m) {
  let sim=false;
  if (m[0].length != m.length) throw new MatrixError("Matrix Error");

  for (var r = 0; r < m.length; r++) {
    for (var c = 0; c < m[r].length; c++) {
      if(m[0][0] != 0) return false;
      if(m[r][c] + m[c][r] == 0) sim=true;
    }
  }
  if(sim) return true
}

/* Esercizio 2
Siano a un array di numeri, ordinato in senso crescente, e k un numero. Si scriva una funzione JS cerca(a, k, i, j), che, con un numero OTTIMO di operazioni di accesso ad a, restituisca true se k occorre nell'array a  in una posizione compresa tra gli indici i e j, con 0<=i false
cerca([-21,22,23,45,67], -21, 0, 4) -> true
cerca([], -21, 0, 4) -> false */

function cerca(a, k, i, j) {
  pos = false;
  sin=0; des=a.length-1;
  while (sin<=des && !pos) {
    cen = Math.floor((sin+des)/2);
    if (k==a[cen]) pos=true;
    else if (k<a[cen]) des=cen-1;
    else sin=cen+1;
  }
  return pos;
}

/* Esercizio 3
Sia a un array di numeri interi distinti, ordinato in senso crescente. Si scriva una funzione JS cercaId(a), che, con un numero OTTIMO di operazioni di accesso ad a, restituisce l'indice i tale che a[i]==i, se esiste, e -1 altrimenti. Si assuma che, se tale indice esiste, allora e' l'unico a verificare la condizione. 

ESEMPI:
cercaId([-1,0,1,2,4]) -> 4
cercaId([-21,22,23,45,67]) -> -1
cercaId([0,2,3,4,5]) -> 0 */

function cercaId(a){
  let index=-1;
  let i=0;
  let j=a.length;

  while(i<=j && index==-1){
    cen = Math.floor((i+j)/2);
    if(a[cen]==i) index=i;
    else if(i<a[cen]) j=cen-1;
    else i=cen+1;
  }
  return index;
}

/*Esercizio 6
Si deve scrivere una classe TicTacToe che simuli il classico gioco del "tris":

Da WIKIPEDIA:
<< Il gioco si svolge su una tabella di dimensione 3x3, ed e' giocato da due giocatori. A turno, i giocatori scelgono una cella vuota e vi disegnano il proprio simbolo (di solito un giocatore ha come simbolo una "X" e l'avversario un cerchio "O" ). Vince il giocatore che riesce a disporre tre dei propri simboli in linea retta orizzontale, verticale o diagonale. Se la griglia viene riempita senza che nessuno dei giocatori sia riuscito a completare una linea retta (orizzontale, verticale o diagonale) di tre simboli, il gioco finisce in parità.>>

In particolare:

1. Decidete liberamente quale struttura dati utilizzare per implementare la 9 caselle del gioco. La mossa "crocetta" e' rappresentata con "X" (lettera X maiuscola) e la mossa "cerchio" con "O" (lettera O maiuscola).

La classe, oltre al costruttore, deve fornire il seguente metodo:

1. move(i,j), che esegue una mossa sulla tabella, con 0<=i,j<=2, in posizione (i,j). Se l'ultima mossa giocata e' stata una crocetta, allora verra' inserito un cerchio in posizione (i,j); altrimenti una crocetta. La prima mossa di una partita e' sempre una crocetta, ed e' sempre una mossa valida (si vedano i casi descritti in seguito).

Si considerino inoltre i seguenti casi: 

a. Se non e' possibile effettuare una mossa in posizione (i,j) perche' la cella e' gia' occupata, o perche' gli indici non sono corretti, allora viene restituito un oggetto avente due proprieta': res, il cui valore e' la stringa "no", e last che contiene la stringa che rappresenta la mossa che si e' appena tentato di giocare.

b. Se la mossa e' legale, allora viene giocata.

Se la mossa porta a vincere una partita (c'e' un tris), viene restituito un oggetto avente due proprieta': res, il cui valore e' la stringa "tris", e last che contiene la stringa che rappresenta la mossa che si e' appena giocata.  

Se invece la mossa porta a riempire la tabella (senza "tris"), viene restituito un oggetto avente due proprieta': res, il cui valore e' la stringa "patta", e last che contiene la stringa che rappresenta la mossa che si e' appena giocata.

2. reset() che resetta il contenuto della tabella, e quindi inzia una nuova partita; il metodo restituisce sempre true.

Suggerimento: tenete opportunamente traccia dello "stato" del gioco, dove lo stato e' semplicemente l'ultima mossa che e' stata giocata o che si e' provato a giocare (crocetta o cerchio). Lo stato puo' quindi assumere valori "X" oppure "O" (la lettera O maiuscola). 


ESEMPI:
Sia t un oggetto della classe TicTacToe.

t.move(0,0) -> {res: "ok", last:"X"}
t.move(2,2) -> {res: "ok", last:"O"}
t.move(0,0) -> {res: "no", last:"X"}
t.move(0,0) -> {res: "no", last:"X"}
t.move(2,2) -> {res: "no", last:"X"}
t.move(1,1) -> {res: "ok", last:"X"}
t.move(0,2) -> {res: "ok", last:"O"}
t.move(1,0) -> {res: "ok", last:"X"}
t.move(1,2) -> {res: "tris", last:"O"}
t.reset() -> true; */

class TicTacToe {
  constructor() {
    this.tabella = [[], [], [],
    [], [], [],
    [], [], []];
    this.mossa = null;
  }

  move(i, j) {
    if(this.tabella[i][j] == null){
      if (this.mossa == null || this.mossa == "O"){
        this.tabella[i][j].push("X")
      }
      else this.tabella[i][j].push("O")
      return {res: "ok", last: this.tabella[i],[j]}
    }

  }
}

//Variante continuata dopo il test

class TicTacToe {
  constructor() {
    this.tabella = [[], [], [],
                    [], [], [],
                    [], [], []];
    this.lastmossa = null;
  }

  move(i, j) {
    let mossa={};
    if(this.lastmossa == null || this.lastmossa == "O"){
      if(this.tabella[i][j] == []){
      this.tabella[i][j].push("X")
      this.lastmossa="X";
      mossa={res: "ok", last: this.lastmossa}
      }
      else mossa={res:"no", last: this.lastmossa}
    }
    if(this.lastmossa == "X"){
      if(this.tabella[i][j] == []){
        this.tabella[i][j].push("O")
        this.lastmossa="O";
        mossa={res: "ok", last: this.lastmossa}
      }
      else mossa={res:"no", last: this.lastmossa}
    }
    return mossa;
  }
}