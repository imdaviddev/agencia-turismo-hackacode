import { Request, Response } from 'express';
import { Customer } from '../models/customers.models';
import DatabaseConnection from '../database/db.sqlite';

class CustomerController {

  public getCustomers = async (req: Request, res: Response): Promise<void> => {
    try {
      const query = 'SELECT * FROM Customers';
      const db = DatabaseConnection.getInstance();
      db.all(query, [], (err, data) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ message: 'Error retrieving customers from database' });
          return;
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error('Internal Server Error:', error);
      res.status(500).json({ message: 'Internal Server Error: ' + error });
    }
  };

  public getCustomerById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const query = 'SELECT * FROM Customers WHERE id = ?';
      const db = DatabaseConnection.getInstance();
      db.get(query, [id], (err, customer: Customer) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ message: 'Error retrieving customer from database' });
          return;
        }
        if (customer) {
          res.status(200).json(customer);
        } else {
          res.status(404).json({ message: 'Customer not found' });
        }
      });
    } catch (error) {
      console.error('Internal Server Error:', error);
      res.status(500).json({ message: 'Internal Server Error: ' + error });
    }
  };

  public createCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
      const customer: Customer = req.body;
      const query = `
        INSERT INTO Customers (firstname, lastname, address, dni, date_nac, nationality, phone, email)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const db = DatabaseConnection.getInstance();
      db.run(query, [
        customer.firstname, customer.lastname, customer.address, customer.dni,
        customer.date_nac, customer.nationality, customer.phone, customer.email
      ], function (err) {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ message: 'Error creating customer in database' });
          return;
        }
        res.status(201).json({
          message: 'Customer created',
          customer,
        });
      });
    } catch (error) {
      console.error('Internal Server Error:', error);
      res.status(500).json({ message: 'Internal Server Error: ' + error });
    }
  };

  public updateCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const customerUpdate: Customer = req.body;
      const query = `
        UPDATE Customers
        SET firstname = ?, lastname = ?, address = ?, dni = ?, date_nac = ?,
            nationality = ?, phone = ?, email = ?
        WHERE id = ?
      `;
      const db = DatabaseConnection.getInstance();
      db.run(query, [
        customerUpdate.firstname, customerUpdate.lastname, customerUpdate.address,
        customerUpdate.dni, customerUpdate.date_nac, customerUpdate.nationality,
        customerUpdate.phone, customerUpdate.email, id
      ], function (err) {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ message: 'Error updating customer in database' });
          return;
        }
        res.status(200).json({
          message: 'Customer updated',
          customer: customerUpdate,
        });
      });
    } catch (error) {
      console.error('Internal Server Error:', error);
      res.status(500).json({ message: 'Internal Server Error: ' + error });
    }
  };

  public deleteCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const query = 'DELETE FROM Customers WHERE id = ?';
      const db = DatabaseConnection.getInstance();
      db.run(query, [id], function (err) {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ message: 'Error deleting customer from database' });
          return;
        }
        res.status(200).json({
          message: `Customer ${id} deleted`,
        });
      });
    } catch (error) {
      console.error('Internal Server Error:', error);
      res.status(500).json({ message: 'Internal Server Error: ' + error });
    }
  };
}

export default CustomerController;
