@echo off

chcp 65001

set /a result = %1 %3 %2

echo -- строка параметров: %1 %2 %3
echo -- параметр 1: %1
echo -- параметр 2: %2
echo -- параметр 3: %3
echo результат: %result%
pause