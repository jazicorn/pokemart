# PostgreSQL
> local and production setup for PostgreSQL project database

---

## Local
> local database setup

### PostgreSQL

#### Install

[MacOS Install](https://www.postgresql.org/download/macosx/)

**Homebrew Installation:**
```bash
brew install postgresql
```

**Connect Your Database**

- [Prisma/PostgreSQL](https://www.prisma.io/dataguide/postgresql/connecting-to-postgresql-databases)

**Localhost Port:**
```bash
# env DATABASE URL for: schema.prisma
postgresql://postgres:password@localhost:####/databasename?schema=public
```

#### Deployment

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

**Latest Migration:**
- migrations/20220914205013_postgres_dev


### PgAdmin4

#### Installation

- [Docs](https://www.pgadmin.org/docs/pgadmin4/development/index.html)
- [MacOS](https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.13/macos/)

#### Articles

- [Install PG Admin4 **After** Installing PostgreSQL](https://dev.to/letsbsocial1/installing-pgadmin-only-after-installing-postgresql-with-homebrew-part-2-4k44)
- https://marioyepes.com/install-postgresql-on-mac-with-brew/

---

## Production
> production database setup

#### Configuration

#### Remote Deployment

