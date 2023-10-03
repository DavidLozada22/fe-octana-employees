import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeMock } from 'src/app/mocks/employee.mock';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  private employeeId: number = 0;
  public employee: EmployeeModel = { id: 0, employee_name: '', employee_salary: '', employee_age: '', profile_image: '', employee_annual_salary: 0 };

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private employeeMock: EmployeeMock) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = Number(params['id']);
    });

    this.initializeData();
  }

  initializeData(): void {
    this.getEmployee();
  }

  private getEmployee(): void {
    // // Navega a otra vista y pasa el ID como parámetro
    // this.router.navigate(['employee-detail'], { relativeTo: this.route });
    
    this.employeesService.getEmployee(this.employeeId).subscribe((result) => {
      this.employee = result;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  // private getEmployee(): void {
  //   this.employee = this.employeeMock.getEmployee();
  // }
}
