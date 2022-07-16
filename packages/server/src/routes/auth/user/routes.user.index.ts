import express, { Express } from 'express';

import profile from './routes.user.profile';
import settings from './routes.user.settings';

const app: Express = express();

// user routes
app.use('/profile', profile);
app.use('/settings', settings);

export default app;
