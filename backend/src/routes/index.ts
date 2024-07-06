import { Router } from 'express';
import homeRouter from './home.routes';
import usersRouter from './users.routes';
import employeeRouter from './employee.routes'
import customersRouter from './customers.routes'

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/', homeRouter);
router.use('/users', usersRouter);
router.use('/employee', employeeRouter);

router.use('/customers', customersRouter)
export default router;