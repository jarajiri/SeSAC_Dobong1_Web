-- Active: 1707101283311@@127.0.0.1@3306@DOBONG
show TABLES;
create table visitor(
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);
DESC visitor;
INSERT INTO visitor(name,comment) VALUES 
('고니','구라치다 걸리면'),
('아귀','딴따라란'),
('평경장','아수라발발타');

SELECT * FROM visitor;

###########[DCL]
-- 유저 생성1
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';

-- 비밀번호 변경이 필요 시
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

-- 유저생성2 : 생성후 권한 부여
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

-- 모든 DB에 접근 가능하도록, sesac 계정에 DB접근 권한을 부여
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;

-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

