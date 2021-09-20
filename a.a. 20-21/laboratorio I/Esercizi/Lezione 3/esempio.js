//Esempio del prof

let f = (x => 1/8*x**2-30)

for (var x=-30; x<30; x+=0.1)
  punto(x,f(x))

linea(-30,f(0),30,f(0))