import {
    Request,
    Response,
    NextFunction
  } from 'express';
  
  export const validateService = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  
    // Get data from request body
    const {
      id,
      name,
      description,
      destination,
      date,
      cost
    } = req.body;
  
    // Create an array to store errors
    const errors = [];
  
    // Validate data
    if (!id) {
      errors.push('id is required');
    }
  
    if (!name) {
      errors.push('name is required');
    }

    if (!description) {
        errors.push('description is required');
    }

    if (destination) {
        errors.push('destination is required');
      }

      if (date) {
        errors.push('date is required');
      }

      if (!cost) {
        errors.push('cost nac is required');
      }else {
        if(cost <= 0){
            errors.push('cost cannot be less than zero.')
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
  
    // Pass Service data to the next middleware
    next();
  };