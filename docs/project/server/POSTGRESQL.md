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

#### Deployment

- [PostgreSQL Shell Docs](https://www.postgresql.org/docs/current/app-psql.html)

**Shell Commands:**
```bash
# Install
brew install postgresql

# Start
brew services start postgresql

# Stop
brew services stop postgresql

# Restart
brew services restart postgresql

# Start PostgreSQl Console
psql

# Uninstall
brew uninstall postgres
```

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

