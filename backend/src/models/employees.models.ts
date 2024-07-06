export interface Employee{
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

export function getEmployeeById(id: number) {
    throw new Error("Function not implemented.");
}

