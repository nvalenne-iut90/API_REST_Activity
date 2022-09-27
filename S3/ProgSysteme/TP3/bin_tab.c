#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <fcntl.h>

#define TAB_SIZE 100



int main(){
    int tab[TAB_SIZE];
    int fd;
    char path_file[] = "/tmp/tab.bin";
    int octetsTab = TAB_SIZE*sizeof(int);

    for (int i = 0; i < TAB_SIZE; i++){
        tab[i] = i;
        printf("%02d ", tab[i]);
    }

    fd = open(path_file, O_CREAT | O_WRONLY, S_IROTH);
    if (fd < 0){
        perror("L'ouverture du fichier est pt");
        return EXIT_FAILURE;
    }

    int octetsEcrits = write(fd, tab, octetsTab);
    if (octetsEcrits != octetsTab){
        perror("L'ecriture dans le fichier est pt");
        close(fd);
        return EXIT_FAILURE;
    }
    close(fd);
    printf("\n%d octets ont été écrits avec succès dans le fichier %s\n", octetsEcrits, path_file);

    return EXIT_SUCCESS;
}