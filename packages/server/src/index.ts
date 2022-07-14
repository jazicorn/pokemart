import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import login from './auth/login';
import register from './auth/register';
import profile from './auth/user/profile';
import settings from './auth/user/settings';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// user routes
app.use('/login', login);
app.use('/register', register);
app.use('/:slug/profile', profile);
app.use('/:slug/settings', settings);

// app homepage
app.get('/', (req: Request, res: Response) => {
  res.send('home page');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
