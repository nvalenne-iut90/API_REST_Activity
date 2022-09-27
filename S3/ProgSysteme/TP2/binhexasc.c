#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>


int main(){
    int tab[60];
    umask(277);
    FILE* bin = NULL;
    FILE* dec = NULL;
    FILE* hexa = NULL;

    for (int i = 0; i < 60; i++){
        tab[i] = i+1;
        printf("%d ", tab[i]);
    }

    /*
        Ouvertures des fichiers
    */

    bin = fopen("res.bin", "w");
    dec = fopen("res.ascii", "w");
    hexa = fopen("res.hex", "w");

    if (bin == NULL || dec == NULL || hexa == NULL){
        perror("l'ouverture est pt");
        return 1;
    }

    // On écrit le contenu du tableau en binaire dans le fichier binaire
    fwrite( tab, sizeof(int), 60, bin );

    // On écrit le contenu du tableau en héxadecimal dans le fichier hexa
    for (int i = 0; i < 60; i++){
        fprintf(hexa, "%08x ",tab[i]);
    }
    // On écrit le contenu du tableau en normal quoi dans le fichier dec
    for (int i = 0; i < 60; i++){
        fprintf(dec, "%03d ",tab[i]);
    }



    /*
        Fermeture des fichiers
    */
    if (fclose(bin) != 0 || fclose(dec) != 0 || fclose(hexa) != 0){
        perror("la fermeture est pt");
        return 1;
    }

    return 0;
}