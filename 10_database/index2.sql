--group by & having
show DATABASES;
use dobong;
show tables;
drop table if EXISTS user; -- user 테이블이 이미 존재할 경우 삭제
create table user(
    user_id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM('축구','야구','클라이밍','배드민턴') NOT NULL,
    gender ENUM('남','여') NOT NULL,
    career_year int NOT NULL
);
desc user;
insert into user values (null,'김판곤','축구','남',40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);
SELECT * FROM user;
-- 집계 함수 
-- COUNT : 조건에 만족하는 튜플의 갯수를 세줌
SELECT COUNT(*)
FROM `user`
WHERE specialize='축구'; 
-- SUM
SELECT SUM(career_year) 
FROM user
WHERE specialize='축구';
SELECT AVG(career_year)
FROM `user`
WHERE specialize='축구';
SELECT MAX(career_year) 
FROM `user`
WHERE specialize='축구';
SELECT MIN(career_year) 
FROM `user`
WHERE specialize='축구';

select specialize
from `user`
GROUP BY specialize;

select specialize, COUNT(*)
from `user`
GROUP BY specialize;
-- 각 분야의 여성 숫자 카운트
-- having : 여성 중 2명 이상의 분야만 출력
select specialize, COUNT(*)
from `user`
WHERE gender='여'
GROUP BY specialize
HAVING count(specialize)>=2;
-- sql 문법 순서
-- select >> from >> where >> group by >> having >> order by >> limit
