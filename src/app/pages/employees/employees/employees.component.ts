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
  public filteredEmployees: EmployeeModel[] = this.employeeItems;
  public search: string = '';

  constructor(private router: Router, private employeesService: EmployeesService, private employeeMock: EmployeeMock) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeesService.getEmployees().subscribe((result) => {
      this.employeeItems = result;
      this.filteredEmployees = result;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  // private getEmployees(): void {
  //   this.employeeItems = this.employeeMock.getEmployees();
  //   this.filteredEmployees = this.employeeMock.getEmployees();
  // }

  public detailsOfEmployee(id: number): void {
    this.router.navigate(['employee-detail', id]);
  }

  filterEmployees() {
    if (this.search.trim() === '') {
      this.filteredEmployees = this.employeeItems;
    } else {
      this.filteredEmployees = this.employeeItems.filter((employee) =>
      employee.employee_name.toLowerCase().includes(this.search.toLowerCase()) ||
      employee.id.toString().toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
}
