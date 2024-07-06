import { Router } from 'express';
import { createPackageController, deletePackageController, getPackageByIdController, getPackagesController, updatePackageController } from '../controllers/packages.controllers';
import { validatePackage } from '../utils/validations/packages.validations';

// New Router instance
const router = Router();

// Packages routes
router.get('/', getPackagesController);
router.get('/:id', getPackageByIdController);
router.post(
  '/', 
  validatePackage, 
  createPackageController 
);
router.put(
  '/:id', 
  validatePackage,
  updatePackageController
);
router.delete('/:id', deletePackageController);

export default router;