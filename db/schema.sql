DROP DATABASE IF EXISTS sushi_db;

CREATE DATABASE sushi_db;

USE sushi_db;

CREATE TABLE sushi(
    id INT(10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    sushi_name VARCHAR(30) NOT NULL,
    eaten BOOLEAN NOT NULL DEFAULT FALSE
)