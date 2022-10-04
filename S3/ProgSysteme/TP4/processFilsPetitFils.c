#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>


void affiche_car(const char *prefixe){
    printf("Message = %s | Processus numéro : %d. | Numéro du processus père : %d.\n"
    , prefixe, getpid(), getppid());
}


int main(void){
    pid_t fils, petitFils;
    affiche_car("pere");
    for (int i = 0; i < 2; i++){
        fils = fork();
        if (fils==0){
           affiche_car("fils");
            petitFils = fork();
            if (petitFils==0)
                affiche_car("petit fils");
            exit(0);
        }
    }
    
    

    return EXIT_SUCCESS;
}