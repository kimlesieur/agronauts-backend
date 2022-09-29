CREATE TABLE IF NOT EXISTS marins (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO marins (name) 
VALUES 
    ('Eleftheria'),
    ('Gennadios'),
    ('Lysimachos'),
    ('Jean'),
    ('Georges');