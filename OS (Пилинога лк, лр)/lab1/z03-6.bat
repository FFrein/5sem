@echo off
chcp 65001

set mode=
set filename=%2

if "%1"=="удалить" (
    set mode=удалить
) else if "%1"=="создать" (
    set mode=создать
)

echo -- строка параметров:
echo -- режим: %mode%
echo -- имя файла: %filename%

if "%1"=="" (
    echo ---+ z03-06 режим файл
    echo ---++ режим = {создать, удалить}
    echo ---++ файл = имя файла 
    exit /b
) else (
    if "%filename%"=="" (
       echo ---+ Имя файла не задано
       exit /b
    )
)

if "%mode%"=="" (
    echo ---+ режим задан некорректно
    exit /b
)

if "%mode%"=="удалить" (
    if exist "%filename%" (
        del "%filename%"
        echo ---+ Файл %filename% удалён
    ) else (
        echo ---+ Файл %filename% не найден.
    )
) else if "%mode%"=="создать" (
    if exist "%filename%" (
        echo ---+ Файл %filename% уже существует.
    ) else (
        type nul > "%filename%"
        echo ---+ Файл %filename% создан
    )
)

pause