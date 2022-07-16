import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/logout', (req: Request, res: Response) => {
  res.send('POST Logout');
});

export default router;
