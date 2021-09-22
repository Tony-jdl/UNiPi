#define _GNU_SOURCE   // avverte che usiamo le estensioni GNU 
#include <stdio.h>    // permette di usare scanf printf etc ...
#include <stdlib.h>   // conversioni stringa/numero exit() etc ...
#include <stdbool.h>  // gestisce tipo bool (per variabili booleane)
#include <assert.h>   // permette di usare la funzione assert
#include <string.h>   // funzioni di confronto/copia/etc di stringhe

// le istruzioni qui sopra le spieghiamo più avanti 

void termina(char *messaggio)
{
  puts(messaggio);
  exit(1);
}


// dato k restituisco True se e primo, false altrimenti
bool primo(int k)
{
  for(int i=2;i<k;i++)
    if(k%i==0) return false; // ho scoperto che il numero non è primo
  return true;
}



// legge in intero N e costruisce array dei primi <=N
int main(int argc, char *argv[])
{
  int n,e;
  
  puts("Inserisci il massimo intero da testare");
  e = scanf("%d",&n);  // %d vuol dire che voglio leggere un intero
                       // la & commerciale ci vuole, ne riparleremo
  if(e!=1)             // verifico di aver letto qualcosa
    termina("Lettura fallita");
  if(n<2)
    termina("L'array che ti interesa è vuoto");
    
  int *a;  // array che conterrà i primi
  int size=10; // dimensione attuale dell'array
  int messi=0; // numero di eleemnti attulamente nell'array
  a = malloc(size*sizeof(int));
  if(a==NULL)
    termina("Memoria insufficiente");
    
  // cerco i numeri primi da 2 a N
  for(int i=2;i<=n;i++) {
    // se i è primo lo aggiungo ad a[]
    // NO scrivere il codice per vedere se i è primo
    // SI chiamo una funzione che mi dice se i è primo 
    if(primo(i)) {
      // devo aggungere i all'array a[]
      if(messi==size) {
        // ingrandisco l'array
        size = size*2;
        a = realloc(a,size*sizeof(int));
        if(a==NULL)
          termina("realloc fallita");
      }
      a[messi] = i;
      messi += 1;
    }
  }
  // ho messo tutti gli elementi che mi interesavano
  size = messi;
  a = realloc(a,size*sizeof(int));
  if(a==NULL)
    termina("realloc fallita");
  
  // stampo il contenuto dell'array
  for(int i=0;i<messi;i++)
    printf("%8d",a[i]); // stampo gli elemnti in un campo di 8 caratteri
  printf("\nIn totale ho calcolato %d primi\n",messi);           
    
  // dealloco l'array (da fare solo dopo che ho finito di usarlo!)
  free(a);   
  return 0;
}
