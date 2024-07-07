import { Request, Response } from 'express';
import {
  Service,
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService
} from '../models/services.models';

export const getServicesController = (req: Request, res: Response): void => {
  const services: Service[] = getServices();
  res.status(200).json({ services });
};

export const getServiceByIdController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const service: Service | undefined = getServiceById(id);
  if (service) {
    res.status(200).json({ service });
  } else {
    res.status(404).json({ message: 'Service not found' });
  }
};

export const createServiceController = (req: Request, res: Response): void => {
  const service: Service = req.body;
  createService(service);
  res.status(201).json({
    message: 'Service created',
    service,
  });
};

export const updateServiceController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const serviceUpdate: Service = req.body;
  serviceUpdate.id = id;
  updateService(serviceUpdate);
  res.status(200).json({
    message: 'Service updated',
    service: serviceUpdate,
  });
};

export const deleteServiceController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  deleteService(id);
  res.status(200).json({
    message: `Service ${id} deleted`,
  });
};