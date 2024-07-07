import { Router } from 'express';
import { createSaleController, deleteSaleController, getSaleByIdController, getSalesController, updateSaleController } from '../controllers/sales.controllers';
import { validateSale } from '../utils/validations/sales.validations';

// New Router instance
const router = Router();

// Sales routes
router.get('/', getSalesController);
router.get('/:id', getSaleByIdController);
router.post(
  '/', 
  validateSale, 
  createSaleController 
);
router.put(
  '/:id', 
  validateSale,
  updateSaleController
);
router.delete('/:id', deleteSaleController);

export default router;