/*
ESERCIZIO 7 TS
Si scriva in TypeScript una classe AnyMatrix che rappresenta una matrice rettangolare rxc (rappresentata come array di array) che contiene elementi omogenei, di qualsiasi tipo (stringhe, numeri, oggetti, ecc.). La classe deve offrire:

1. Costruttore (che costruisce una matrice avente almeno dimensione 1x1), che prende anche un valore v con cui inizializzare il contenuto della matrice. 

2. Metodo setAll(dati: T[][]): boolean che, preso un array di array di dimensione pxq, usa i valori contenuti nel parametro dati come valori da assegnare a questa matrice. Se le dimensioni di dati e di questa matrice non coincidono, il metodo restituisce false; altrimenti, true.

3. Metodo transpose() che restituisce una nuova AnyMatrix, trasposta di questa matrice. 

NOTA: il metodo toString() vi e' gia' fornito. Non lo modificate. NOTA: nei test che faremo, useremo solo oggetti per cui esiste una rappresentazione sensata come stringa.

Esempi:
Sia m una AnyMatrix di stringhe (inizializzata con il carattere che vi pare). 

m.setAll([["p", "i", "p"],["qui", "quo", "qua"],["super", "qui", "va"],["qua", "va", "qua"]]) -> true

m.toString() -> 4x3:
|p,i,p|
|qui,quo,qua|
|super,qui,va|
|qua,va,qua|

m.transpose().toString() -> 
3x4:
|p,qui,super,qua|
|i,quo,qui,va|
|p,qua,va,qua|

m.setAll([["p", "i"],["qui", "quo"],["super", "qui"],["qua", "va"]]) -> false
*/

class AnyMatrix<T>{
    A: T[][];
    r: number;
    c: number;
    id: T;
  
    constructor(r: number = 1, c: number = 1, v: T) {
      this.A = [];
      this.r = r;
      this.c = c;
      this.id = v;
      for (let i: number = 0; i < r; i++) {
        this.A[i] = [];
        for (let j: number = 0; j < c; j++) {
          this.A[i][j] = v;
        }
      }
    }
  
    setAll(dati: T[][]): boolean {
      if (this.r != dati.length || this.c != dati[0].length)
        return false;
      for (let i = 0; i < this.r; i++)
        for (let j = 0; j < this.c; j++)
          this.A[i][j] = dati[i][j];
      return true;
    }
  
    transpose(): AnyMatrix<T> {
      let B: AnyMatrix<T> = new AnyMatrix<T>(this.c, this.r, this.id);
      for (let i: number = 0; i < B.r; i++) {
        for (let j: number = 0; j < B.c; j++) {
          B.A[i][j] = this.A[j][i];
        }
      }
      return B;
    }
  
    toString(): string {
      return `${this.r}x${this.c}:\n|${this.A.join("|\n|")}|`
    }
  }
  
  
  /*
  ESERCIZIO 8 TS
  Si scriva in TypeScript una classe Pila che rappresenti, prevedibilmente, una pila. La pila deve poter gestire elementi omogenei, di qualsiasi tipo (stringhe, numeri, oggetti, ecc.). Potete implementare la pila con la struttura dati che preferite. Oltre a un costruttore, dovranno essere implementati i seguenti metodi:
  
  1. p.push(el) - inserisce in cima alla pila p l'elemetno el, e restituisce il numero di elementi presenti nella pila dopo l'inserimento
  2. p.pop() - estrae l'elemento in cima alla pila, e lo restituisce. Se la pila e' vuota, restituisce null
  3. p.top() - restituisce, senza rimuoverlo, l'elemento in cima alla pila. Se la pila e' vuota, restituisce null
  7. p.size() - restituisce il numero di elementi presenti nella pila p
  8. p. reset() - elimina tutti gli elementi dalla pila p,  e restituisce 0
  9. p.merge(p1) - sia p1 una pila non vuota, e dello stesso tipo di p. Il metodo inserisce tutti gli elementi in p1 (a partire da quello in cime) in cima a p, e restituisce il numero degli elementi complessivi di p dopo l'operazione di merge
  10. p.print() - restituisce una stringa contenente la rappresentazione in stringa  degli elementi in p (tutti gli elementi della coda sulla stessa riga, separati da virgola, senza spazi), a partire da quello in cima. NOTA: nei test che faremo, useremo solo oggetti per cui esiste una rappresentazione sensata come stringa.
  
  ESEMPI:
  Sia p una nuova Pila di stringhe
  p.pop() -> null
  p.push("ciao") -> 1
  p.push("come") -> 2
  p.push("va") -> 3
  p.push("oggi") -> 4
  p.print() -> "oggi,va,come,ciao"
  p.size() -> 4
  p.top() -> "oggi"
  p.print() -> "oggi,va,come,ciao"
  Sia p1 una nuova Pila di stringhe
  p1.push("oggi") -> 1
  p1.push("bene") -> 2
  p1.print() -> "bene,oggi"
  p.merge(p1) -> 6
  p.print() -> "oggi,bene,oggi,va,come,ciao"
  */
  
  class Pila<T> {
    data: T[];
  
    constructor() {
      this.data = [];
    }
  
    pop(): T | null {
      if (this.data.length == 0)
        return null;
      else return this.data.pop()!;
    }
  
    push(el: T): number {
      this.data.push(el);
      return this.data.length;
    }
  
    top(): T | null {
      if (this.data.length == 0)
        return null;
      else return this.data[this.data.length - 1];
    }
  
    size(): number {
      return this.data.length;
    }
  
    reset() {
      this.data.length = 0;
    }
  
    merge(p1: Pila<T>): number {
      while (p1.size() > 0) {
        this.push(p1.pop()!);
      }
      return this.data.length;
    }
  
    print(): string {
      let res: string = "";
      for (let i: number = this.data.length - 1; i >= 0; i--) {
        res = res + this.data[i];
        if (i > 0)
          res = res + ","
      }
      return res;
    }
  }
  
  /*let p = new Pila<string>();
  console.log(p.pop());
  console.log(p.push("ciao"));
  console.log(p.push("come"));
  console.log(p.push("va"));
  console.log(p.push("oggi"));
  console.log(p.print());
  console.log(p.size());
  console.log(p.top());
  console.log(p.print());
  let p1 = new Pila<string>();
  console.log(p1.push("oggi"));
  console.log(p1.push("bene"));
  console.log(p1.print());
  console.log(p.merge(p1));
  console.log(p.print());*/
  
  module.exports = { AnyMatrix, Pila };
  
  /*
  Per eseguire i test di prova:
  1. Selezionare "Shell" nel riquadro a dx (di fianco al tab "Console")
  2. Digitare npm run test e premere invio
  3. NON MODIFICARE IL CONTENUTO DI test.js
  */