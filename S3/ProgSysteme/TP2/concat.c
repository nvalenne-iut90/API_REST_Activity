#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>

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

int main(int argc, char *argv[]){
    umask(077);
    FILE* dest = NULL;

    if (argc ==1){
        perror("FAUT METTRE UN ARGUMENT LA CONG DE TOI\n");
        return 1;
    } else if( argc == 2){
        
        dest = fopen(argv[1], "w");
        if (dest == NULL){
            perror("L'ouverture est pt");
        }
        fclose(dest);      
            return 0;
    } else if (argc >= 3){
        dest = fopen(argv[argc-1], "w");
        if (dest == NULL){
            perror("L'ouverture est pt");
            return 1;
        }
        for (int i = 0; i < argc-1; i++){
            FILE* src = fopen(argv[i], "r");
            copie(src, dest);                
            fclose(src);
        }
        fclose(dest);

    }

    return 0;
}