let f = x => 1/10*x**2-2*x-10

function plotta(f,a,b){
  let x0, y0;
  for(var x=a; x<b; x+=1){
    if(x0 != undefined){
      linea(x0,y0,x,f(x))
    }
    x0 = x;
    y0 = f(x);
    punto(x,f(x));
  }
}

//plotta(x => 3*x-1, -20,20)
plotta(x => 1/10*x**2-2*x-10,-20,20);

function zeri(f,a,b){
  let x0,y0;
  for(var x=a; x<b; x+=1){
    if(x0 != undefined){
      if(f(x0)*f(x)<0){
        console.log("zeri fra "+x0+" e "+x)
      }
    }x0=x;
    y0=f(x);
  }
}

plotta(f,-20,50)
zeri(f,-20,50)