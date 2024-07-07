import { Request, Response } from 'express';
import {
  Sale,
  getSales,
  getSaleById,
  createSale,
  updateSale,
  deleteSale
} from '../models/sales.models';

export const getSalesController = (req: Request, res: Response): void => {
  const sales: Sale[] = getSales();
  res.status(200).json({ sales });
};

export const getSaleByIdController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const sale: Sale | undefined = getSaleById(id);
  if (sale) {
    res.status(200).json({ sale });
  } else {
    res.status(404).json({ message: 'Sale not found' });
  }
};

export const createSaleController = (req: Request, res: Response): void => {
  const sale: Sale = req.body;
  createSale(sale);
  res.status(201).json({
    message: 'Sale created',
    sale,
  });
};

export const updateSaleController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const saleUpdate: Sale = req.body;
  saleUpdate.id = id;
  updateSale(saleUpdate);
  res.status(200).json({
    message: 'Sale updated',
    sale: saleUpdate,
  });
};

export const deleteSaleController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  deleteSale(id);
  res.status(200).json({
    message: `Sale ${id} deleted`,
  });
};