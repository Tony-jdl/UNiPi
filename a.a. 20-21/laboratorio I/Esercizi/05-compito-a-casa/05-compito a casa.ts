/*
ESERCIZIO 2
Si scriva una funzione colNeg(a) dove a e' una matrice di interi di dimensione NxM (rappresentata come una array di array). In particolare, a[i], 0 <= i <= N, contiene i valori della i-esima riga di a, e a[i][j] contiene il valore j-esimo della i-esima riga di a. 

colNeg(a) restituisce true se esiste almeno una RIGA in a con tutti i valori negativi.

Esempi: 
a = [[1,2,3], [4,5,6], [7,-8,9]] -> false
a = [[1,2,3], [-44,-5,-6], [7,-8,9]] -> true
a = [[-1,-2,-3], [-44,-5,-6], [-7,-8,-9]] -> true

colNeg([[1,2,3], [4,5,6], [7,-8,9]]) false
colNeg([[1,2,3], [-44,-5,-6], [7,-8,9]]) true
colNeg([[-1,-2,-3], [-44,-5,-6], [-7,-8,-9]]) true
*/

function colNeg(a:number[][]):boolean {
    var trovato:boolean = false;
    var N:number = a.length;
    var M:number = a[0].length;
    let i:number = 0;
    while(i < N && !trovato){
      let j:number = 0;
      while(i < M && a[i][j] < 0)
        j++;
      if(j == M) 
        trovato = true
    }
    return trovato
  }
  
  colNeg([[1,2,3], [4,5,6], [7,-8,9]])
  colNeg([[1,2,3], [-44,-5,-6], [7,-8,9]])
  colNeg([[-1,-2,-3], [-44,-5,-6], [-7,-8,-9]])

/*
ESERCIZIO 3
Si scriva una funzione colNegE(a) dove a e' una matrice di interi di dimensione NxM (rappresentata come una array di array). In particolare, a[i], 0 <= i <= N, contiene i valori della i-esima riga di a, e a[i][j] contiene il valore j-esimo della i-esima riga di a. 

colNegE(a) restituisce true se esiste esattamente una RIGA in a con tutti i valori negativi.

Esempi: 
a = [[1,2,3], [4,5,6], [7,-8,9]] -> false
a = [[1,2,3], [-44,-5,-6], [7,-8,9]] -> true
a = [[-1,-2,-3], [-44,-5,-6], [-7,-8,-9]] -> false

colNegE([[1,2,3], [4,5,6], [7,-8,9]]) false
colNegE([[1,2,3], [-44,-5,-6], [7,-8,9]]) true
colNegE([[-1,-2,-3], [-44,-5,-6], [-7,-8,-9]]) false
*/

function colNegE(a:number[][]):boolean {
    var count:number = 0;
    var N:number = a.length;
    var M:number = a[0].length;
    let i:number = 0;
    while(i<N && count < 2){
      let j:number=0;
      while(j<M && a[i][j] < 0)
        j++
      if(j == M) 
        count++;
    }
    return count == 1;
  }