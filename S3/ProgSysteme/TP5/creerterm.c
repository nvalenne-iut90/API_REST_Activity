#include <unistd.h>
void creerterm(char *arg1){
    execl("/usr/bin/xterm", "xterm","-hold","-e",arg1, NULL);
}
int main(int argc, char *argv[]){
    creerterm(argv[1]);
    return 0;
}


