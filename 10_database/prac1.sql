show tables;
create table collage_a(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) not null,
    age int not null
);
create table collage_b(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) not null,
    age int not null
);
drop table req_sub;
create table req_sub(
    req_id int PRIMARY KEY AUTO_INCREMENT,
    id VARCHAR(10) not null,
    subject VARCHAR(10) not null
);

insert into collage_a values('20115544','a',34);
insert into collage_a values('20156677','b',31);
insert into collage_a values('20227755','c',25);
insert into collage_a values('20232223','d',23);
insert into collage_a values('20201144','e',23);
insert into collage_a values('20145145','f',30);
insert into collage_a values('20180919','g',26);


insert into collage_b values('2022091994','h',29);
insert into collage_b values('2020101021','i',23);
insert into collage_b values('2018187566','j',26);

INSERT INTO req_sub (id, subject) VALUES
('20115544', '네트워크'),
('20115544', '알고리즘'),
('20156677', '알고리즘'),
('20227755', '네트워크'),
('20232223', 'C언어'),
('20145145', '캡스톤'),
('20180919', '캡스톤'),
('20180919', 'C언어'),
('20180919', '네트워크'),
('2022091994', 'C언어'),
('2022091994', '캡스톤'),
('2022091994', '웹프레임워크'),
('2018187566', 'C언어'),
('2018187566', '네트워크'),
('2018187566', '캡스톤');

select * from collage_a;
select * from collage_b;
select * from req_sub;

select *
from collage_a, req_sub
where collage_a.id = req_sub.id;
select *
from collage_a
left outer join req_sub
on collage_a.id = req_sub.id;
select *
from collage_a
right outer join req_sub
on collage_a.id = req_sub.id;
select *
from collage_a
natural join req_sub;


