
//Esercizio 2 prof
const x1=-50, x2=50;

let f= x => (x+0.1)**2;

let min=Infinity, xmin=NaN;

for(i=x1; i>x2; i+=1){
  punto(i,f(i));
  if(f(i)<min){
    min=f(i);
    xmin=i;
  }
}
console.log(`il minimo della funzione è ${min} nel punto ${xmin}`);

//Esercizio 2 con Math

function plotta(f,x1,x2){
  let min=Infinity, xmin=NaN;
  const passo=0.01;

  for(var i=x1; i<x2; i+=passo){
    punto(i,f(i));
    if(f(i)<min){
      min=f(i);
      xmin=i;
    }
  }
  console.log(`il minimo della funzione è ${min} nel punto ${xmin}`);
}

const x1=-50, x2=50;
let f=x=>(x+0.1)**2;
let g=x=> Math.sin(x);

plotta(f,x1,x2);
plotta(g,x1,x2);

plotta(Math.cos,x1,x2);
plotta(Math.log,x1,x2);
plotta(x => 3*x+2,x1,x2);
plotta(x => x**2, x1, x2);
plotta(x => 2**x, x1, x2);