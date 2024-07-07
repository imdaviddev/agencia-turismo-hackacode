import { Router } from 'express';
import homeRouter from './home.routes';
import employeeRouter from './employee.routes'
import customersRouter from './customers.routes'
import servicesRouter from './services.routes';
import packagesRouter from './packages.routes';
import salesRouter from './sales.routes';

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/', homeRouter);
router.use('/employees', employeeRouter);
router.use('/services', servicesRouter);
router.use('/customers', customersRouter);
router.use('/packages', packagesRouter);
router.use('/sales', salesRouter);
export default router;