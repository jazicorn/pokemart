# SETUP(DEV)
> Daily setup for developer devlopment

## Categories

--- 

### Nextjs Server

#### 🐘 [PostgreSQL@14](../../project/server/databases/POSTGRESQL.md)
**Localhost Port:**
```shell
# env DATABASE URL for: schema.prisma
postgresql://postgres:password@localhost:####/databasename?schema=public
```

#### Local Deployment

- [PostgreSQL Shell Docs](https://www.postgresql.org/docs/current/app-psql.html)

**Shell Commands:**
```bash
# Install
brew install postgresql@14

# Start
brew services start postgresql@14

# Stop
brew services stop postgresql@14

# Restart
brew services restart postgresql@14

# Start PostgreSQl Console
psql

# Uninstall
brew uninstall postgres@14
```
---

### Database Setup/Update/Migration

#### Database Migration
```bash
# package command | "migrate:postgres:dev": "dotenv -e lib/env/.env.development.local -- npx prisma migrate dev --name postgres-dev",
yarn migrate:postgres:dev
```
#### Database Seeding
```bash
# package command | "dev:generate": "dotenv -e lib/env/.env.development.local npx prisma generate",
yarn dev:generate
```
