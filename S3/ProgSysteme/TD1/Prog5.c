#include <stdio.h>
#include <stdlib.h>

#define MAX_VALUE 13


int main(){
 int P[MAX_VALUE+1][MAX_VALUE+1];   // matrice résultat
 int N;                             // degré du triangle
 /* Saisie des données */
 do {
    printf("Entrez le degré N du triangle (max.%d) : ", MAX_VALUE);
    scanf("%d", &N);
 } while (N>MAX_VALUE||N<0);

 /* Construction des lignes 0 à N du triangle: */
 /* Calcul des composantes du triangle jusqu'à */
 /* la diagonale principale. */
 
 for (int i =0; i <= N; i++){
    P[i][i]=1;
    P[i][0]=1;
    for (int j =1; j < i; j++)
        P[i][j] = P[i-1][j] + P[i-1][j-1];
 }
  /* Affichage du résultat */
 printf("Triangle de Pascal de degré %d :\n", N);
 for (int i =0; i <=N; i++)
    {
     printf(" N=%2d", i);
     for (int j = 0; j <= i; j++)
          if (P[i][j])
                printf("%5d", P[i][j]);
     printf("\n");
    }
 return 0;
}
