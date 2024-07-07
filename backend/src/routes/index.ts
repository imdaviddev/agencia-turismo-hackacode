import { Router } from 'express';
import homeRouter from './home.routes';
import employeeRouter from './employee.routes'
import customersRouter from './customers.routes'
import servicesRouter from './services.routes';
<<<<<<< HEAD
=======
import packagesRouter from './packages.routes';
import salesRouter from './sales.routes';
>>>>>>> 1775e07d31be872fe67803ce660cfaf15923413f

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/', homeRouter);
<<<<<<< HEAD
router.use('/users', usersRouter);
router.use('/employee', employeeRouter);
router.use('/services', servicesRouter);
router.use('/customers', customersRouter)
=======
router.use('/employees', employeeRouter);
router.use('/services', servicesRouter);
router.use('/customers', customersRouter);
router.use('/packages', packagesRouter);
router.use('/sales', salesRouter);
>>>>>>> 1775e07d31be872fe67803ce660cfaf15923413f
export default router;