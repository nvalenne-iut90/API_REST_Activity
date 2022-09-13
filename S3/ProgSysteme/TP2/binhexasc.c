#include <stdio.h>
#include <stdlib.h>

int main(){
    char tab[60];
    FILE* bin = NULL;
    FILE* dec = NULL;
    FILE* hexa = NULL;
    int car = 0;

    for (int i = 0; i < sizeof(tab); i++){
        tab[i] = i+1;
        if (tab[i] < 10)
            printf("0%d ",tab[i]);
        else {
            printf("%d ", tab[i]);
        }
    }

    bin = fopen("res.bin", "w");
    dec = fopen("res.ascii", "w");
    hexa = fopen("res.hex", "w");

    if (bin == NULL || dec == NULL || hexa == NULL){
        perror("l'ouverture est pt");
        return 1;
    }
    /*
    for (int i = 0; i < sizeof(tab); i++){
            fwrite(tab[i], bin);
    }
    */

    if (fclose(bin) != 0 || fclose(dec) != 0 || fclose(hexa) != 0){
        perror("la fermeture est pt");
        return 1;
    }

    return 0;
}