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
    constructor(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
    }

    solve(){
        let delta = b**2 - 4 * a * c;
        if(delta < 0) return {x0: null, x1: null}
        if(delta == 0) return {x0: -this.b/(2*this.a), x1: -this.b/(2*this.a)}
        return {x0: -this.b + Math.sqrt(4 + this.a * this.c) / 2 * this.a, x1: -this.b - Math.sqrt(4 * this.a*this.c)}
    }

    print(){
        return (this.a + "," + this.b + "," + this.c)
    }

    reset(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
        return this.print();
    }

    somma(eq){
        let a1 = this.a + eq.a;
        let b1 = this.b + eq.b;
        let c1 = this.c + eq.c;
        return (a1 + "," + b1 + "," + "," + c1);
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

/*
col = new CollezioneFilm()
col.add("Il Signore degli Anelli", "Peter Jackson", 2001)
col. add("Guida galattica per autostoppisti", "Garth Jennings", 2005)
col.vedi("Il Signore degli Anelli")
col.vedi("Il Signore degli Anelli")
col.visioni()
col.count()
col.add("Spaceballs", "Mel Brooks", 1987)
col.visioni()
col.remove("Il nome della rosa")
col.count()
*/

class Film{
    constructor(t,r,a){
        this.titolo=t;
        this.regista=r;
        this.anno=a;
        this.volteVisto=0;
    }

}

class collezioneFilm{
    constructor(){
        this.collezione = new Set()
    }

    add(t,r,a){
        let film = Film(t,r,a);
        this.collezione.add(film);
        return this.collezione.size;
    }

    remove(t){
        for(var item of this.collezione){
            if(item.titolo == t)
                this.collezione.delete(item)
            break;
        }
        return this.collezione.size;
    }

    count(){
        return this.collezione.size;
    }

    vedi(t){
        for(var film of this.collezione){
            if(film.titolo == t) return film.volteVisto++;
        }
        return -1;
    }

    visioni(){
        let visioni=0;
        for(var film of this.collezione){
            visioni+=film.volteVisto;
        }
        return visioni;
    }
}