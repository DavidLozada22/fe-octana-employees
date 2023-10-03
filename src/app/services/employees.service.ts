import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmployeeModel } from '../models/employee.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private URL_BASE = environment.url_base;

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.URL_BASE}/Employees/GetEmployees`);
    //return this.http.get<EmployeeModel[]>(`https://localhost:7251/Employees/GetEmployees`);
  }

  public getEmployee(id: number): Observable<EmployeeModel> {
    // return this.http.get<EmployeeModel[]>(`${this.URL_BASE}/Employees/GetEmployees`);
    return this.http.get<EmployeeModel>(`${this.URL_BASE}/Employees/GetEmployeeById/${id}`);
    // return this.http.get<EmployeeModel>(`https://localhost:7251/Employees/GetEmployeeById/${id}`);
  }
}
