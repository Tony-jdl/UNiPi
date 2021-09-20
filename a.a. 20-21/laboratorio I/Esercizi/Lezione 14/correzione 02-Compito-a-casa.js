//Correzione compito a casa 02
//ESESRCIZIO: 1

function converBinCompl(a){
  var res;

  if(a>=0){ 
    //rappresentazione binaria
    res=bin(n,9)  
  }else{
    //rappresentazione binaria modulo
    res=bin(-n,9);
    //complemento (flip)
    res=complemento(res);
    //aggiungo 1
    res=aggiungi1(res);
  }

  return res;
}

function aggiungi1(b){
  var s="";
  let i=b.length-1;
  while(b.charAt(i)=='1'){
    s='0'+s;
    i--;
  }
  s='1'+s;
  i--;
  while(i>=0){
    s=b.charAt(i)+s;
    i--;
  }
  return s;
}


function conplemento(b){
  var compl="";
  for(bit of b){
    compl=compl+(bit=='0'?'1':'0');
  }
  return compl;
}

function bin(n,w){
  var res="";
  while(n>0){
    res=(n%2==1?"1":"0") + res;
    n=Math.floor(n/2);
  }

  while(res.length<w){
    res="0"+res;
  }
  return res;
}

//ESERCIZIO: 2

function contaFoglie(t){
  if(t==undefined){
    return 0;
  }
  let fs = contaFoglie(t.sx);
  let fd = contaFoglie(t.dx);

  return (fs+fd)==0?1:(fs+fd);
}

//ESERCIZIO 3

function isPrimo(n){
  var res=true;
  for(i=2; i<n/2; i++){
    if(n%i==0){
      res=false;
    }
  }
  
  function eliminaPrimo(a){
    return a.filter(x=>!isPrimo(x));
    /* var b=[];
    for (eof a){
      if(!isPrimo(e)){
        b.push(e);
      }
    }
    return b; */
  }
}

// ESERCIZIO: 4

function isPal(s){
  var r=true;
  for(i=0; i<s.length/2; i++){
    if(s.charAt(i) != s.charAt(s.length-1-i)){
      r=false;
      break;
    }
  }
  return r;
}

//ESERCIZIO: 5

function indexEq(a){
  for(i in a){
    if(i==a[i]){
      return true;
    }
  }
  return false;
}