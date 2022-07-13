# Pokemart
> users can buy, sell, and trade pokemon

*TODO: [badges](https://shields.io/) go here*

---

## About

Website for users to buy, sell and trade pokemon with each other.
This project uses the [pokiapi](https://pokeapi.co/).

### README Checklist

- [X] One-liner explaining the purpose of the repo
- [ ] Necessary background context & links
- [ ] Potentially infamiliar terms link to informative sources
- [ ] Clear, *runnable* example of usage
- [ ] Installation instructions
- [ ] Example API documentation
- [ ] Performs [cognitive funneling](https://github.com/noffle/art-of-readme#cognitive-funneling)
- [ ] Caveats and limitations mentioned up-front
- [ ] Doesn't rely on images to relay critical information
- [X] License
- [ ] Add badges

---

### Features

...

### Requirements

...

### Installation

Want to setup the project yourself? 
Head over to the [docs](docs/README.md) folder or the [website](https://jazicorn.github.io/pokemart/).

### [Roadmap](./docs/developer/ROADMAP.md)
> Features/steps to project completion

### [Logs](./docs/logs/_index.md)
> Tracker for work done on project

#### Logs: Recent

1. **Common**
   1. Feature: Eslint | Config | Extend
      1. Action: Extend @pokemart/client & @pokemart/server tsconfig.json files
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

---

[MIT LICENSE](LICENSE.md)
