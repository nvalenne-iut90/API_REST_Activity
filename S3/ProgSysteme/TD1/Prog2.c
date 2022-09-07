#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    int somme = 0;

    printf("N = ");
    scanf("%d",&n);

    for (int i = 1; i <= n; i++){
        somme += i;
    }
    printf("Résultat : %d\n", somme);

    return 0;
}
