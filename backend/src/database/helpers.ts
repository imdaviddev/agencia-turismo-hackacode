import { Customer } from "../models/customers.models";
import { db } from "./db.sqlite";

const customers: Customer[] = [
    {
      id: 1,
      firstname: "Juan",
      lastname: "Pérez",
      address: "Calle Falsa 123, Ciudad",
      dni: "12345678A",
      date_nac: "1985-05-15",
      nationality: "Argentino",
      phone: "+54 11 2345-6789",
      email: "juan.perez@example.com"
    },
    {
      id: 2,
      firstname: "María",
      lastname: "García",
      address: "Av. Siempre Viva 742, Ciudad",
      dni: "87654321B",
      date_nac: "1990-08-25",
      nationality: "Mexicana",
      phone: "+52 55 1234-5678",
      email: "maria.garcia@example.com"
    },
    {
      id: 3,
      firstname: "Carlos",
      lastname: "Martínez",
      address: "Calle de la Amargura 5, Pueblo",
      dni: "11223344C",
      date_nac: "1978-12-01",
      nationality: "Español",
      phone: "+34 91 7654-3210",
      email: "carlos.martinez@example.com"
    },
    {
      id: 4,
      firstname: "Ana",
      lastname: "López",
      address: "Av. del Mar 456, Ciudad",
      dni: "55667788D",
      date_nac: "1982-03-30",
      nationality: "Chilena",
      phone: "+56 2 9876-5432",
      email: "ana.lopez@example.com"
    },
    {
      id: 5,
      firstname: "Pedro",
      lastname: "Rodríguez",
      address: "Calle Luna 789, Ciudad",
      dni: "99887766E",
      date_nac: "1995-11-20",
      nationality: "Colombiano",
      phone: "+57 1 234-5678",
      email: "pedro.rodriguez@example.com"
    }
];

export async function initCustomers(): Promise<void> {
    try {
        await new Promise<void>((resolve, reject) => {
            db.serialize(() => {
                db.run(`DROP TABLE IF EXISTS Customers;`)
                db.run(`
                    CREATE TABLE IF NOT EXISTS Customers (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        firstname TEXT NOT NULL,
                        lastname TEXT NOT NULL,
                        address TEXT NOT NULL,
                        dni TEXT NOT NULL,
                        date_nac TEXT NOT NULL,
                        nationality TEXT NOT NULL,
                        phone TEXT NOT NULL,
                        email TEXT NOT NULL
                    )
                `, (err: Error | null) => {
                    if (err) {
                        return reject(err);
                    }
                });

                const statement = db.prepare(`
                    INSERT INTO Customers (firstname, lastname, address, dni, date_nac, nationality, phone, email)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                `);

                for (const customer of customers) {
                    statement.run([
                        customer.firstname,
                        customer.lastname,
                        customer.address,
                        customer.dni,
                        customer.date_nac,
                        customer.nationality,
                        customer.phone,
                        customer.email
                    ], (err: Error | null) => {
                        if (err) {
                            return reject(err);
                        }
                    });
                }
                statement.finalize((err: Error | null) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve();
                });
            });
        });

        /** 
        // Log the contents of the table
        db.each("SELECT * FROM Customers", (err: Error | null, row: Customer) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(JSON.stringify(row, null, 2));
            }
        });
        **/
    } catch (error) {
        console.error("Error initializing the customers table:", error);
    } finally {
        db.close((err: Error | null) => {
            if (err) {
                console.error("Error closing the database:", err.message);
            }
        });
    }
}
