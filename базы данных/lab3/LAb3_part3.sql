//Задание 7
Create table PNA_TABLE(
    x number
)

insert into PNA_TABLE(x) values(10)

select * from PNA_TABLE;

//Задание 8
--Табличные пространства
SELECT * from dba_tablespaces;
--Файлы пермаментные и временные
select * from dba_data_files;
--роли и привелегии выданные
select * from dba_role_privs;
--профили безопасности
select * from dba_profiles;
--Пользователи
select * from dba_users;