CREATE TABLE users
(
    name character varying(100),
    email text UNIQUE PRIMARY KEY NOT NULL,
    joined timestamp NOT NULL,
    password text,
    deposit integer,
    admin boolean,
    profits integer,
    withdrwal integer,
    referral integer
)