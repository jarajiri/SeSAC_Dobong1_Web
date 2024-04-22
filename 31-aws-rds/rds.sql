-- Active: 1713492796727@@sesac-rds-rimeboret.c56yicswq7fo.us-east-2.rds.amazonaws.com@3306@sesac
show tables;
desc Users;
select * from Users;

create DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
show databases;
use sesac;
select now();