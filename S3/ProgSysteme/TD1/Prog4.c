#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 2){
        printf("Format : ./prog3 <chaine>\n");
        return 1;
    } else {
        printf("Bonjour %s\n", argv[1]);
    }
    return 0;
}

