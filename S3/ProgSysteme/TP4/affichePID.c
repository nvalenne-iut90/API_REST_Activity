#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>


void affiche_car(const char *prefixe){
    printf("Message = %s | Processus numéro : %d. | Numéro du processus père : %d.\n"
    , prefixe, getpid(), getppid());
}


int main(void){
    pid_t fils = fork();
    if (fils == -1){
        perror("le fork est pété");
        return EXIT_FAILURE;
    }
    sleep(5);
    affiche_car("salut");
    return EXIT_SUCCESS;
}