import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/pokedex', (req: Request, res: Response) => {
  res.send('public pokedex page');
});

export default router;

