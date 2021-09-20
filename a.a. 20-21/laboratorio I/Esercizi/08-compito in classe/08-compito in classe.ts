
// ESERCIZIO Shape
interface Shape{
    x:number;
    y:number;
    area():number; 
    getName(): string;
    translate(x:number, y:number): void;
  }
  
  /* Esercizio 1
  /* 
  Data l'interfaccia Shape definita qui sotto, si realizzino due classi Square e Circle che l'implementano. L'intepretazione dei campi e metodi di Shape è la seguente:
  - x,y : posizione della forma nello spazio 2D (x ascissa e y ordinata); l'interpretazione della posizione varia per Circle (dove rappresenta il centro del cerchio) e per Square (dove rappresenta il vertice in alto a sinistra del quadrato)
  - area() : restituisce l'area della forma
  - getName() : restituisce una stringa con il nome della forma, equivalente al nome della classe (Circle e Square, con prima lettera maiuscola)
  - translate(a,b) : sposta la posizione della forma nelle nuove coordinate x=a e y=b; il metodo non restituisce nulla.
  
  Le due classi Circle e Square aggiungono ai campi dell'interfaccia Shape un attributo che rappresenta, rispettivamente, il raggio (per Circle) e il lato (per Square). I costruttori delle 2 classi prendono come parametri (in ordine) quelli per inizializzare la posizione (x,y) e il terzo parametro dipendente dal tipo di classe (raggio o lato). I valori usati per inizializzare raggio e lato devono essere strettamente maggiori di zero; il costruttore deve controllare che la condizione non venga violata. Se così fosse vengono fissati ad un valore di default pari a 1.
  
  Esempi
  let c1 = new Circle(0,0,2) // -> Circle { x: 0, y: 0, r: 2 }
  c1.area() // -> 12.566370614359172
  c1.translate(1,-0.5) //-> Circle { x: 1, y: -0.5, r: 2 }
  c1.getName() //-> 'Circle'
  
  let c2 = new Circle(10,1,0.5) // -> Circle { x: 100, y: -100, r: 0.5 }
  c2.area() // -> 0.7853981633974483
  c2.translate(100,-100) //-> Circle { x: 100, y: -100, r: 0.5 }
  
  let q1 = new Square(1,0,10) // -> Square { x: 1, y: 0, l: 10 }}
  q1.area() // -> 100
  q1.translate(-4.8,-3.5) //-> Square { x: -4.8, y: -3.5, l: 10 }
  q1.getName() //-> 'Square'
  
  let q2 = new Square(0,0,0) // -> Square { x: 0, y: 0, l: 1 }
  q2.area() // -> 1
  q2.translate(1,1) //-> Square { x: 1, y: 1, l: 1 }
  */
  
  
  interface Shape{
    x:number;
    y:number;
    area():number; 
    getName(): string;
    translate(x:number, y:number): void;
  }  
  
  class Square implements Shape{
      x:number;
      y:number;
      l:number;
      area():number; 
      getName(): string;
      translate(x:number, y:number): void;
      constructor(x:number,y:number,l:number){
          this.x=x;
          this.y=y;
          this.l=l;
          if(this.l <= 0) this.l=1;
      }
  
      area():number{
          return this.l * this.l;
      }
  
      getName():string{
          var name:string="Square"
          return name;
      }
  
      traslate(val1:number,val2:number):void{
          this.x=val1;
          this.y=val2;
      }
  }
  
  class Circle implements Shape{
      x:number;
      y:number;
      area():number; 
      getName(): string;
      translate(x:number, y:number): void; 
  
      constructor(x:number,y:number,r:number){
          this.x=x;
          this.y=y;
          this.r=r;
          if(this.r <= 0) this.r=1;
      }
      
      area():number{
          var area=(this.r**2)*3.14;
          return area;
      }
  
      getName():string{
          var name:string="Cirlce"
          return name;
      }
  
      traslate(val1:number,val2:number):void{
          this.x=val1;
          this.y=val2;
      }
  }
  
  /* Esercizio 2 */
  /* 
  Scrivere una funzione generica "sommaArray(a, somma)" in TS (usando Generics). La funzione prende in input un array omogeneo "a" che potrebbe contenere elementi di qualsiasi tipo e una funzione "somma(x,y)", che prende come parametri due elementi dello stesso tipo e restitusce la loro somma. Assumere che la funzione "somma" definisce l'operazione somma in modo opportuno per il tipo corrente (per esempio può essere + per numeri, concatenazione per stringhe, concatenazione per array, + per matrici, etc.) La funzione "sommaArray" applica la funzione "somma" su tutti gli elementi dell'array "a", a partire dai primi 2. Specificamente, prima fa la somma tra i primi 2, poi somma il risultato con il terzo, poi il risultato con il quarto, e così via.
  
  Definite con attenzione tutti i tipi delle variabili utilizzate.
  
  Non dovete implementare la funzione somma, viene passata come parametro nei test.
  
  Esempi:
  function sumNumbers (x:number,y:number):number{return x+y}
  sommaArray([3,6,4,2],sumNumbers) -> 15
  
  sommaArray([3,6,4,"34"],sumNumbers)
   -> error TS2322: Type 'string' is not assignable to type 'number'.
  
   function sumStrings (x:string,y:string):string{return x+" "+y;};
  sommaArray(["o","che","bel","castello"],sumStrings); -> 'o che bel castello'
  */
  
  function sommaArray<T>(a:T[],f:(a:T,b:T)=>T){
      var sum:any;
      for(var i=0; i<a.length; i++){
          sum=f(a[i],a[i+1])+sum;
      }
      return sum;
  }
  
  
  /* Esercizio 3 */
  /* 
  Si scriva una funzione TS 'leggiStudenti(file)' che prende come parametro una stringa 'file' che rappresenta il nome di un file di testo e restituisce un array di studenti letti dal file. Uno studente è un oggetto della classe Studente con attributi "nome", "cognome", "citta", "votoLaurea" (i primi tre stringhe, l'ultimo numerico). Definire sia la funzione che la classe Studente (con le 4 proprietà e il costruttore). Si assuma che il file di testo sia organizzato come segue:
  1) Una riga per ogni Studente
  2) Ciascuna riga riporta l'informazione sui 4 attributi dell'oggetto Studente in ordine e separati da virgole.
  
  Esempi:
  
  leggiStudenti("studenti1.txt");
  avremo ->[ Studente {
      nome: 'Marco',
      cognome: 'Rossi',
      citta: 'Pisa',
      votoLaurea: '109' },
    Studente {
      nome: 'Anna',
      cognome: 'Bruno',
      citta: 'Firenze',
      votoLaurea: '110' },
    Studente {
      nome: 'Andrea',
      cognome: 'Rossi',
      citta: 'Pisa',
      votoLaurea: '109' },
    Studente {
      nome: 'Matteo',
      cognome: 'Bruno',
      citta: 'Firenze',
      votoLaurea: '108' } ]
  
  leggiStudenti("studenti2.txt");
  avremo -> [ Studente {
      nome: 'Marco',
      cognome: 'Rossi',
      citta: 'Pisa',
      votoLaurea: '109' },
    Studente {
      nome: 'Anna',
      cognome: 'Bruno',
      citta: 'Firenze',
      votoLaurea: '110' },
    Studente {
      nome: 'Andrea',
      cognome: 'Rossi',
      citta: 'Pisa',
      votoLaurea: '109' },
    Studente {
      nome: 'Matteo',
      cognome: 'Bruno',
      citta: 'Firenze',
      votoLaurea: '108' },
    Studente {
      nome: 'Marco',
      cognome: 'Rossi',
      citta: 'Pisa',
      votoLaurea: '109' },
    Studente {
      nome: 'Anna',
      cognome: 'Bruno',
      citta: 'Firenze',
      votoLaurea: '110' },
    Studente {
      nome: 'Andrea',
      cognome: 'Rossi',
      citta: 'Pisa',
      votoLaurea: '109' },
    Studente {
      nome: 'Matteo',
      cognome: 'Bruno',
      citta: 'Firenze',
      votoLaurea: '108' },
    Studente {
      nome: 'Marco',
      cognome: 'Rossi',
      citta: 'Pisa',
      votoLaurea: '109' },
    Studente {
      nome: 'Anna',
      cognome: 'Bruno',
      citta: 'Firenze',
      votoLaurea: '110' },
    Studente {
      nome: 'Andrea',
      cognome: 'Rossi',
      citta: 'Pisa',
      votoLaurea: '109' },
    Studente {
      nome: 'Matteo',
      cognome: 'Bruno',
      citta: 'Firenze',
      votoLaurea: '108' } ]
  */
  
  
  class Studente{
      nome:string;
      cognome:string;
      citta:string;
      votolaurea:number;
  
      constructor(nome:string,cognome:string,citta:string,votoLaurea:number){
          this.nome=nome;
          this.cognome=cognome;
          this.citta=citta;
          this.votolaurea=votoLaurea;
      }
  }
  
  function leggiStudenti(file:string){
      var studenti:object[]=[];
      var ft:any=require('fs');
      var testo:string=readFileSync(file).toString();
      for(var i=0; i<testo.length; i+4){
          var studente:Studente = new Studente()
      }
  
      return studenti;
  }
  
  /* Esercizio 4 */
  /* 
  Si definisca in TS una classe Libro contenente i seguenti campi: "titolo", "isbn", "autore" e "disponibilità". Si definiscano adeguatamente i tipi per i campi (stringa per titolo, isbn e autore; numerico per la disponibilità). Nel costruttore si consideri il parametro di inizializzazione della disponibilità come opzionale (se non viene fornito si setti a 0). Si implementino i seguenti metodi per la classe: 
  
  - sell() la cui invocazione decrementa la disponibilità del libro di una quantità pari al numero di copie "ncopie" passato come parametro della funzione. Se la disponibilità residua è inferiore alla richiesta "ncopie" si lanci un'eccezione di tipo EccezioneDisponibilità (da definire). Se il metodo viene invocato senza specificare parametri, si decrementi la disponibilità di 1 unità.
  
  - stock() la cui invocazione incrementa la disponibilità del libro di una quantità pari al numero di copie "ncopie" passato come parametro della funzione.
  
  Esempi: 
  let l:Libro = new Libro("Il buio oltre la siepe","978-8807881558","Harper Lee");
   -> Libro {titolo: 'Il buio oltre la siepe',isbn: '978-8807881558',autore: 'Harper Lee', 'disponibilità': 0}
  l.stock(10); -> this.disponibilità==10;
  l.sell(11); -> errore EccezioneDisponibilità
  
  l = new Libro("Fondazione","978-8804729198","Isaac Asimov",100);
  -> Libro {titolo: 'Fondazione',isbn: '978-8804729198',autore: 'Isaac Asimov', 'disponibilità': 100}
  
  l.sell(90); //this.disponibilità==10
  l.stock(2000); //this.disponibilità==2010
  l.sell(2010); //this.disponibilità==0
  */
  
  class EccezioneDisponibilita extends Error{}
  
  class Libro{
      titolo:string;
      isbn:string;
      autore:string;
      disponibilita:number;
      constructor(titolo:string, isbn:string, autore:string, disponibilita:number=0){
          this.titolo=titolo;
          this.autore=autore;
          this.isbn=isbn;
          this.disponibilita=disponibilita;
      }
      sell(ncopie:number=1){
          if(ncopie > this.disponibilita) throw new EccezioneDisponibilita("da definire")
          this.disponibilita-=ncopie; 
      }
  
      stock(ncopie:number=1){
          this.disponibilita+=ncopie;
      }
  
  }
  
  /* Esercizio 5 */
  
  /* Implementare in TS una classe Graph che gestisce un grafo orientato con liste di adiacenza. I nodi sono enumerati da 0 a n-1 (quindi, il nodo i ha indice i), dove "n" è la dimensione del Grafo.  La classe contiene una proprietà "n" che è il numero di nodi, e una proprietà "edges" che memorizza un array di liste di adiacenza. Specificamente, "edges[i]" è un array contenente la lista di tutti i nodi "j" per cui l'arco (i,j) esiste, in ordine crescente. Considerare che un grafo può contenere anche gli archi (i,i).
  
  Il costruttore prende in input delle liste di adiacenza come array di array e inizializza le due proprietà dell'oggetto.
  
  La classe offre 2 metodi:
  
  -Il metodo "complement" genera un nuovo grafo con lo stesso numero di nodi, ma che contiene solo gli archi mancanti. Per esempio, se l'arco (i,j) compare in G, allora l'arco (i,j) nondeve comparire nel complemento. In modo simile, se l'arco (i,j) non esiste in G, deve essere incluso nel complemento. 
  
  - Il metodo "getSecondNeighbours" prende in input l'indice di un nodo e  restituisce un array di vicini di secondo livello, ordinato crescente. Un nodo j è vicino di secondo livello di i se esiste un nodo k per cui gli archi (i,k) e (k,j) esistono. 
  
  Definite adeguatamente i tipi delle due proprietà e dei metodi. */
  




  /* Esempio 1:
  let g:Graph=new Graph([[0,3],[1,2,3],[4],[],[0,1,2]]);
  avremo g -> Graph {
    n: 5,
    edges: [ [ 0, 3 ], [ 1, 2, 3 ], [ 4 ], [], [ 0, 1, 2 ] ] }
  
  g.complement() 
  avremo Graph {
    n: 5,
    edges:
     [ [ 1, 2, 4 ],
       [ 0, 4 ],
       [ 0, 1, 2, 3 ],
       [ 0, 1, 2, 3, 4 ],
       [ 3, 4 ] ] }
  
  g.getSecondNeighbours(0) //[ 0, 3 ]
  g.getSecondNeighbours(1) //[ 1, 2, 3, 4 ]
  g.getSecondNeighbours(2)// [ 0, 1, 2 ]
  g.getSecondNeighbours(3)//[]
  g.getSecondNeighbours(1) //[ 0, 1, 2, 3, 4 ]
  
  Esempio 2
  g=new Graph([[],[],[]]) /
  avremo Graph { n: 3, edges: [ [], [], [] ] }
  
  g.complement() 
  avremo Graph { n: 3, edges: [ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ] }
  g.getSecondNeighbours(2)//->[] */
  
  
  /* Esercizio 6 */
  /*
  Definire una classe TS generica (che usa Generics) chiamata GenericFileToArray, che gestisce un array di elementi di tipo T. La classe ha una sola proprietà "arr", che è l'array di oggetti da gestire.
  
  Il costruttore della classe prende in input un nome di un file "nomeFile:string" e una funzione "parse" di tipo "(s:string):T". La funzione "parse" restituisce un oggetto di tipo T (vedi esempi per varie possibili definizioni di questa funzione - la funzione "parse" non la dovete scrivere, ma viene passata come argomento al costruttore). Il costruttore legge il contenuto del file e chiama la funzione  "parse" su ogni riga del file (potete assumere il file non vuoto), costruendo l'array interno con i valori restituiti dalla funzione "parse". 
  
  La classe contiene anche due metodi: 
  - metodo "toString" restituisce la stringa contenente tutti gli elementi dell'array in formato JSON separati da '\n'
  - metodo "cerca" prende come parametro un oggetto 'o' di tipo T da cercare e una funzione "equals" di tipo "(a:T,b:T):boolean". Il metodo "cerca" restituisce l'indice "i" del primo elemento dell'array per cui la funzione equals(o, arr[i]) restituisce "true". Gli esempi mostrano vari casi di funzioni "equals".  
  
  Le funzioni "parse" e "equals" non devono essere implementate, vanno considerate input ai metodi. Per testare il codice potete considerare le funzioni negli esempi.
  
  //Esempio 1
  
  //Sia la funzione 'parse' la seguente:
  function succ(a:string):number{
    return Number(a)+1;
  }
  //Sia la Funzione 'equals' la seguente:
  function equals(a:number,b:number):boolean{
    return a==b;
  }
  let el=new GenericFileToArray("testNum.txt",succ); //GenericFileToArray { arr: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ] }
  el.toString(); //'2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n'
  el.cerca(3,equals); //1
  
  //Esempio 2
  //Sia la funzione 'parse' la seguente:
  function cap(a:string):string{
    return a.toUpperCase();
  }
  //Sia la Funzione 'equals' la seguente:
  function equalsStr(a:string,b:string):boolean{
    return a.toUpperCase()==b.toUpperCase();
  }
  
  let el1=new GenericFileToArray("testStr.txt",cap); //GenericFileToArray { arr: [ 'PIPPO', 'PLUTO', 'PAPERINO', 'TOPOLINO' ] }
  el1.toString(); //'"PIPPO"\n"PLUTO"\n"PAPERINO"\n"TOPOLINO"\n'
  el1.cerca('pluto',equalsStr); //1 
  el1.cerca('pepe',equalsStr);//-1
  */
