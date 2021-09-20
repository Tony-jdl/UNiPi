/*Progettino in TS
NOTA: in allegato trovate dei file di test: non li cancellate, e fatene una copia di backup prima di eseguire il vostro codice, in modo tale da poter confrontare l'output dei vs file con quelli forniti negli esempi.

Non viene fornito alcun ambiente di test. In fondo sono riportati alcuni casi di test (sui file in allegato).
*/

/*
Si deve progettare una classe TS, chiamata FileTransformer, che opera su file di testo: la classe deve leggere il contenuto di un file di testo fornito in input, e offrire le funzionalità di analisi, codifica e decodifica dettagliate di seguito. Tutti i file contengono caratteri UTF-8.

NOTA: se il file non esiste, tutti i metodi richiesti devono restituire -1.
SUGGERIMENTO: si consiglia di utilizzare espressioni regolari (si faccia riferimento anche ai lucidi mostrati a lezione, e in generale alle RegExp)

In particolare, la classe deve offrire i seguenti metodi:

1. Il costruttore, che prende come argomento il nome di un file di testo (si assuma che il file, se esiste, si trovi nella stessa cartella in cui è questo programma TS)

2. contaParole(), che restituisce il numero di parole presenti nel file; una parola è sempre non-vuota (in altre parole, fra due separatori validi non c'è una parola vuota di mezzo -- e quindi non va contata). Si considerino quali caratteri separatori di parole: 
  a. qualsiasi "whitespace" (incluso lo \n e \r)
  b. i seguenti segni di interpunzione ! ? , . ; : " '

  Esempi: 
    In <<Tant'è amara>> le parole sono <<Tant>>, <<è>>, <<amara>>
    In <<com'i' v'intrai, tant'era>> le parole sono <<com>>, <<i>>, <<v>>, <<intrai>>, <<tant>>, <<era>>

3. contaSpazi(), che restituisce il numero di "whitespace" presenti nel file, senza considerare \n e \r

4. contaRighe(), che restituisce il numero di righe presenti nel file (contando anche le righe vuote)

5. occorrenze(s), dove s è una stringa. Il metodo deve restituire il numero di occorrenze della stringa s nel file. SUGGERIMENTO: si utilizzino opportune strutture dati a supporto, per EVITARE assolutamente di scandire il contenuto del file ad ogni invocazione del metodo

6. cifra(n), dove n è un intero positivo. Il metodo deve creare un nuovo file, avente come nome nomeFile + "-" + n + ".cy" (dove + indica la concatenazione, e nomeFile il nome del file gestito da questa istanza). Il nuovo file deve contenere tutti i caratteri del file gestito da questa istanza "traslati" di n posizioni: in particolare, il carattere j-esimo, c_j, viene sostituito con il carattere che si trova n posizioni dopo c_j nella codifica UTF-8, modulo 1024.
Il metodo deve restituire il numero di caratteri scritti.

Ad esempio, se n = 256, il nome del file gestito da questa istanza è "test.ck", e il testo contenuto nel file è

"sto cifrando 

questo Bel testo con una è"

il file cifrato da creare si chiamerà "test.ck-256.cy", e il suo contenuto sarà:

ųŴůĠţũŦŲšŮŤůĊĊűŵťųŴůĠłťŬĠŴťųŴůĠţůŮĠŵŮšĠǨ

7. decifra(f), dove f è il nome di un file cifrato con le regole indicate al punto precedente (e quindi avente suffisso ".cy"), ed n un intero positivo (si assuma che f esista, che il suo nome rispetti le regole indicate al punto precedente, e che f si trovi nella stessa cartella in cui è questo programma TS). Il metodo deve creare un nuovo file, avente come nome f + ".decy" (dove + indica la concatenazione), contenente la versione decifrata di f.cy, usando come chiave il valore numerico presente nel nome del file e compreso tra "-" e ".cy". In particolare, ogni carattere viene c_j, viene sotituito con il carattere che si trova n posizioni prima di c_j nella codifica UTF-8, modulo 1024.
Il metodo deve restituire il numero di caratteri scritti.

Ad esempio, se il file da decifrare si chiama "test.ck-256.cy" e contiene

ųŴůĠţũŦŲšŮŤůĊĊűŵťųŴůĠłťŬĠŴťųŴůĠţůŮĠŵŮšĠǨ

il file decifrato da creare si chiamerà "test.ck-256.cy.decy", e il suo contenuto sarà:

"sto cifrando 

questo Bel testo con una è"

8. comprimi(), che deve creare un nuovo file, avente come nome nomeFile + ".comp" (dove + indica la concatenazione, e nomeFile il nome del file gestito da questo oggetto), e contenente una forma compressa di nomeFile, implementata come segue: ogni sequenza di caratteri consecutivi uguali nel file viene sostituita dalla lunghezza della sequenza seguita dal carattere.

Si assuma che nel contenuto del file da comprimere (quindi il contenuto di nomeFile) non siano presenti cifre.

Ad esempio, se il nome di questo file è "test.ck", e il testo contenuto nel file è

"WWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWB"

il file compresso da creare si chiamerà "test.ck.comp", e il suo contenuto sarà:

"10WB12W3B20WB"

9. decomprimi(f) dove f è il nome di un file compresso con le regole indicate al punto precedente, e quindi avente suffisso ".comp" (si assuma che il file di nome f esista, e che il suo nome e il suo contenuto rispettino le regole indicate al punto precedente). Il metodo deve creare un nuovo file, avente come nome f + ".decomp" (dove + indica la concatenazione), contenente la versione decompressa di f.cy (si veda il file di esempio allegato).
Il metodo deve restituire il numero di caratteri scritti.
*/




