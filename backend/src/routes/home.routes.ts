import { Router, Request, Response } from 'express';
import { Employee } from '../models/employees.models';
// New Router instance
const router = Router();

// Home routes
router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default router;