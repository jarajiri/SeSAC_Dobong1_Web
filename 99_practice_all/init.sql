-- Active: 1707101283311@@127.0.0.1@3306@sesac
show databases;
create database sesac default character set utf8 collate utf8_general_ci; -- 인코딩 타입 설정 
use sesac;
show tables;
drop table  IF EXISTS user;
desc user;
SELECT * from user;
