import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/settings', (req: Request, res: Response) => {
  res.send('GET Settings');
});

router.put('/settings', (req: Request, res: Response) => {
  res.send('UPDATE Settings');
});

router.post('/settings', (req: Request, res: Response) => {
  res.send('POST Settings');
});

router.delete('/settings', (req: Request, res: Response) => {
  res.send('DELETE Settings');
});

export default router;
