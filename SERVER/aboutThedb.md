1. Hozz létre egy adatbázist pracemp néven

2.Hozz létre 2 táblát dept és emp néven

3.Az emp táblába futtasd le ezt
insert into emp (id,`name`,job, salary, department) values
    (NULL,'JOHNSON','ADMIN',18000,4),
    (NULL,'HARDING','MANAGER',52000,3),
    (NULL,'TAFT','SALES I',25000,3),
    (NULL,'HOOVER','SALES I',27000,3),
    (NULL,'LINCOLN','TECH',22500,4),
    (NULL,'GARFIELD','MANAGER',54000,4),
    (NULL,'POLK','TECH',25000,4),
    (NULL,'GRANT','ENGINEER',32000,2),
    (NULL,'JACKSON','CEO',75000,4),
    (NULL,'FILLMORE','MANAGER',56000,2),
    (NULL,'ADAMS','ENGINEER',34000,2),
    (NULL,'WASHINGTON','ADMIN',18000,4),
    (NULL,'MONROE','ENGINEER',30000,2),
    (NULL,'ROOSEVELT','CPA',35000,1)

4.A dept táblába pedig ezt:
insert into dept (id,`name`,location) VALUES
 (NULL,'ACCOUNTING','ST LOUIS'),
 (NULL,'RESEARCH','NEW YORK'),
 (NULL,'SALES','ATLANTA'),
(NULL, 'OPERATIONS','SEATTLE')     