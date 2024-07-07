import { Employee } from "../../models/employees.models";
import {
    Request,
    Response,
    NextFunction
  } from 'express';
export function validateEmployee(req:Request, res:Response, next:NextFunction) {
    
  const {
    employeeId,
    firstName,
    lastName,
    address,
    dni,
    birthDate,
    nationality,
    phoneNumber,
    email,
    position,
    salary

  } = req.body;
  
  const errors = [];
  if (!employeeId) {
    errors.push('id is required');
  }
  else if (typeof dni !== 'string') {
    errors.push('dni must be a string');
  }
  
  // Validación de birthDate
  if (!birthDate) {
    errors.push('birthDate is required');
  } else if (isNaN(Date.parse(birthDate))) {
    errors.push('birthDate must be a valid date');
  }
  
  // Validación de nationality
  if (!nationality) {
    errors.push('nationality is required');
  } else if (typeof nationality !== 'string') {
    errors.push('nationality must be a string');
  }
  
  // Validación de phoneNumber
  if (!phoneNumber) {
    errors.push('phoneNumber is required');
  } else if (typeof phoneNumber !== 'string') {
    errors.push('phoneNumber must be a string');
  }
  
  // Validación de email
  if (!email) {
    errors.push('email is required');
  } else if (typeof email !== 'string') {
    errors.push('email must be a string');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.push('email must be a valid email address');
  }
  
  // Validación de position
  if (!position) {
    errors.push('position is required');
  } else if (typeof position !== 'string') {
    errors.push('position must be a string');
  }
  
  // Validación de salary
  if (!salary) {
    errors.push('salary is required');
  } else if (typeof salary !== 'number') {
    errors.push('salary must be a number');
  } else if (salary < 0) {
    errors.push('salary must be a positive number');
  }
  
  // Devolvemos los errores si hay alguno
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  if (errors.length) {
    return res.status(422).json({
      message: 'Validation failed',
      errors,
    });
  }
  next();
}

