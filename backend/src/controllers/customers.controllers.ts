import { Request, Response } from 'express';
import {
  Customer,
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from '../models/customers.models';

export const getCustomersController = (req: Request, res: Response): void => {
  const customers: Customer[] = getCustomers();
  res.status(200).json({ customers });
};

export const getCustomerByIdController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const customer: Customer | undefined = getCustomerById(id);
  if (customer) {
    res.status(200).json({ customer });
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
};

export const createCustomerController = (req: Request, res: Response): void => {
  const customer: Customer = req.body;
  createCustomer(customer);
  res.status(201).json({
    message: 'Customer created',
    customer,
  });
};

export const updateCustomerController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const customerUpdate: Customer = req.body;
  customerUpdate.id = id;
  updateCustomer(customerUpdate);
  res.status(200).json({
    message: 'Customer updated',
    customer: customerUpdate,
  });
};

export const deleteCustomerController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  deleteCustomer(id);
  res.status(200).json({
    message: `Customer ${id} deleted`,
  });
};