CREATE USER 'vinyland'@'localhost' IDENTIFIED BY 'vinyland';

GRANT ALL PRIVILEGES ON * . * TO 'vinyland'@'localhost';

ALTER USER 'vinyland'@'localhost' IDENTIFIED WITH mysql_native_password BY 'vinyland';