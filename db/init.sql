CREATE TABLE users (
    id SERIAL PRIMARY KEY,
);


CREATE TABLE user_roles (
    id SERIAL PRIMARY KEY,

);

CREATE TABLE user_permissions (
    id SERIAL PRIMARY KEY,
);

CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    organization_name VARCHAR(50) NOT NULL,
    
);

CREATE TABLE organizations_users (
    id SERIAL PRIMARY KEY,

);