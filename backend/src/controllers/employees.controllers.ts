import { Request, Response } from 'express';
<<<<<<< HEAD
import { Employee, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from '../models/employees.models';
=======
import {
  Employee,
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../models/employees.models';
>>>>>>> 1775e07d31be872fe67803ce660cfaf15923413f

export const getEmployeesController = (req: Request, res: Response): void => {
  const employees: Employee[] = getEmployees();
  res.status(200).json({ employees });
};

<<<<<<< HEAD
export function getEmployeeByIdController(req: Request, res: Response) {
    const id: number = parseInt(req.params.id, 10);
    const employee: Employee | any = getEmployeeById(id);
    if (employee) {
        res.status(200).json(employee);
    }
    else {
        res.status(400).json("employee not found...");
    }
}
export function addnewEmployee(req: Request, res: Response) {
    const employee: Employee = req.body;
    createEmployee(employee);
    res.status(201).json({
        message: 'employee created',
        employee,
    });
}

export function UpdateEmployeeController(req: Request, res: Response) {
    const id: number = parseInt(req.params.id, 10);
  const employeeUpdate: Employee = req.body;
  employeeUpdate.employeeId = id;
  updateEmployee(employeeUpdate);
  res.status(200).json({
    message: 'User updated',
    user: employeeUpdate,
  });
}

export function DeleteEmployeeController(req: Request, res: Response) {
    const id: number = parseInt(req.params.id, 10);
    deleteEmployee(id);
    res.status(200).json({
      message: `Employee ${id} deleted`,
    });
}
=======
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
>>>>>>> 1775e07d31be872fe67803ce660cfaf15923413f
