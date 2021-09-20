//Correzione esercizi
//ES:1

var b=[];

for(var i=0; i<8; i++){
  var s=prompt("Riga"+i), n=0;
  conosle.log(s);
  for(var j=0; j<8; j++){
    if(s[j]=="*"){
      n = n | (0b10000000 >>> j)
      }
  }
  b[i] = n;
}
console.log(b)

0o223 OTTALE
0xAF ESADECIMALE
0b01010101 BINARIO
39874 DECIMALE


//ES:3
function rbI(a,k){
  pos=-1;
  sin=0, des=a.length-1;
  while(sin<des && pos==-1){
    passo()
  }
  return pos;
}

function passo(a,k){
  cen = Mth.floor((sin+des)/2);
  if(k==a[cen]) pos=cen;
  else if (k<a[cen]) des=cen-1;
  else sin=cen+1;
  return pos;
}

function rb2(a,k,sx,dx){
  cen = Mth.floor((sin+des)/2);
  if(k==a[cen]) pos=cen;
  else if (k<a[cen]) retunr rb2(a,k,sx,cen-1);
  else return rb2(a,k,ce+1,dx)
}