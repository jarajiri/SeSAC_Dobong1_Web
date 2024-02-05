-- database 관련 명령어 
show databases; -- 데이터 베이스 목록 
create database sesac; -- 데이터 베이스 생성 
drop database sesac; -- 데이터 베이스 제거 

create database sesac default character set utf8 collate utf8_general_ci; -- 인코딩 타입 설정 
create database sesac2 character set utf8mb4 collate utf8mb4_unicode_ci; -- 이모지 등 특수문자를 지원하는 인코딩 타입 

use sesac; -- 사용할 데이터 베이스 
show tables; -- 테이블 목록 

create table product(
	id int not null auto_increment primary key,
	name varchar(50) not null,
	model_number varchar(15) not null,
	series varchar(30) not null
);

desc product;  -- 컬럼 정보 확인  

DROP DATABASE SESAC;
DROP DATABASE SESAC2;


-- CREATE : DATABASE 생성 
CREATE DATABASE SESAC DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;
/* 
 * dobong 이라는 데이터베이스를 생성하는데,
 * 문자열셋으로 utf8mb4, 콜레이션을 utfmb8_unicode_ci를 사용!
 * utf8mb4는 utf8보다 더많은 문자 지원(이모지 저장 가능)
 */
CREATE DATABASE DOBONG DEFAULT CHARACTER SET UTF8MB4 COLLATE UTF8MB4_UNICODE_CI;
-- 이 데이터 베이스를 사용하겠다!(use 명령어, 데이터 베이스 사용 선)
USE SESAC;

-- table 관련 명령어 
create table products(
/*
 * create table 테이블명(
 * 	속성1 형식 제약조건,
 *  속성2 값형식 제약조건,
 */
/*
 * 제약조건
 * - NOT NULL : NULL 허용 X
 * - AUTO_INCREMENT : 자동 숫자 증가 
 * - PRIMARY KEY : 기본키(중복허용 X, NULL값 허용 X)
 * - DEFAULT : 기본값 
 * - UNIQUE : 중복 허용 X, NULL 값 허용 
 */
	ID INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(50) NOT NULL,
	MODEL_MODEL VARCHAR(15) NOT NULL,
	SERIRES VARCHAR(30) NOT NULL
);
-- 테이블 목록 확인 
SHOW TABLES;
-- 테이블에 컬럼 정보 확인 (테이블 구조 확인)
DESC PRODUCTS;
-- 테이블 삭제
DROP PRODUCTS;
-- 테이블 내용 삭제 
TRUNCATE table products; 


-- 테이블 변경(수정) ALTER
-- 1. 컬럼 추가 
ALTER table products add new_column varchar(20);
-- 2. 특정 컬럼 수정
ALTER table products modify new_column INT;
-- 3. 특정 컬럼 삭제
ALTER Table products DROP new_column;

/* DML
    Data manipulation language (데이터 조작어)
 */
CREATE Table user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);
-- CREATE (데이터 추가) : INSERT INTO
-- INSERT INTO 테이블명(컬럼1,컬럼2,...) VALUES(값1,값2,...);
insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, address) VALUES('김민지',22,'서울특별시 중구');
insert into user (name, age, address) VALUES('거지',22,NULL);
select * from user;

-- 데이터 수정 UPDATE
-- UPDATE 테이블이름 SET 데이터 어떻게 수정할건지 WHERE 어떤 데이터를;
UPDATE user SET name = '이국형' WHERE id = 4;

-- 데이터 삭제 DELETE
-- DELETE FROM 테이블 이름 WHERE 삭제 조건;
DELETE FROM user where id =10;
DELETE FROM user; -- 전체 데이터 삭제
-- TRUNCATE 와 DELETE 차이 : 메모리 반납 여부
TRUNCATE table user;

--이씨인 사람 지우기
SELECT * FROM user;
DELETE from user where name like '이%';

-- 데이터 조회(READ) select~from
select * from user;
SELECT name from user;
select name,age FROM user;

--where 절로 조건 적용
SELECT * FROM user WHERE age = 40;
SELECT * FROM user WHERE name = '이지은';

--order by : 데이터 정렬
--asc(오름차순,디폴트), desc(내림차순)

SELECT * FROM user ORDER BY age DESC;

SELECT * from user where id>6 ORDER BY age asc;

SELECT * FROM user where address like '서울%';
--주소기 광역시 튜플 검색
SELECT * FROM user where address like '%광역시%';
--이름에 희가 들어가는 사람 이름 컬럼만 조회
SELECT name FROM user where name like '%희%' ORDER BY age desc;

-- LIMIT: 데이터의 갯수 제한
SELECT * FROM user LIMIT 3;
SELECT * FROM user where address like '서울%' LIMIT 2;

-- BETWEEN A AND B : A와 B의 사이값 조회(A,B포함)
SELECT * FROM user where age BETWEEN 25 and 30;
--IN(리스트) : 리스트의 요소와 일치하면 참
SELECT * FROM user where age in (20,21,22,23);

--IS NULL / IS NOT NULL

SELECT * FROM user WHERE address IS NULL;

-- 논리 연산자 : AND, OR ,NOT
-- 주소가 null 이 아니면서 age가 25보다 큰 전체 속성
SELECT * FROM user where address is not null AND age > 25;
SELECT * FROM user where address is not null OR age > 20;
SELECT name FROM user where name like '이%' and age =22;

-- DISTINCT(중복 튜플 제거)
SELECT age FROM user;
SELECT DISTINCT age FROM user;