import {
    Request,
    Response,
    NextFunction
  } from 'express';
  
  export const validateCustomer = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  
    // Get data from request body
    const {
      id,
      firstname,
      lastname,
      adress,
      dni,
      date_nac,
      nationality,
      phone,
      email,
    } = req.body;
  
    // Create an array to store errors
    const errors = [];
  
    // Validate data
    if (!id) {
      errors.push('id is required');
    }
  
    if (!firstname) {
      errors.push('firstname is required');
    }

    if (!lastname) {
        errors.push('lastname is required');
    }

    if (!adress) {
        errors.push('adress is required');
    }

    if (!dni) {
        errors.push('dni is required');
      }

      if (!firstname) {
        errors.push('dni is required');
      }

      if (!date_nac) {
        errors.push('date nac is required');
      }else {
        // if less 18 age old
      }

      if (!nationality) {
        errors.push('nationality is required');
      }
  
    if (!email) {
      errors.push('email is required');
    }
  
    if (!phone) {
      errors.push('phone is required');
    } else {
      // Add more validations here
      // e.g. password must be at least 8 chars long
      if (phone.length < 11) {
        errors.push('phone must be at least 11 chars long');
      }
    }
  
    // If there are errors
    // return 422 (Unprocessable Entity)
    if (errors.length) {
      return res.status(422).json({
        message: 'Validation failed',
        errors,
      });
    }
  
    // Pass Customer data to the next middleware
    next();
  };