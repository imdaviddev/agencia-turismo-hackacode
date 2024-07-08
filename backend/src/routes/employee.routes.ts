import { Router } from 'express';
import { updateEmployeeController, deleteEmployeeController, getEmployeeByIdController, getEmployeesController} from '../controllers/employees.controllers';
import { validateEmployee } from '../utils/validations/employees.validations';

// New Router instance
const router = Router();

// Employees routes
router.get('/', getEmployeesController);
router.get('/:id', getEmployeeByIdController);
router.post(
  '/', 
  validateEmployee, 
  updateEmployeeController 
);
router.put(
  '/:id', 
  validateEmployee,
  updateEmployeeController
);
router.delete('/:id', deleteEmployeeController);

export default router;
