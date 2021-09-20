/* Interfacce
Data la seguente interfaccia TS:
interface Persona{
 nome:string;
 cognome:string;
 codiceFiscale: string
 getName(): string; // restituisce il contenuto di “nome” concatenato a “cognome”
 getAge():number; // restituisce un numero random compreso tra 18 e 44
}
si scriva una classe Impiegato che la implementa.
La classe Impiegato deve aggiungere il campo employeeNumber:number e il metodo
getEmployeeNumber(): number oltre ai campi e ai metodi definiti dall’interfaccia
● employeeNumber è un numero random pari, tra 10 e 100, e
getEmployeeNumber() lo restituisce */

interface Persona{
    nome:string;
    cognome:string;
    codiceFiscale: string
    getName(): string; // restituisce il contenuto di “nome” concatenato a “cognome”
    getAge():number; // restituisce un numero random compreso tra 18 e 44
}

class Impiegato implements Persona{
    nome:string;
    cognome:string;
    codiceFiscale: string;
    employeeNumber:number;

    constructor(nome:string,cognome:string,codiceFiscale:string){
        this.nome=nome;
        this.cognome=cognome;
        this.codiceFiscale=codiceFiscale;
        this.employeeNumber=0;
    }

    getName():string {
        return this.nome + this.cognome;
    }

    getAge():number {
        return Math.floor(Math.random() * (44 - 18) + 18);
    }

    getEmployeeNumber():number {
        return this.employeeNumber=Math.floor(Math.random() * (100 - 10) + 10);
    }
}

/* W i generics
Si scriva in TS una funzione generica wrapInArray(v, f, p), dove v è un valore avente tipo T, f una funzione che
prende un argomento di tipo T e restituisce un valore di tipo T, e p un parametro opzionale. wrapInArray(v,T, p)
deve restituire un array di tipo T contenente il risultato di f(v) copiato p volte (quindi, il risultato di f(v) verrà
inserito nelle posizioni dalla 0 alla p-1 dell’array). Se p non è specificato, allora f(v) viene inserito solo in
posizione 0 (ovvero, p=1)
Attenzione: definire per bene tutti i tipi della funzione, con una particolare attenzione all’aspetto legato ai generics
(in altre parole, scrivere solo wrapInArray(v, f) non è corretto in TS con generics)
Esempi
● Sia square(v: number):number una funzione che calcola il quadrato di v. Allora, c →
[25]
● Sia prefix(s: string):string una funzione che, data la stringa s, restituisce il primo carattere di s. Allora,
wrapInArray(“pippo”, prefix, 3) → [‘p’, ‘p’, ‘p’] */

function wrapInArray<T>(v:T, f:(a:T)=>T, p:number=0):T{
    var arr:any=[];

    if(p==0)return arr.push(f(v));
    for(var i=p; i<p; i++){
        arr[i].push(f(v));
    }
}

/* Mappature I
Si scriva una funzione TS find(a,f), dove a è un array contenente valori di tipo T, e f una funzione che preso
un argomento di tipo T, restituisce un valore di tipo boolean. findG(a,f) deve restituire tutti gli indici j di a per
cui f(a[j]) è verificata.
Esempi
se pos(v), con v un number, restituisce true se v >=0, allora
findG([1,2,3,4],pos) → [0,1,2,3]
se vowel(s), con s una stringa, restituisce true se s contiene almeno una vocale, allora
findG(["tre","parto","xwzl","accasa"],vowel)) → [0,1,3] */

function find<T>(a:T[],f:(a:T)=>boolean){
    var b:any=[];
    for(var i=0; i<a.length; i++) {
        b.push(f(a[i]));
    }
}

function finG<T>(a:T[],f:(a:T)=>T){
    var arr:any=[];
    for(var j of a){
        if(f(j)){arr.push(j)}
    }
    return arr;
}

function pos(v:number){
    if(v>=0){return true}
    return false;
}

function vowel(s:string){
    for(var i of s) {
        if(i.match(/[aeiou]g+/))return true}
    return false;
}

/* Mappature II
Si scriva una funzione TS mapG(a,f,v), dove a è un array contenente valori di tipo T, f una funzione che presi
due argomenti di tipo T, restituisce un valore di tipo T, e v un valore di tipo T. mapG(a,f,v) deve restituire un
array b dove b[i] = f(a[i],v)
Si fornisca una soluzione che non usi il metodo map() sugli array, e una che lo usi
Esempi
se square(v,v1), con v e v1 due number, restituisce v2
+v1, allora
mapG([1,2,3,4],square,1) → [2,5,10,17]
se suffix(s,v1), con s e v1 due string, restituisce s+v1 (concatenazione), allora
mapG(["tre","parto","aeropla","accasa"],suffix,"no")) → [ 'treno', 'partono',
'aeroplano', 'accasano' ] */

function mapG<T>(a:T[],f:(g:T,h:T)=>T,v:T){
    var b:T[]=[];
    for(var i of a){
        b.push(f(i,v));
    }
    return b;
}
//da finire
function mapg<T>(a:T[],f:(g:T,h:T)=>T,v:T){ //con metodo .map
    var b:T[]=a.map(f(a[i],v));
    
    return b;
}

function square(v:number,v1:number){
    return v+v1;
}

function suffix(s:string,v1:string){
    return s+v1;
}

/* Riduzioni
Si scriva una funzione TS redG(a,f), dove a è un array contenente valori di tipo T, f una funzione che presi
due argomenti di tipo T, restituisce un valore di tipo T. redG(a,f) deve restituire un valore v di tipo T, ottenuto
come segue: f è applicata a tutti gli elementi di a, dal primo (indice 0) all’ultimo (indice a.length-1),
accumulando i valori ottenuti in v.
Si fornisca una soluzione che non usi il metodo reduce() sugli array, e una che la usi
Esempi
se min(v1,v2) restituisce il minimo tra v1 e v2, allora
redG([90,-20,1,4],min)) → -20
redG(["p","qwer","pppp","azasa","i"], min)) → “azasa” */

function redG<T>(a:T[],f:(arg1:T,arg2:T)=>T){
    var v:T;
    for(var i=0; i<a.length; i++){
        v=f(a[i],v)
    }
    return v;
}

function min(v1:number,v2:number){
    return (v1<v2)?v1:v2;
}

redG([90,-20,1,4],min));