import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeesComponent } from './pages/employees/employees/employees.component';
import { EmployeeDetailComponent } from './pages/employees/employee-detail/employee-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employee-detail/:id', component: EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
