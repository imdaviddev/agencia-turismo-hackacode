export interface Customer {
  id: number;
  firstname: string;
  lastname: string;
  adress: string;
  dni: string;
  date_nac: string;
  nationality: string;
  phone: string;
  email: string;
}

const customers: Customer[] = [
  {
    id: 1,
    firstname: "Juan",
    lastname: "Pérez",
    adress: "Calle Falsa 123, Ciudad",
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
    adress: "Av. Siempre Viva 742, Ciudad",
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
    adress: "Calle de la Amargura 5, Pueblo",
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
    adress: "Av. del Mar 456, Ciudad",
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
    adress: "Calle Luna 789, Ciudad",
    dni: "99887766E",
    date_nac: "1995-11-20",
    nationality: "Colombiano",
    phone: "+57 1 234-5678",
    email: "pedro.rodriguez@example.com"
  }
];

export const getCustomers = (): Array<Customer> => {
  return customers;
};

export const getCustomerById = (id: number): Customer | undefined => {
  return customers.find(Customer => Customer.id === id);
};

export const createCustomer = (customer: Customer): void => {
  customers.push(customer);
};

export const updateCustomer = (customer: Customer): void => {
  const index = customers.findIndex(u => u.id === customer.id);
  customers[index] = customer;
};

export const deleteCustomer = (id: number): void => {
  const index = customers.findIndex(u => u.id === id);
  customers.splice(index, 1);
};