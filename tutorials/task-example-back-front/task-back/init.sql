CREATE DATABASE IF NOT EXISTS db_tasks;
USE db_tasks;

CREATE TABLE tbl_users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,  -- Identificador único, autoincrementable
    email VARCHAR(255) NOT NULL,           -- Columna para el email, no puede ser nulo
    username VARCHAR(255) NOT NULL,        -- Columna para el nombre de usuario, no puede ser nulo
    lastname VARCHAR(255) NOT NULL,        -- Columna para el apellido, no puede ser nulo
    password VARCHAR(255) NOT NULL,        -- Columna para la contraseña, no puede ser nulo
    role VARCHAR(50) NOT NULL              -- Columna para el rol, almacenado como string
);



-- Agregar más comandos aquí si es necesario
