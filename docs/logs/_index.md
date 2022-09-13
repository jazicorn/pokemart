# Logs
> feature tracker

## About

Keep tracj of project changes

### Options
> Example of tracker table inputs

- **ID**
  - Ex. 001

- **Version**
  - Ex. Beta | MD Format: logv_beta.md
  - Ex. 1.0.0 | MD Format: logv1-0-0.md


- **Status** | [emoji's](https://gist.github.com/rxaviers/7360908)
  - :-1: &nbsp; **Incomplete** 
    - *(Not Started)*
  - :wave: &nbsp; **Staged** 
    - *(Setup Complete)* 
    - *(Example Setup: Packages;Imports;Documentation;etc.)*
  - :pray: &nbsp; **Work-In-Progress** 
    - *(Started Coding)* 
  - :tada: &nbsp; **Complete** 
    - *(Documented & Finished)*

- **Category**
  - Project Management (PM) | Github & Documentation
  - Client | Pages & Components
  - Server | Databases & API's
  - Devops | Testing & Deployment

- **Feature**
  - Nextjs
  - HTML
  - CSS
  - Eslint
  - Tailwind
  - etc.

### Table
> daily log of what I worked on

#### Example Table:

|  #ID   |  Version  |   Date   |        Status        |     Category      |  Feature   |
| ------ | --------- | -------- | -------------------- | ----------------- | ---------- |
| Format | Ex. Beta  | YY/MM/DD | &nbsp;&nbsp;:tada    | &nbsp; Ex. (PM)   | Ex. (Git)  |
| 001    | Beta      | 22/07/10 | &nbsp;&nbsp;:tada: | &nbsp; Client     | React; Eslint |
| 002    | Beta      | 22/07/10 | &nbsp;&nbsp;:tada: | &nbsp; Server     | package:dotenv |
| 003    | Beta      | 22/07/10 | &nbsp;&nbsp;:pray: | &nbsp; PM         | Docsify    |
| 004    | Beta      | 22/07/11 | &nbsp;&nbsp;:-1:   | &nbsp; Server     | Auth;Database |
| 005    | Beta      | 22/07/11 | &nbsp;&nbsp;:-1:   | &nbsp; Server     | Auth;ORM   |  
| 006    | Beta      | 22/07/11 | &nbsp;&nbsp;:-1:   | &nbsp; Server     | Auth;Auth0 |
| ...    | ....      | ........ | &nbsp;&nbsp;         | &nbsp; .......    | ...        |  

---

#### Logs: Current

- [ ] Common
  - [ ] Eslint: Config: Extend
- [ ] Server
  - [ ] Feature: Page: Home
  - [ ] Feature: Authentication
    - [ ] Database: MongoDB
    - [ ] ORM: Prisma
    - [ ] Validation: Joi
    - [ ] Authentication Service: Auth0
  - [ ] Route: User: Profile
  - [ ] Route: User: Settings
  - [ ] Route: User: Pokedex
  - [ ] Route: Public: Pokedex
- [ ] Client
  - [ ] Configure TailwindCSS
  - [ ] Page: Home
  - [ ] Page: Public: Pokedex
    - [ ] Connect Public Route to Public Page
  - [ ] Page: Private (User): Pokedex
    - [ ] Connect Private Route to Private Page

1. **Common**
   1. Feature: Eslint | Config | Extend
      1. Action: Configure Eslint
      2. [Documentation](https://eslint.org/docs/latest/):
         1. [Configuration](https://eslint.org/docs/latest/user-guide/configuring/)
         2. [Configuration: Cascading & Hierarchy](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#cascading-and-hierarchy)
         3. [Developer Guide](https://eslint.org/docs/latest/developer-guide/shareable-configs)
      3. Articles:
         1. https://prateeksurana.me/blog/difference-between-eslint-extends-and-plugins/
2. **Server**
   1. Feature: Page: Home
      1. Action: Create route for home page
   2. Feature: Authentication
      1. Database | No-SQL | MongoDB
         1. [Docs](https://www.mongodb.com/docs/)
         2. [Remote Database](https://www.mongodb.com/free-cloud-database)
      2. ORM | Prisma
         1. [Docs](https://www.prisma.io/mongodb)
         2. [MongoDB Connector](https://www.prisma.io/docs/concepts/database-connectors/mongodb)
         3. Articles
            1. https://www.mongodb.com/developer/languages/typescript/type-safety-with-prisma-and-mongodb/
            2. https://www.mongodb.com/developer/products/mongodb/how-prisma-introspects-a-schema-from-a-mongodb-database/
            3. https://progressivecoder.com/lightning-fast-guide-on-prisma-mongodb-connection-using-typescript/
      3. Validation | Joi
         1. [Docs](https://joi.dev/api/)
      4. Authentication Service | Auth0
         1. [Website](https://auth0.com/docs/quickstart/backend/nodejs/01-authorization)
         2. Articles:
            1. https://auth0.com/blog/developing-well-organized-apis-with-nodejs-joi-and-mongo/
            2. https://www.infoworld.com/article/3629129/how-to-use-auth0-with-nodejs-and-express.html
            3. https://auth0.com/blog/connecting-auth0-to-mongodb/
   3. Feature: CRUD User Account
   4. Feature: CRUD User Pokedex
3. **Client**
   1. Page: Home
   2. Page: Public Pokedex  
   3. Page: Private Pokedex
4.  ...


