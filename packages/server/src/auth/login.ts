import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/login', (req: Request, res: Response) => {
  res.send('GET Login');
});

router.post('/login', (req: Request, res: Response) => {
  res.send('POST Login');
});

export default router;
