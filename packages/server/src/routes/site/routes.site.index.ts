import express, { Express } from 'express';

import home from './routes.site.home';
import pokedex from './routes.site.pokedex';

const app: Express = express();

// site routes
app.use('/home', home);
app.use('/pokedex', pokedex);

export default app;
