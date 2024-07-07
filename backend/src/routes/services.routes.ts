import { Router } from 'express';
import { createServiceController, deleteServiceController, getServiceByIdController, getServicesController, updateServiceController } from '../controllers/services.controllers';
import { validateService } from '../utils/validations/services.validations';

// New Router instance
const router = Router();

// Services routes
router.get('/', getServicesController);
router.get('/:id', getServiceByIdController);
router.post(
  '/', 
  validateService, 
  createServiceController 
);
router.put(
  '/:id', 
  validateService,
  updateServiceController
);
router.delete('/:id', deleteServiceController);

export default router;