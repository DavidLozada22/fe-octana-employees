import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmployeesComponent } from './pages/employees/employees/employees.component';
import { EmployeeDetailComponent } from './pages/employees/employee-detail/employee-detail.component';
import { EmployeeMock } from './mocks/employee.mock';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    EmployeeDetailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeMock],
  bootstrap: [AppComponent]
})
export class AppModule { }
