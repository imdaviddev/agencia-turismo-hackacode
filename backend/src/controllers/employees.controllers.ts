import { Request, Response } from 'express';
import { Employee, getEmployeeById } from '../models/employees.models';


export function getEmployeeByIdController(req:Request, res:Response){
    const id: number = parseInt(req.params.id, 10);
    const employee: Employee | any = getEmployeeById(id);
    if (employee) {
        res.status(200).json(employee);
    }
    else{
        res.status(400).json("employee not found...");
    }
}