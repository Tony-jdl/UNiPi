#define _GNU_SOURCE   // avverte che usiamo le estensioni GNU 
#include <stdio.h>    // permette di usare scanf printf etc ...
#include <stdlib.h>   // conversioni stringa/numero rand() abs() exit() etc ...
#include <stdbool.h>  // gestisce tipo bool (per variabili booleane)
#include <assert.h>   // permette di usare la funzione assert
#include <string.h>   // permette di usare le funzioni di confronto/copia/etc di stringhe

// le istruzioni qui sopra le spieghiamo più avanti 


// Compito di oggi:
//   leggi un intero N dal terminale  
//   leggi N interi e mettili in un array a[]
//   calcola la somma degli elementi dell'array
//   e visualizzala sul terminale


int main(int argc, char *argv[])
{
  int n,e;
  
  puts("Inserisci la dimensione dell'array");
  e = scanf("%d",&n);  // %d vuol dire che voglio leggere un intero
                       // la & commerciale ci vuole, ne riparleremo
  if(e!=1) {           // verifico di aver letto qualcosa
    puts("Lettura fallita");
    exit(1);  // ci torneremo su exit
  }
  if(n<1 || n>1000) {  // verifico che il numero di elementi sia accettabile
    puts("Dimensione non valida");
    exit(1);  // ci torneremo su exit
  }


  // creo array di n elementi dinamicamente 
  int *a;  // dichiaro a come "potenziale array"
  a = malloc(n*sizeof(int));
  if(a==NULL) { // 
    puts("Memoria insufficiente");
    exit(1);
  }
  
  for(int i=0;i<n;i++) {
    // uso printf perché devo stampare anche un intero
    printf("Inserisci l'elemento di posto %d: ", i);
    // leggo a[i]
    e = scanf("%d",&a[i]);
    if(e!=1) {
      puts("Lettura array fallita");
      exit(1);  // ci torneremo su exit
    }
  }
  
  // calcolo la somma e la visualizzo
  int somma = 0;
  for(int i=0;i<n;i++)
    somma += a[i];
  
  printf("La somma dell'array di %d elementi è %d\n",n,somma);

  // dealloco array per restituire la memoria al sistema
  free(a);
  
  return 0;
}


