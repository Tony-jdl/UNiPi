
//Funzione minimo/massimo

let f = x => (x-0.1)**2;

let min=Infinity, xmin;

let x1=-10, x2=10;

for(i=x1; i<x2; i+0.1){
	if(f(i)<min){
		min=f(i);
		xmin=i;
	}
}

console.log(`il minio è ${min} in ${xmin}`);