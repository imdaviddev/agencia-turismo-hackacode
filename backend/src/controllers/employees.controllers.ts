import { Request, Response } from 'express';
import {
  Employee,
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../models/employees.models';

export const getEmployeesController = (req: Request, res: Response): void => {
  const employees: Employee[] = getEmployees();
  res.status(200).json({ employees });
};

export const getEmployeeByIdController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const employee: Employee | undefined = getEmployeeById(id);
  if (employee) {
    res.status(200).json({ employee });
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
};

export const createEmployeeController = (req: Request, res: Response): void => {
  const employee: Employee = req.body;
  createEmployee(employee);
  res.status(201).json({
    message: 'Employee created',
    employee,
  });
};

export const updateEmployeeController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const employeeUpdate: Employee = req.body;
  employeeUpdate.id = id;
  updateEmployee(employeeUpdate);
  res.status(200).json({
    message: 'Employee updated',
    Employee: employeeUpdate,
  });
};

export const deleteEmployeeController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  deleteEmployee(id);
  res.status(200).json({
    message: `Employee ${id} deleted`,
  });
};
