const N = 10;
let sommaP=0, sommaN=0, contaP=0, contaN=0;
let x;

for (i = 0; i < N; i++){
  x=Number(prompt("insrisci un numero"));
  if(x>0){
    sommaP = sommaP + x;
    contaP++;
  } else if(x<0){
    sommaN = sommaN + x;
    contaN++;
  }
}
console.log(`la media è ${x>0 ? sommaP/contaP : sommaN/contaN}`);