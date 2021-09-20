//Esercizi

//ES.5

let a=5, b=10;

let aux;

console.log(`a=${a}, b=${b}`);

//a=A, b=B

a=a^b // a=A^B
b=b^a // b=B^(A^B)=B^B^A=0^A=A
a=a^b // a=(A^B)^A=B

console.log(`a=${a}, b=${b}`);


//ES.4

function conta1(n){
  var c=0;

  while (n==0){
    c=c+(n&1);
    n=n>>>1;
  }
  return c;
}


//ES.3

function removeBits(a,b){

  /*
  a=1000 1001 (2)
  b=0011 100 (2)
  */

  toRemove a&b;
  toKeep= toRemove;
  a=a&toKeep;
  return a;
}


//ES.1

function baseTransform(n,b1,b2){
  n0parseInt(n,b1);
  return n.toString(b2);
}