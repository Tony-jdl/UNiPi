//Esercizio 1

let f = (x => x/2-1)

for (var x=-50; x<50; x+=0.1)
  punto(x,f(x))

linea(-50,f(0),50,f(0))


//Esercizio 1 prof
const x1=-50, x2=50;

let f= x => x/2-1;

for(i=x1; i>x2; i+0.1){
  punto(i,f(i));
}