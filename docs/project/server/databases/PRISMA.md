# [Prisma](https://www.prisma.io)
> ORM for database

## About
- [Prisma: Nextjs](https://www.prisma.io/nextjs)
- [Pricing](https://www.prisma.io/pricing)
- [Documentation](https://www.prisma.io/docs/)
- [API Reference](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
- [Example Projects: Github](https://github.com/prisma/prisma-examples)
- [Prisma: Getting Started](https://www.prisma.io/docs/getting-started)
- [Prisma: Data Guide](https://www.prisma.io/dataguide/)
- [Prisma: Studio](https://www.prisma.io/studio)

---

### Prisma Concepts
- [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema)
- [Prisma Schema: Generators](https://www.prisma.io/docs/concepts/components/prisma-schema/generators)
- [Prisma Schema: Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
- [Prisma Schema: Relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)
- [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)
- [Prisma Client: CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
- [Prisma Client: Select Fields](https://www.prisma.io/docs/concepts/components/prisma-client/select-fields)
- [Prisma Client: Filtering and Sorting](https://www.prisma.io/docs/concepts/components/prisma-client/filtering-and-sorting)
- [Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Prisma Studio](https://www.prisma.io/docs/concepts/components/prisma-studio)
- [Prisma Studio: Github](https://github.com/prisma/studio)
- [Prisma Validator](https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/prisma-validator)
- [Logging](https://www.prisma.io/docs/concepts/components/prisma-client/middleware/logging-middleware)
- [Session Data](https://www.prisma.io/docs/concepts/components/prisma-client/middleware/session-data-middleware)
- [Full Text Search (Preview)](https://www.prisma.io/docs/concepts/components/prisma-client/full-text-search)
- [Custom Validation](https://www.prisma.io/docs/concepts/components/prisma-client/custom-validation)
- [Pagination](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)
- [Exclude fields](https://www.prisma.io/docs/concepts/components/prisma-client/excluding-fields)
- [null vs undefined](https://www.prisma.io/docs/concepts/components/prisma-client/null-and-undefined)
- [Handling Excepts and Errors](https://www.prisma.io/docs/concepts/components/prisma-client/handling-exceptions-and-errors)

#### [Working with Json fields](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields)
```ts
// The Json field supports a few additional types, such as string and boolean. 
// These additional types exist to match the types supported by JSON.parse():
export declare type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray
```

#### Creating Users
- [typesafe code](https://levelup.gitconnected.com/writing-type-safe-javascript-code-with-prisma-and-mysql-929a73930cba)

#### Migrating Database
```bash
# creates database mapping in folder under /--######_init 
prisma migrate dev --name init
```

#### Migrate Dev
The migrate dev command updates your database using migrations during development and creates the database if it does not exist.
```bash
npx prisma migrate dev
```
- [migrate dev](https://www.prisma.io/docs/guides/database/developing-with-prisma-**migrate**)
- [API Docs](https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-dev)

#### Migrate Reset
This command deletes and recreates the database, or performs a 'soft reset' by removing all data, tables, indexes, and other artifacts.
```bash
prisma migrate reset
```
- [API Docs](https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-reset)
- [github issue](https://github.com/prisma/prisma/discussions/9665)

#### Seeding Your Database
- [Docs](https://www.prisma.io/docs/guides/database/seed-database)
- https://www.stackfive.io/work/prisma/seeding-relational-data-with-prisma
- https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql/prisma/seed.ts
- https://stackoverflow.com/questions/71162710/how-to-seed-with-relationships-in-prisma
- https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries
- https://morioh.com/p/8cc54ef4b251
- https://www.danilucaci.com/blog/reset-and-seed-prisma-database
- https://www.getsynth.com/docs/blog/2021/08/31/seeding-databases-tutorial
- [prisma-db-seed-faker-ex](https://lewistyler.xyz/2022/02/04/prisma-db-seed-faker-example/)

#### Database Seeding
```bash
# package command | "dev:generate": "dotenv -e lib/env/.env.development.local npx prisma generate",
yarn dev:generate
```

**💡 when .env file not in root directory:**
```bash 
# Use dotenv to designate env file and/or location
yarn dotenv -e lib/env/.env.development.local prisma db seed  
```

- [Prisma Migrate & Seeding](https://www.prisma.io/docs/guides/database/seed-database#integrated-seeding-with-prisma-migrate)

### Prisma Studio
```bash
# run this command to view database data in dev enviroment
yarn dev:studio
```
```bash
# flag hostname for port other than 5555 | currently flag not working
yarn dev:studio --hostname
```

---

## 3rd Party API's

### Faker.js
> Fake data to seed developer/testing database

- [Website](https://fakerjs.dev/)

### @prisma/faker
>In testing workflows, generating seed data usually includes a lot of boilerplate. We either rely on hardcoded fixtures that need to be migrated with changing code.

>@prisma/faker solves this by generating seed data based on your Prisma schema, as your application evolves, the generated data also evolves deterministically.

- [prisma-faker](https://github.com/maticzav/prisma-faker)

---

## Articles

- [Prisma/Nodejs](https://www.digitalocean.com/community/tutorials/how-to-build-a-rest-api-with-prisma-and-postgresql)

