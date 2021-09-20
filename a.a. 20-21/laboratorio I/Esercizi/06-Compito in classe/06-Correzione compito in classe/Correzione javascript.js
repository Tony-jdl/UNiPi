/*
ESERCIZIO 1 JS
Siano a un array di numeri, ordinato in senso crescente, e k un numero. Si scriva una funzione JS cerca(a, k, i, j), che, con un numero OTTIMO di operazioni di accesso ad a, restituisca true se k occorre nell'array a in una posizione compresa tra gli indici i e j, con 0<=i<j<a.length (indici i e j inclusi), e false altrimenti. 

ESEMPI:
cerca([-21,22,23,45,67], 0, 0, 4) -> false
cerca([-21,22,23,45,67], -21, 0, 4) -> true
cerca([], -21, 0, 4) -> false
*/

function cerca(a, k, i, j) {
    if (i > j || i < 0 || j > a.length)
      return false;
    let mid = Math.floor((i + j) / 2);
    if (a[mid] == k)
      return true;
    if (a[mid] > k)
      return cerca(a, k, 0, mid - 1);
    else
      return cerca(a, k, mid + 1, j);
  }
  
  /*
  ESERCIZIO 2 JS
  Sia a un array di numeri interi distinti, ordinato in senso crescente. Si scriva una funzione JS cercaId(a), che, con un numero OTTIMO di operazioni di accesso ad a, restituisce l'indice i tale che a[i]==i, se esiste, e -1 altrimenti. Si assuma che, se tale indice esiste, allora e' l'unico a verificare la condizione. 
  
  ESEMPI:
  cercaId([-1,0,1,2,4]) -> 4
  cercaId([-21,22,23,45,67]) -> -1
  cercaId([0,2,3,4,5]) -> 0
  */
  
  function cercaId(a) {
    return cercaM(a, 0, a.length - 1);
  }
  
  function cercaM(a, i, j) {
    if (i > j)
      return -1;
    let mid = Math.floor((i + j) / 2);
    if (a[mid] == mid)
      return mid;
    if (a[mid] > mid)
      return cercaM(a, 0, mid - 1);
    else
      return cercaM(a, mid + 1, j);
  }
  
  /*
  ESERCIZIO 3 JS
  Si scriva una funzione JS isAntisymmetric(m), con m una matrice quadrata (rappresentata come array di array). La funzione verifica se m è antisimmetrica, restituendo true se antisimmetrica e false altrimenti. Una matrice è antisimmetrica rispetto alla prima diagonale se gli elementi della diagonale sono tutti 0 e gli elementi della colonna c e riga r sono opposti in segno a quelli delle colonna r e riga c, per tutti gli indici r e c (con r diverso da c).
  
  Se la matrice in input non è quadrata, la funzione deve lanciare un eccezione di tipo MatrixError. La classe MatrixError va definita in modo apropriato. 
  
  ESEMPI:
  isAntisymmetric([[0,2,-1],[-2,0,-4],[1,4,0]]) -> true
  isAntisymmetric([[1,2,-1],[-2,0,-4],[1,4,0]]) ->false
  isAntisymmetric([[1]]) ->false
  isAntisymmetric([[0]]) ->true
  isAntisymmetric([[0,2,-1],[-2,0,-4],[1,0]]) -> lancia MatrixError
  */
  
  class MatrixError extends Error { }
  
  function isAntisymmetric(m) {
    let r = m.length
    let res = true;
    for (let i = 0; i < r; i++) {
      if (m[i].length != r)
        throw new MatrixError("Matrix error")
      for (let j = i; j < m[i].length; j++)
        if (m[i][j] != -m[j][i])
          res = false;
    }
    return res;
  }
  
  /*
  ESERCIZIO 4 JS
  Il quadrato di un grafo orientato G = (V, E) e' il grafo G2 = (V, E2) tale che (x, y) ∈ E2 se e solo se ∃u : (x, u) ∈ E ∧ (u, y) ∈ E. In altre parole, se esiste un percorso di due archi fra i nodi x e y.
  Scrivere una funzione JS quadratoG(G) con G un grafo rappresentato mediante una matrice di adiacenza. La funzione restituisce la matrice di adiacenza del grafo G2.
  
  Nota: assumete che la matrice di adiacenza passata come argomento sia quadrata, e che rappresenti una matrice di adiacenza di un grafo orientato.
  
  ESEMPI:
  quadratoG([[0,1,0,0],[0,0,1,1],[1,0,0,0],[0,0,0,0]])->[ [ 0, 0, 1, 1 ], [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 0 ] ]
  
  quadratoG([[0,1,1,0],[0,0,0,0],[0,1,0,1],[0,0,1,0]])->[ [ 0, 1, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 1, 0, 1 ] ]
  */
  
  function quadratoG(G) {
    let v = G.length;
  
    let qG = [];
    for (let i = 0; i < v; i++) {
      qG[i] = [];
      for (let j = 0; j < v; j++) {
        let k = 0;
        let trovato = false;
        while (!trovato && k < v) {
          trovato = (G[i][k] == 1 ? true : false) && (G[k][j] == 1 ? true : false) && k != i && k != j;
          k++;
        }
        qG[i][j] = trovato ? 1 : 0;
      }
    }
    return qG;
  }
  
  /*
  ESERCIZIO 5 JS
  Scrivere una funzione JS floyd(i), dove i e' un numero naturale (>=0). Il
  triangolo di Floyd è un triangolo rettangolo che contiene numeri naturali, definito riempiendo le righe del triangolo con numeri consecutivi e partendo da 1 nell’angolo in alto a sinistra.
  Ecco, come esempio, le prime righe del triangolo di Floyd:
  1
  2 3
  4 5 6
  7 8 9 10
  11 12 13 14 15
  
  La funzione floyd(i) restituisce la riga i-esima del triangolo di Floyd, memorizzata in un array (le righe del triangolo si contano a partire da 0).
  
  ESEMPI:
  floyd(0) -> [1]
  floyd(4) -> [11,12,13,14,15]
  */
  
  function floyd(i) {
    if (i == 0)
      return [1];
    let prec = floyd(i - 1);
    let res = [];
    for (let k = 0; k <= i; k++)
      res.push(prec[prec.length - 1] + k + 1);
  
    return res;
  }
  
  /*
  ESERCIZIO 6 JS
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
  t.reset() -> true;
  */
  
  class TicTacToe {
    A = [];
    state = "";
  
    constructor() {
      this.A = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
      this.state = "O";
    }
  
    checkTris() {
      for (let i = 0; i < 3; i++)
        if (this.A[i][0] != "-" && this.A[i][0] == this.A[i][1] && this.A[i][1] == this.A[i][2])
          return true;
  
      for (let j = 0; j < 3; j++)
        if (this.A[0][j] != "-" && this.A[0][j] == this.A[1][j] && this.A[1][j] == this.A[2][j])
          return true;
  
      if (this.A[0][0] != "-" && this.A[0][0] == this.A[1][1] && this.A[1][1] == this.A[2][2])
        return true;
  
      if (this.A[0][2] != "-" && this.A[0][2] == this.A[1][1] && this.A[1][1] == this.A[2][0])
        return true;
  
      return false;
    }
  
    checkCompleto() {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.A[i][j] == "-")
            return false;
        }
      }
  
      return true;
    }
  
    move(i, j) {
      if (i < 0 || i > 2 || j < 0 || j > 2 || this.A[i][j] != "-") {
        if (this.state == "O")
          return { res: "no", last: "X" };
        else
          return { res: "no", last: "O" };
      }
  
      if (this.state == "X") {
        this.A[i][j] = "O";
        this.state = "O";
      } else {
        this.A[i][j] = "X";
        this.state = "X";
      }
  
      this.print();
  
      if (this.checkTris())
        return { res: "tris", last: this.state };
  
      if (this.checkCompleto())
        return { res: "patta", last: this.state };
  
      return { res: "ok", last: this.state };
    }
  
    reset() {
      this.A = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
      this.state = "O";
      return true;
    }
  
    print() {
      for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
          console.log(i,j,this.A[i][j])
        }
      }
    }
  }
  
  module.exports = { cerca, cercaId, floyd, quadratoG, isAntisymmetric, MatrixError, TicTacToe };
  
  /*
  Per eseguire i test di prova:
  1. Selezionare "Shell" nel riquadro a dx (di fianco al tab "Console")
  2. Digitare npm run test e premere invio
  3. NON MODIFICARE IL CONTENUTO DI test.js
  */
  