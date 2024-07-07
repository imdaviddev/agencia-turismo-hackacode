import { Router, Request, Response } from 'express';
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