/*
SpitOut
Si scriva una funzione spitOut(a,p) che, dati come argomenti un array a e una
funzione p, stampi tramite console.log() tutti gli elementi e di a tali che
l’invocazione di p(e) restituisca true o un valore che viene promosso a true
Esempi
spitOut([12,7,14,0,561],e=>(e%3==0)) → stampa 12, 0, 561
spitOut([“la”,”vispa”,”teresa”,”solea”],e=>e.indexOf(“s”)) → stampa la, vispa, teresa
spitOut([31,3.1415, 1.4142, 7],e=>e==Math.round(e)) → stampa 31, 7


SpitOut.ts
Si risolva l’esercizio SpitOut precedente, scrivendo però codice in TypeScript con
tutti i tipi pienamente annotati.
Attenzione: risolvete l’esercizio indicando tutti i tipi, senza usare il tipo any
Suggerimento: si ripassino in particolare i tipi generici (generics)
*/

function spitOut<T>(a:T[],p:(e:T)=>boolean){
    console.log(a.filter(p).join());
  }
  
  spitOut([12,7,14,0,561],e=>(e%3==0)) //→ stampa 12, 0, 561
  spitOut(["la","vispa","teresa","solea"],e=>e.indexOf("s")!=0) //→ stampa la, vispa, teresa
  spitOut([31,3.1415, 1.4142, 7],e=>e==Math.round(e)) //→ stampa 31, 7
