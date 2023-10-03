import { EmployeeModel } from "../models/employee.model";

export class EmployeeMock {
  // Mock de lista de empleados
  public getEmployees(): EmployeeModel[] {
    return [
        { id: 1, employee_name: 'Empleado 1', employee_salary: '2', employee_age: '26', profile_image: 'sopos', employee_annual_salary: 24 },
        { id: 2, employee_name: 'Empleado 2', employee_salary: '2', employee_age: '26', profile_image: 'sopos', employee_annual_salary: 24 },
        { id: 3, employee_name: 'Empleado 3', employee_salary: '2', employee_age: '26', profile_image: 'sopos', employee_annual_salary: 24 },
        // Agrega más empleados según sea necesario
      ];
  }

  public getEmployee(): EmployeeModel {
    return { id: 1, employee_name: 'Empleado 1', employee_salary: '2', employee_age: '26', profile_image: 'sopos', employee_annual_salary: 24 };
  }
}