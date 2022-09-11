import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http:HttpClient) { }
  getEmployeeDetails(id:any){
    
    return this.http.get(`http://localhost:8080/api/employee/${id.id}`);
  }
}
