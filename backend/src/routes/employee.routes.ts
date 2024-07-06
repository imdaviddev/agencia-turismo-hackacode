import { Router, Request, Response } from 'express';
import { Employee } from '../models/employees.models';
import { getEmployeeByIdController } from '../controllers/employees.controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let instructions = "use /id for get a employee, /list to show all employees";
    res.send("Welcome to the employee section \n" + instructions);
});

router.get('/:id', (req: Request, res: Response) => {
    getEmployeeByIdController;
});

router.post('/',
    
);
export default router