--1
-- файл будет находится по пути C:\WINDOWS.X64_193000_db_home\database
create tablespace TS_PNA
    datafile 'ts_PNA.dbf'
    size 7M
    autoextend on next 5M
    maxsize 20M
    
select TABLESPACE_NAME, STATUS, contents logging from SYS.DBA_TABLESPACES;
drop tablespace TS_PNA

--2
create temporary tablespace TS_PNA_TEMP
    tempfile 'ts_PNA_TEMP.dbf'
    size 5M
    autoextend on next 3M
    maxsize 30M
    
select TABLESPACE_NAME, STATUS, contents logging from SYS.DBA_TABLESPACES;
drop tablespace TS_PNA_TEMP

--3
select * from SYS.DBA_TABLESPACES;
select * from SYS.DBA_DATA_FILES;

--4
alter session set "_ORACLE_SCRIPT" = true

create role RL_PNACORE;
grant
    connect,
    create table,
    create view,
    create procedure,
    drop any table,
    drop any view,
    drop any procedure
to RL_PNACORE;


--5
select * from DBA_ROLES where ROLE = 'RL_PNACORE';
select * from DBA_SYS_PRIVS where GRANTEE = 'RL_PNACORE';

--6
create profile PF_PNACORE limit
    failed_login_attempts 7 --число попыток входа в систему
    sessions_per_user 3 -- кол-во сессий на пользователя
    password_life_time 60 -- время жизни пароля
    password_reuse_time 365 -- время до повторного использования пароля
    password_lock_time 1 -- время блокировки пароля
    connect_time 180 -- время подключения
    idle_time 30; --время простоя
    
--7
select * from DBA_PROFILES;
select * from DBA_PROFILES where profile = 'PF_PNACORE';
select * from DBA_PROFILES where profile = 'default';

--8
create user C##PNACORE
    identified by 111 --11111
    default tablespace TS_PNA
    temporary tablespace TS_PNA_TEMP
    profile PF_TDSCORE
    account unlock
    password expire;
    
grant
    create session,
    create table,
    create view,
    drop any table,
    drop any view
to C##TDSCORE;

drop user C##PNACORE;

--9



--10
create table anyTable (
    id number
);

create view anyView as select * from anyTable;

drop view anyView;
drop table anyTable;

--11
create tablespace PNA_QDATA
    datafile 'TDS_QDATA.dbf'
    size 10M
    offline;

select TABLESPACE_NAME, STATUS, contents logging from SYS.DBA_TABLESPACES;

alter tablespace PNA_QDATA online;

alter user C##PNACORE quota 2M on PNA_QDATA;

drop tablespace PNA_QDATA including contents;


connect C##PNACORE;
create table tableTask11 (
    id number,
    name varchar(10)
) tablespace PNA_QDATA;

insert into tableTask11 values (1, 'one');
insert into tableTask11 values (2, 'two');
insert into tableTask11 values (3, 'three');

select * from tableTask11;
drop table tableTask11;
