import express, { Express } from 'express';

import login from './routes.auth.login';
import logout from './routes.auth.logout';
import register from './routes.auth.register';

const app: Express = express();

// auth routes
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);

export default app;
