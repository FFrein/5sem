#!binbash

# Проверка наличия аргументов
if [ $# -lt 1 ]; then
    echo Usage $0 PID [fd]
    exit 1
fi

pid=$1
proc_name=$(ps -p $pid -o comm=)
ppid=$(ps -p $pid -o ppid=)
fds=

# Если указан параметр fd, получаем перечень дескрипторов
if [ $# -eq 2 ] && [ $2 == fd ]; then
    fds=$(ls -l proc$pidfd  awk '{print $9}')
fi

# Выводим информацию о процессе
echo Исполняемый файл $proc_name
echo PID процесса $pid
echo PID родительского процесса (PPid) $ppid

if [ -n $fds ]; then
    echo Перечень дескрипторов (fd) открытых потоков
    for fd in $fds; do
        echo   $fd
    done
fi