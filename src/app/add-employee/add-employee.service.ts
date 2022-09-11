import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(employee:any){
    return this.http.post('http://localhost:8080/api/employee',employee);
  }
}
