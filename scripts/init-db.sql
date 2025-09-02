-- Database initialization script for PostgreSQL
-- This script is used by Docker Compose to set up the initial database

-- Create extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Set up database security
ALTER DATABASE elderly_db SET log_statement = 'all';
ALTER DATABASE elderly_db SET log_connections = 'on';
ALTER DATABASE elderly_db SET log_disconnections = 'on';

-- Create read-only user for analytics (optional)
-- CREATE USER analytics_user WITH PASSWORD 'secure_analytics_password';
-- GRANT CONNECT ON DATABASE elderly_db TO analytics_user;
-- GRANT USAGE ON SCHEMA public TO analytics_user;
-- GRANT SELECT ON ALL TABLES IN SCHEMA public TO analytics_user;
-- ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO analytics_user;