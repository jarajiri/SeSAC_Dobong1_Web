CREATE Table customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL 
);
desc customer;
show tables;
INSERT INTO customer (id, name, birthday) VALUES ('aaa', '손흥민', '1992-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');
SELECT * FROM customer;

CREATE Table orderlist(
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT null,
    quantity INT,
    Foreign Key (customer_id) REFERENCES customer(id)
    -- FOREGIN KEY(현재 테이블 컬럼이름) REFERENCES 기준테이블(기준테이블 컬럼이름 PK)
    on update CASCADE on delete CASCADE
    -- 외래키 설정 (다른테이플의 기본키로 설정)
    -- on update cascade 옵션 : 기준 테이블(customer)의 데이터가 변경될 시 참조 테이블(orderlist)의 데이터도 변경
    -- on delete cascade 옵션 : 기준 테이블(customer)의 데이터가 삭제될 시 참조 테이블(orderlist)의 데이터도 삭제
    -- 테이블을 삭제할 때 : fk-pk 관계로 연결된 테이블은 외래키가 설정된 테이블을 먼저 삭제 
);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

SELECT * FROM orderlist;

--inner join
select *
from customer
inner join orderlist
on customer.id = orderlist.customer_id;
--inner join : where로 inner join 사용
SELECT
    orderlist.id,
    customer.id,
    customer.name,
    orderlist.product_name
from customer, orderlist -- inner join을 ,로 구분하는 형식
where customer.id = orderlist.customer_id;
--inner join 사용 , where , on 사용
select *
from orderlist
INNER JOIN customer on customer.id = orderlist.customer_id
where orderlist.quantity >= 5;
--table 별칭 지어서 접근 alias
SELECT 
    o.id as order_id,
    c.id as customer_id,
    c.name,
    o.product_name
from customer as c, orderlist as o
where c.id = o.customer_id;

--left outer join
select *
from customer
left outer join orderlist
on customer.id = orderlist.customer_id;
--right outer join
select *
from orderlist
right outer join customer
on customer.id = orderlist.customer_id;

--natural JOIN
select *
from orderlist NATURAL JOIN customer;

