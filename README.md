# CloudVault Deployment Guide

This guide will walk you through the deployment process of the CloudVault application.

## Environment Setup

1. Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DB_HOST=your_database_host
DB_PORT=3306
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

## Database Migration Process

The application uses Drizzle ORM for database management. Follow these steps to set up and update your database:

1. **Generate Migration**

   ```bash
   npm run drizzle-kit generate
   ```

   This command will:

   - Read your schema from `src/db/schema.ts`
   - Generate migration files in the `drizzle` directory
   - Create SQL files with the necessary changes

2. **Push Changes to Database**
   ```bash
   npm run drizzle-kit push
   ```
   This command will:
   - Apply the generated migrations to your database
   - Create or update tables according to your schema
   - Ensure your database structure matches your schema definition

## Current Database Schema

The application currently has the following table structure:

### Contact Messages Table

- `id` (varchar, primary key)
- `name` (varchar)
- `email` (varchar)
- `message` (text)
- `createdAt` (timestamp)

## Important Notes

- Always backup your database before running migrations in production
- Ensure your database credentials in the `.env` file are correct
- The database port defaults to 3306 for MySQL
- Make sure your database user has the necessary permissions to create and modify tables
