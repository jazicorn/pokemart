import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/profile', (req: Request, res: Response) => {
  res.send('GET Profile');
});

router.put('/profile', (req: Request, res: Response) => {
  res.send('UPDATE Profile');
});

router.post('/profile', (req: Request, res: Response) => {
  res.send('POST profile');
});

router.delete('/profile', (req: Request, res: Response) => {
  res.send('DELETE profile');
});

export default router;