/* 
ESEMPI (dopo ogni // viene riportato il valore restituito dall'invocazione del metodo)

sia ft un oggetto FileTransformer sul file "cantoInf1.txt"

console.log(ft.contaParole()); //1004
console.log(ft.contaSpazi()); //924
console.log(ft.contaRighe()); //144
console.log(ft.occorrenze("fui")); //4
console.log(ft.occorrenze("sono")); //0
console.log(ft.cifra(5)); //5149
console.log(ft.decifra("cantoInf1.txt-5.cy")); //5149
console.log(ft.cifra(256)); //5149
console.log(ft.decifra("cantoInf1.txt-256.cy")); //5149

sia ft un oggetto FileTransformer sul file "testC.txt";

console.log(ft.contaParole()); //2
console.log(ft.contaSpazi()); //10
console.log(ft.contaRighe()); //9
console.log(ft.comprimi()); //37
console.log(ft.decomprimi("testC.txt.comp")); //75
*/

const fs:any=require('fs');

class FileTransformer{
  nomefile:string;  
  constructor(nomefile){
        this.nomefile=nomefile;
    }

    contaParole():number{
      console.log(this.nomefile.spplice(/[\n\s?!"'.,;: ]+/)
      return this.nomefile.splice(/[\n\s!?,.;:"' ]+/)
    }
}

/* ------------------------------------------------------------ */

const fs:any=require('fs')

class FileTransformer{
    nomefile:string;
    dizionario:object;

    constructor(nomefile:string){
      this.nomefile=nomefile;
      this.dizionario={};
    }

    contaparole():number{
      var s=fs.readFileSync(this.nomefile).toString();
      var parole:string[]=s.splice(/[\n\s!?'",.;: ]+/);
      if(s.charAt(s.length-1)=="\n" || s.charAt(s.length-1)=="\r" || s.charAt(s.length-1)==".")
        return s.length-1;
      return s.length;
    }

    contaSpazi():number{
      var c:number=0;
      var s=fs.readFileSync(this.nomefile).toString();
      var parole:string[]=s.splice(/[\n\s!?'",.;: ]+/);
      for(var i=0; i<parole.length; i++){
        if(s.charAt(i) == " ") c++;
      }
      return c;
    }

    contaRighe():number{
      var c:number=0;
      var s=fs.readFileSync(this.nomefile).toString();
      var parole:string[]=s.splice(/[\n\s!?'",.;: ]+/);
      for(var i=0; i<parole.length; i++){
        if(s.charAt(i) == "\n") c++;
      }
      return c;
    }

    occorrenze(s):number{
      var st=fs.readFileSync(this.nomefile).toString();
      var parole:string[]=s.splice(/[\n\s!?'",.;: ]+/);

      for(var i=0; i<parole.length; i++){
        if(parole[i] in this.dizionario) this.dizionario[i]++;
        this.dizionario={parole[i]: 1};
      }

      if(s in this.dizionario) return this.dizionario[s];
    }
}

/* ----------------------------------------------------------------------------------- */

class FileTransformer{
  nome:string;
  testo:string;
  dizionario:Object;

  constructor(nomeFile:string){
    this.nome=nomeFile;
    const fs:any=require('this.nome');
    this.testo=fs.readFileSync('fs').toString();
    this.dizionario={};
  }

  contaParole(){
    let parole:string[]=this.testo.split(/[\n\s!?,.;:"' ]+/);
    return parole.length;
  }

  contaSpazi(){
    let nSpazio:number=0;
    for(var i of this.testo){
      if(i.match(/ /)) nSpazio++;
    }
    return nSpazio;
  }

  contaRighe(){
    let rishe:string[]=this.nome.split(/\n/);
    return this.contaRighe.length;
  }

  occorrenze(s){
    if(s in this.dizionario) return this.dizionario.s
    let occ:number=0;
    for(var i=0; i < this.testo.length; i++){
      if(s == this.testo.[i]) occ++;
    }
    return occ;
  }
}