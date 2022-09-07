#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    printf("Nombre d'arguments = %d", argc);
    for (int i = 0; i < argc; i++){
        printf("arg%d = %s\n", i+1, argv[i]);
    }
    return 0;
}

