//������� 7
Create table PNA_TABLE(
    x number
)

insert into PNA_TABLE(x) values(10)

select * from PNA_TABLE;

//������� 8
--��������� ������������
SELECT * from dba_tablespaces;
--����� ������������ � ���������
select * from dba_data_files;
--���� � ���������� ��������
select * from dba_role_privs;
--������� ������������
select * from dba_profiles;
--������������
select * from dba_users;