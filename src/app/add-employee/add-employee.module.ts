import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from './add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeService } from './add-employee.service';


@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[AddEmployeeService]
})
export class AddEmployeeModule { }
