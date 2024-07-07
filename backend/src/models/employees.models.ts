export interface Employee {
    employeeId?: number;
    firstName?: string;
    lastName?: string;
    address?: string;
    dni?: string;
    birthDate?: Date;
    nationality?: string;
    phoneNumber?: string;
    email?: string;
    position?: string;
    salary?: number;

}
const employees: Array<Employee> = [];


export function getEmployeeById(id: number) {
    throw new Error("Function not implemented.");
}
export const createEmployee = (employee: Employee): void => {
    employees.push(employee);
};

export const updateEmployee = (employee: Employee): void => {
    throw new Error("Function not implemented.");
};

export const deleteEmployee = (id: number): void => {
    throw new Error("Function not implemented.");
};

