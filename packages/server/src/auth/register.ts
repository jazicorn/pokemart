import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/register', (req: Request, res: Response) => {
  res.send('POST Register');
});

export default router;
