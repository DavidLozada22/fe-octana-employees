import { EmployeeModel } from "../models/employee.model";

export class EmployeeMock {
  // Mock de lista de empleados
  public getEmployees(): EmployeeModel[] {
    return [
        { id: 1, employee_name: 'Empleado 1', employee_salary: '2', employee_age: '26', profile_image: 'sopos', employee_annual_salary: 24 },
        { id: 2, employee_name: 'Fernando', employee_salary: '2', employee_age: '26', profile_image: 'sopos', employee_annual_salary: 24 },
        { id: 3, employee_name: 'Astrid', employee_salary: '2', employee_age: '26', profile_image: 'sopos', employee_annual_salary: 24 },
      ];
  }

  public getEmployee(): EmployeeModel {
    return { id: 1, employee_name: 'Empleado 1', employee_salary: '2', employee_age: '26', profile_image: 'sopos', employee_annual_salary: 24 };
  }
}