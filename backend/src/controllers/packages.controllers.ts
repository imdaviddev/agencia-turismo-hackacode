import { Request, Response } from 'express';
import {
  Package,
  getPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage
} from '../models/packages.models';

export const getPackagesController = (req: Request, res: Response): void => {
  const packages: Package[] = getPackages();
  res.status(200).json({ packages });
};

export const getPackageByIdController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const package_: Package | undefined = getPackageById(id);
  if (package_) {
    res.status(200).json({ package_ });
  } else {
    res.status(404).json({ message: 'Package not found' });
  }
};

export const createPackageController = (req: Request, res: Response): void => {
  const package_: Package = req.body;
  createPackage(package_);
  res.status(201).json({
    message: 'Package created',
    package_,
  });
};

export const updatePackageController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const packageUpdate: Package = req.body;
  packageUpdate.id = id;
  updatePackage(packageUpdate);
  res.status(200).json({
    message: 'Package updated',
    package: packageUpdate,
  });
};

export const deletePackageController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  deletePackage(id);
  res.status(200).json({
    message: `Package ${id} deleted`,
  });
};