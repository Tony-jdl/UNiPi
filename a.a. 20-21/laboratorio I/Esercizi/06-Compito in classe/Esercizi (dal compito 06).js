/* Esercizio 6
Il quadrato di un grafo orientato G = (V, E) e' il grafo G2 = (V, E2) tale che (x, y) ∈ E2 se e solo se
∃u : (x, u) ∈ E ∧ (u, y) ∈ E. In altre parole, se esiste un percorso di due archi fra i nodi x e y.
Scrivere una funzione JS quadratoG(G) con G un grafo rappresentato mediante una matrice di adiacenza.
La funzione restituisce la matrice di adiacenza del grafo G2.
Nota: assumete che la matrice di adiacenza passata come argomento sia quadrata, e che rappresenti una matrice
di adiacenza di un grafo orientato.
ESEMPI:
quadratoG([[0,1,0,0],
            [0,0,1,1],
            [1,0,0,0],
            [0,0,0,0]])->[ [ 0, 0, 1, 1 ], [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 0 ] ]
quadratoG([[0,1,1,0],[0,0,0,0],[0,1,0,1],[0,0,1,0]])->[ [ 0, 1, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 1, 0, 1 ] ] */
