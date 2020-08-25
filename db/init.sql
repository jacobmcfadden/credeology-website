-- Helper Tables
CREATE TABLE states (
    state_id SERIAL PRIMARY KEY,
    state_name VARCHAR(60) NOT NULL,
    state_abbreviation VARCHAR(2) NOT NULL
)

-- Main tables
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_email VARCHAR(100) NOT NULL,
    user_first_name VARCHAR(40) NOT NULL,
    user_last_name VARCHAR(40) NOT NULL
);

CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(100),
    
);

CREATE TABLE permissions (
    permission_id SERIAL PRIMARY KEY,
    permission_name VARCHAR(100),

);

CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    organization_name VARCHAR(100) NOT NULL,
    organization_industry VARCHAR(100) NOT NULL,
    organization_street_address VARCHAR(100) NOT NULL,
    organization_city VARCHAR(60) NOT NULL,
    organization_state FOREIGN KEY,
    organization_zip NUMBER(9) NOT NULL,
    organization_url TEXT,
    organization_
);

-- Joint M2M tables
CREATE TABLE organizations_users (
    id SERIAL PRIMARY KEY,

);

CREATE TABLE users_roles (
    
)