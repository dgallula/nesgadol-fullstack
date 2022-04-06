create database nesgadol;


use nesgadol;


CREATE TABLE coffee (
id   INT NOT NULL AUTO_INCREMENT ,
name VARCHAR(255) not null,
price int not null,
strenght int not null,
usersId int,
PRIMARY KEY (id),
FOREIGN KEY(usersId) REFERENCES users(id)
);

INSERT INTO coffee (name, price,strenght, usersId)
VALUES
('decafeiono',4,4,4),
('volluto',4,4,3),
('khazar',4,4,1),
('livanto',4,4,2),
('caramelito',4,4,2);





CREATE TABLE users (
id   INT NOT NULL AUTO_INCREMENT ,
    firstName VARCHAR(255) NOT NULL,
    familyName VARCHAR(255) not null,
    phone varchar(255) unique,
    email  varchar(255) unique,
    password varchar(255) Not null,
    statusId Int,
    PRIMARY KEY (id)
);


INSERT INTO users (firstName, familyName,phone,email, password,statusId)
VALUES
('David','Gallula',+'0538478654', 'dgallula@gmail,com', 'Aa123456!',1),
('michel','journo',+'0548478654', 'michel@gmail,com', 'Aa123456!',2),
('marie','toledano',+'0538478674', 'marie@gmail,com', 'Aa123456!',1),
('franck','provost',+'0538478454', 'franck@gmail,com', 'Aa123456!',1),
('raphael','benichou',+'0538448654', 'raphael@gmail,com', 'Aa123456!',1);



select * from coffee;

select * from users;