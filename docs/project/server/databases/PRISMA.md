# [Prisma](https://www.prisma.io)
> ORM for database

## About
- [Prisma: Nextjs](https://www.prisma.io/nextjs)
- [Pricing](https://www.prisma.io/pricing)
- [Documentation](https://www.prisma.io/docs/)
- [Example Projects: Github](https://github.com/prisma/prisma-examples)
- [Prisma: Getting Started](https://www.prisma.io/docs/getting-started)
- [Prisma: Data Guide](https://www.prisma.io/dataguide/)

---

### Prisma Concepts
- [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema)
- [Prisma Schema: Generators](https://www.prisma.io/docs/concepts/components/prisma-schema/generators)
- [Prisma Schema: Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
- [Prisma Schema: Relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)
- [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)
- [Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Prisma Studio](https://www.prisma.io/docs/concepts/components/prisma-studio)

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

**💡 when .env file not in rootdirectory:**
```bash
# I used dotenv to use choose which env file to use
yarn dotenv -e lib/env/.env.development.local prisma db seed  
```
---

## Add-ons/Tools

### Faker.js
> Fake data to seed developer/testing database

- [Website](https://fakerjs.dev/)

### @prisma/faker
>In testing workflows, generating seed data usually includes a lot of boilerplate. We either rely on hardcoded fixtures that need to be migrated with changing code.

>@prisma/faker solves this by generating seed data based on your Prisma schema, as your application evolves, the generated data also evolves deterministically.

- [prsiam-faker](https://github.com/maticzav/prisma-faker)

---

## Articles

- [Prisma/Nodejs](https://www.digitalocean.com/community/tutorials/how-to-build-a-rest-api-with-prisma-and-postgresql)

