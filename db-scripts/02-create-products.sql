-- -----------------------------------------------------
-- Schema full-stack-ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-ecommerce`;

CREATE SCHEMA `full-stack-ecommerce`;
USE `full-stack-ecommerce` ;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`genre` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `genre_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`vinyl`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`vinyl` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `unit_price` DECIMAL(13,2) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `units_in_stock` INT(11) DEFAULT NULL,
  `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  `genre_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`genre_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

INSERT INTO genre (genre_name) VALUES 
('Rock'), 
('Electronic'), 
('Pop'), 
('Funk/Soul'), 
('Jazz'),
('Classical'),
('Hip Hop'),
('Stage & Screen'),
('Reggae'),
('Latin'),
('Blues'),
('Non-Music'),
('Children'),
('Brass & Military');

-- Inserting sample data into the vinyl table
INSERT INTO `full-stack-ecommerce`.`vinyl` 
  (sku, name, description, unit_price, image_url, active, units_in_stock, date_created, last_updated, genre_id) 
VALUES 
  ('VIN001', 'The Dark Side of the Moon', 'Classic album by Pink Floyd.', 29.99, 'images/darkside.jpg', 1, 50, NOW(), NOW(), 1),
  ('VIN002', 'Random Access Memories', 'Album by Daft Punk.', 35.00, 'images/daftpunk.jpg', 1, 30, NOW(), NOW(), 2),
  ('VIN003', 'Thriller', 'Best selling album by Michael Jackson.', 25.00, 'images/thriller.jpg', 1, 40, NOW(), NOW(), 3),
  ('VIN004', 'Back to Black', 'Album by Amy Winehouse.', 22.50, 'images/backtoblack.jpg', 1, 25, NOW(), NOW(), 3),
  ('VIN005', 'Kind of Blue', 'A seminal jazz album by Miles Davis.', 27.50, 'images/kindofblue.jpg', 1, 30, NOW(), NOW(), 5),
  ('VIN006', 'No Woman No Cry', 'Live album by Bob Marley.', 19.99, 'images/nwnc.jpg', 1, 45, NOW(), NOW(), 9);
  

