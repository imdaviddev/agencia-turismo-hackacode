import { Router, Request, Response } from 'express';
import { createCustomerController, deleteCustomerController, getCustomerByIdController, getCustomersController, updateCustomerController } from '../controllers/Customers.controllers';
import { validateCustomer } from '../utils/validations/customers.validations';

// New Router instance
const router = Router();

// Customers routes
router.get('/', getCustomersController);
router.get('/:id', getCustomerByIdController);
router.post(
  '/', 
  validateCustomer, 
  createCustomerController 
);
router.put(
  '/:id', 
  validateCustomer,
  updateCustomerController
);
router.delete('/:id', deleteCustomerController);

export default router;