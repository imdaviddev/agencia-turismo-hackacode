export interface Employee {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    dni: string;
    birthdate: Date;
    nationality: string;
    phoneNumber: string;
    email: string;
    position: string;
    salary: number;
}

const employees: Array<Employee> = [
  {
      id: 1,
      firstname: "Alice",
      lastname: "Johnson",
      address: "123 Beach Blvd, Miami, FL",
      dni: "98765432",
      birthdate: new Date("1988-04-12"),
      nationality: "American",
      phoneNumber: "+1-305-123-4567",
      email: "alice.johnson@travelagency.com",
      position: "Travel Consultant",
      salary: 45000
  },
  {
      id: 2,
      firstname: "Bob",
      lastname: "Martinez",
      address: "456 Ocean Dr, Miami, FL",
      dni: "87654321",
      birthdate: new Date("1982-09-30"),
      nationality: "American",
      phoneNumber: "+1-305-234-5678",
      email: "bob.martinez@travelagency.com",
      position: "Sales Representative",
      salary: 42000
  },
  {
      id: 3,
      firstname: "Maria",
      lastname: "Lopez",
      address: "789 Sunset St, Miami, FL",
      dni: "76543210",
      birthdate: new Date("1995-02-15"),
      nationality: "American",
      phoneNumber: "+1-305-345-6789",
      email: "maria.lopez@travelagency.com",
      position: "Customer Service Agent",
      salary: 40000
  }
];


export const getEmployees = (): Array<Employee> => {
    return employees;
  };
  
  export const getEmployeeById = (id: number): Employee | undefined => {
    return employees.find(employee => employee.id === id);
  };
  
  export const createEmployee = (employee: Employee): void => {
    employees.push(employee);
  };
  
  export const updateEmployee = (employee: Employee): void => {
    const index = employees.findIndex(u => u.id === employee.id);
    employees[index] = employee;
  };
  
  export const deleteEmployee = (id: number): void => {
    const index = employees.findIndex(u => u.id === id);
    employees.splice(index, 1);
  };

