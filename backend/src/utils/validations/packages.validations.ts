import {
    Request,
    Response,
    NextFunction
  } from 'express';
  
  export const validatePackage = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    const {
      id,
      cost,
      services,
    } = req.body;
  
    const errors = [];
  
    if (!id) {
      errors.push('id is required');
    }  

    if (!cost){
      errors.push('cost is required');
    }

    if (!services || services.length < 2) {
      errors.push('services need at least two services');
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