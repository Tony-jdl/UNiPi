//Scrivere un programma che legga due numeri e un operatore tra +, -, * e / da tastiera e mostri a video il risultato dell’operazione sui due numeri.
//esempio: utente inserice 3 poi 4 poi * e il programma stampa 3*4=12. 
let fst = parseInt(prompt("Inserire primo valore:"));
let scd = parseInt(prompt("Inserire secondo valore:"));
let op = prompt("Inserire operatore:");
let calc = 0;

if(calc == 0){
  if(op == "+")
    calc = fst + scd;
  if(op == "-")
    calc = fst - scd;
  if(op == "/")
    calc = fst / scd;
  if(op == "*")
    calc = fst * scd;
}

console.log(fst+op+scd+"="+calc);

//Alternativa 1

let a = Number(prompt("Inserire primo valore:"));
let b = Number(prompt("Inserire secondo valore:"));
let op = prompt("Inserire operatore:");
let res;

switch (op) {
    case '+' : res=a+b; break;
    case '-' : res=a-b; break;
    case '*' : res=a*b; break;
    case '/' : res=a/b; break;
    default: console.log("Fottiti!!");
}
console.log(res);

//Alternativa 2

console.log(eval(prompt("inserimento espressione"))); // Questa soluzione è soggetta a vulnerabilità

//REPL - Read-Eval-Print-Loop