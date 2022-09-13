#define COUPS_RESTANTS  8

#include <stdlib.h>
#include <stdio.h>

int taille_mot(char motSecret[]){
    int size = 0;
    for (int i = 0; motSecret[i] != '\0'; i++){
        size++;
    }
    return size;
}

int main(){
    char mot_cache[] = "ROUGE";
    char lettre = 0;
    int size = taille_mot(mot_cache);

    return 0;
}