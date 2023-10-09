#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid = getpid();

    for (int i = 1; i <= 1000; i++) {
        printf("PID: %d, Message: %d\n", pid, i);
        fflush(stdout);
        sleep(2);
    }

    return 0;
}