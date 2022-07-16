import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import home from './routes/site/home';
import auth from './routes/auth/routes.auth.index';
import user from './routes/auth/user/routes.user.index';

dotenv.config();

const app: Express = express();

// body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// home route
app.use('/', home);
// all auth routes
app.use('/auth', auth);
// all user routes
app.use('/user', user);

// port number for local server
const port = process.env.PORT;

// start local server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});


