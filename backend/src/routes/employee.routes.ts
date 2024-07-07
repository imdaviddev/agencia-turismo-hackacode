import { Router, Request, Response } from 'express';
import { getEmployeeByIdController, addnewEmployee, UpdateEmployeeController, DeleteEmployeeController } from '../controllers/employees.controllers';
import { validateEmployee } from "../utils/validations/employees.validations";
const router = Router();

router.get('/', (req: Request, res: Response) => {
    let instructions = "use /id for get a employee, /list to show all employees";
    res.send("Welcome to the employee section \n" + instructions);
});

router.get('/:id', (req: Request, res: Response) => {
    getEmployeeByIdController;
});
router.post('/',validateEmployee, addnewEmployee);
router.put('/:id', validateEmployee,UpdateEmployeeController);
router.delete('/:id', DeleteEmployeeController);

export default router