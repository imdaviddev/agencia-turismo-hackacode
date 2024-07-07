import { Router, Request, Response } from 'express';
<<<<<<< HEAD
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
=======
import { createEmployeeController, deleteEmployeeController, getEmployeeByIdController, getEmployeesController, updateEmployeeController } from '../controllers/employees.controllers';
import { validateEmployee } from '../utils/validations/employees.validations';

// New Router instance
const router = Router();

// Employees routes
router.get('/', getEmployeesController);
router.get('/:id', getEmployeeByIdController);
router.post(
  '/', 
  validateEmployee, 
  createEmployeeController 
);
router.put(
  '/:id', 
  validateEmployee,
  updateEmployeeController
);
router.delete('/:id', deleteEmployeeController);

export default router;
>>>>>>> 1775e07d31be872fe67803ce660cfaf15923413f
