import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeMock } from 'src/app/mocks/employee.mock';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  public employeeItems: EmployeeModel[] = [];

  constructor(private router: Router, private employeesService: EmployeesService, private employeeMock: EmployeeMock) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    // // Navega a otra vista y pasa el ID como parámetro
    // this.router.navigate(['employee-detail'], { relativeTo: this.route });
    this.employeesService.getEmployees().subscribe((result) => {
      this.employeeItems = result;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  // private getEmployees(): void {
  //   this.employeeItems = this.employeeMock.getEmployees();
  // }

  public detailsOfEmployee(id: number): void {
    this.router.navigate(['employee-detail', id]);
  }
}
