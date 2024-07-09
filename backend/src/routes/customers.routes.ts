import { Router } from 'express';
import { validateCustomer } from '../utils/validations/customers.validations';
import CustomerController from '../controllers/customers.controllers';
// Instanciación de los repositorios, servicios y controladores
const customerController = new CustomerController();

// Nueva instancia de Router
const router = Router();

// Definición de las rutas para clientes
router.get('/', customerController.getCustomers);
router.get('/:id', customerController.getCustomerById);
router.post(
  '/', 
  validateCustomer, // Middleware de validación
  customerController.createCustomer
);
router.put(
  '/:id', 
  validateCustomer, // Middleware de validación
  customerController.updateCustomer
);
router.delete('/:id', customerController.deleteCustomer);

export default router;
