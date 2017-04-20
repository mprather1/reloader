DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  attribute INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);


INSERT INTO models ( name, attribute )
VALUES ( 'test1', 1 );
INSERT INTO models ( name, attribute )
VALUES ( 'test2', 2 );
INSERT INTO models ( name, attribute )
VALUES ( 'test3', 3 );
INSERT INTO models ( name, attribute )
VALUES ( 'test4', 4 );
INSERT INTO models ( name, attribute )
VALUES ( 'test5', 5 );

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  attribute INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);

DROP DATABASE IF EXISTS api_production;
CREATE DATABASE api_production;

\c api_production;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  attribute INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);