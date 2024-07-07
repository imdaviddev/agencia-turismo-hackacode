import { Request, Response } from 'express';
import { Employee, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from '../models/employees.models';


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