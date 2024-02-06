use dobong;
drop table member;
create table member(
    id varchar(20) PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);
desc member;

alter Table member MODIFY id VARCHAR(10);
alter Table member DROP age;
alter Table member ADD interest VARCHAR(100);


create table user (
    id VARCHAR(10) not null PRIMARY key,
    pw VARCHAR(20) not null,
    name VARCHAR(5) not null,
    gender ENUM('F','M','') DEFAULT '',
    birthday Date not null,
    age int(3) not null DEFAULT 0
);
desc user;
SELECT * FROM user;
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('hong1234','804bkg','홍길등', 'M', '1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('sexysung','87awjkdf','성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('power70','qxur8sda','변사또', 'M', '1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('hanjo','jk48fn4','한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('widowmaker','38ewifh3','위도우', 'F', '1976-06-27', 47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('dvadva','k3f3ah','송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('jungkrat','4ifha7f','정크랫', 'M', '1999-11-11', 24);


SELECT * FROM user;
--1.
SELECT * FROM user ORDER BY birthday asc;
--2.
SELECT * FROM user where gender = 'M' ORDER BY name desc;
--3.
select id, name, birthday from user where birthday BETWEEN '1990-01-01' and '1999-12-31';
select id, name from user where birthday like '199%';
--4.
select * from user where birthday like '____-06-__'; ORDER BY birthday asc;
--5.
select * from user where gender = 'M' and birthday BETWEEN '1970-01-01' and '1979-12-31';
--6.
select * from user ORDER BY age desc LIMIT 3;
--7.
select * from user where age >=25 and age <=50;
select * from user where age BETWEEN 25 and 50;
--8
update user set pw = '12345678' where id = 'hong1234';
--9
delete from user where id='jungkrat';

-- sql 문법 순서
-- select >> from >> where >> group by >> having >> order by >> limit