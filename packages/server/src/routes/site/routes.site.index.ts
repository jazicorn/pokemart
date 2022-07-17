import express, { Express } from 'express';

import home from './routes.site.home';

const app: Express = express();

// site routes
app.use('/home', home);

export default app;
