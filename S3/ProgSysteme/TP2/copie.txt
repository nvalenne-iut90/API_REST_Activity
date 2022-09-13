#include <stdio.h>
#include <stdlib.h>

int copie(FILE *entree, FILE *sortie){
    int nbOctets = 0;
    int c = 0;
    do {
        c = getc(entree);
        if (c != EOF){
            putc(c,sortie);
            nbOctets++;
        }
    } while (c != EOF);

    return nbOctets;
}

int main(void){
    FILE* entree = NULL;
    FILE* sortie = NULL;

    entree = fopen("copyFIles.c","r+");
    sortie = fopen("copie.txt", "w");
    if (entree == NULL || sortie == NULL){
        perror("l'ouverture est pt");
        return 1;
    }

    printf("%d octets", copie(entree, sortie));

    if (fclose(entree) != 0 || fclose(sortie) != 0){
        perror("la fermeture est pt");
        return 1;
    }

    return 0;
}