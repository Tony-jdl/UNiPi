const N=10;
let x,min=Infinity;

for(i=0; i<N; i++){
  x=Number(prompt("Inserisci un numero"));
  if(min>x){
    min=x;
  }
}

console.log(`Il minimo è: ${min}`);