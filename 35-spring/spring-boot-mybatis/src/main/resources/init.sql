create database test character set utf8mb4 collate utf8mb4_unicode_ci;
show databases;
use test;
show tables;

create table user(
    id int primary key auto_increment,
    name varchar(200) not null,
    nickname varchar(200) not null
);